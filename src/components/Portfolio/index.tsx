import { Container } from './styles';
import { PortfolioGalleryType } from '../../types/portfolio-gallery.type';
import PortfolioProject from './PortfolioProject';

type PortfolioProps = {
  gallery: PortfolioGalleryType[];
};

export function Portfolio({ gallery }: PortfolioProps) {
  return (
    <Container className="row">
      {gallery.map((gallery: PortfolioGalleryType) => (
        <PortfolioProject key={gallery.id} gallery={gallery} />
      ))}
    </Container>
  );
}
