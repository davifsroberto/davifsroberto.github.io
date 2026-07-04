import Image from 'next/image';
import { KeyboardEvent, MouseEvent, useEffect, useState } from 'react';

import { Container } from './styles';
import { PortfolioGallery } from '../PortfolioGallery';

type GalleryProps = {
  gallery: PortfolioGallery;
};

export default function PortfolioProject({ gallery }: GalleryProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  const lastPhotoIndex = gallery.images.length - 1;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }

      if (event.key === 'ArrowLeft') {
        setPhotoIndex((currentPhotoIndex) =>
          currentPhotoIndex === 0 ? lastPhotoIndex : currentPhotoIndex - 1
        );
      }

      if (event.key === 'ArrowRight') {
        setPhotoIndex((currentPhotoIndex) =>
          currentPhotoIndex === lastPhotoIndex ? 0 : currentPhotoIndex + 1
        );
      }
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, lastPhotoIndex]);

  function openLightbox(): void {
    setIsOpen(true);
  }

  function closeLightbox(): void {
    setIsOpen(false);
  }

  function showPreviousImage(): void {
    setPhotoIndex((currentPhotoIndex) =>
      currentPhotoIndex === 0 ? lastPhotoIndex : currentPhotoIndex - 1
    );
  }

  function showNextImage(): void {
    setPhotoIndex((currentPhotoIndex) =>
      currentPhotoIndex === lastPhotoIndex ? 0 : currentPhotoIndex + 1
    );
  }

  function handleBoxKeyDown(event: KeyboardEvent<HTMLElement>): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox();
    }
  }

  function stopLightboxClick(event: MouseEvent<HTMLElement>): void {
    event.stopPropagation();
  }

  return (
    <Container
      $bgBoxShadow={gallery.bgBox}
      className="col-lg-4 col-md-4 col-6 g-1"
    >
      {isOpen && (
        <section
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="presentation"
        >
          <section className="lightbox-content" onClick={stopLightboxClick}>
            <button
              aria-label="Close image gallery"
              className="lightbox-action lightbox-close"
              onClick={closeLightbox}
              type="button"
            >
              <i className="fa fa-times" />
            </button>

            {gallery.images.length > 1 && (
              <>
                <button
                  aria-label="Previous image"
                  className="lightbox-action lightbox-prev"
                  onClick={showPreviousImage}
                  type="button"
                >
                  <i className="fa fa-chevron-left" />
                </button>

                <button
                  aria-label="Next image"
                  className="lightbox-action lightbox-next"
                  onClick={showNextImage}
                  type="button"
                >
                  <i className="fa fa-chevron-right" />
                </button>
              </>
            )}

            <section className="lightbox-image">
              <Image
                src={gallery.images[photoIndex]}
                alt={`${gallery.titleBox} - ${photoIndex + 1}`}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
              />
            </section>

            <span className="lightbox-counter">
              {photoIndex + 1} / {gallery.images.length}
            </span>
          </section>
        </section>
      )}

      <section
        className="box"
        onClick={openLightbox}
        onKeyDown={handleBoxKeyDown}
        role="button"
        tabIndex={0}
      >
        <figure></figure>

        <section className="box-content">
          <h3 className="title">{gallery.titleBox}</h3>
        </section>
      </section>
    </Container>
  );
}
