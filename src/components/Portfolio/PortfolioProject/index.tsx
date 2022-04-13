import { useState } from 'react';

import Lightbox from 'react-image-lightbox';

import { Container } from './styles';
import { PortfolioGallery } from '../PortfolioGallery';

type GalleryProps = {
  gallery: PortfolioGallery;
};

export default function PortfolioProject({ gallery }: GalleryProps) {
  const [forcedClick, setForcedClick] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  function handlerOpenLightbox(state: boolean): void {
    setIsOpen(state);

    // pog for lightbox
    if (!forcedClick) {
      setForcedClick(true);

      Promise.resolve().then(() => {
        (
          document.querySelectorAll(
            '[title="Next image"]'
          ) as NodeListOf<HTMLElement>
        )[0].click();
      });
    }
  }

  return (
    <Container
      onClick={() => handlerOpenLightbox(true)}
      bgBoxShadow={gallery.bgBox}
      className="col-lg-4 col-md-4 col-6 g-1"
    >
      {isOpen && (
        <Lightbox
          mainSrc={gallery.images[photoIndex]}
          nextSrc={gallery.images[(photoIndex + 1) % gallery.images.length]}
          prevSrc={
            gallery.images[
              (photoIndex + gallery.images.length - 1) % gallery.images.length
            ]
          }
          onCloseRequest={() => {
            setIsOpen(false);
            setForcedClick(false);
          }}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + gallery.images.length - 1) % gallery.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % gallery.images.length)
          }
          keyRepeatLimit={1}
        />
      )}

      <section className="box">
        <figure></figure>

        <section className="box-content">
          <h3 className="title">{gallery.titleBox}</h3>
        </section>
      </section>
    </Container>
  );
}
