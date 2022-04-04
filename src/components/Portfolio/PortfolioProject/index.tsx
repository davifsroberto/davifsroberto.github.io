import { useState } from 'react';
import Image from 'next/image';

import Lightbox from 'react-image-lightbox';

import { Container } from './styles';
import { PortfolioGallery } from '../PortfolioGallery';

type GalleryProps = {
  gallery: PortfolioGallery;
};

export default function PortfolioProject({ gallery }: GalleryProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  return (
    <Container
      onClick={() => setIsOpen(true)}
      className="col-lg-4 col-md-4 col-6 p-0"
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
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + gallery.images.length - 1) % gallery.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % gallery.images.length)
          }
          enableZoom={false}
        />
      )}

      <section className="box">
        <figure>
          <Image
            width={180}
            height={130}
            priority={true}
            layout="responsive"
            src={gallery.bgBox}
            alt="portfolio"
            className="img-fluid"
          ></Image>
        </figure>

        <section className="box-content">
          <h3 className="title">{gallery.titleBox}</h3>
        </section>
      </section>
    </Container>
  );
}
