import { Container } from './styles';
import { PortfolioGallery } from './PortfolioGallery';
import PortfolioProject from './PortfolioProject';

type PortfolioProps = {
  gallery: PortfolioGallery[];
};

export function Portfolio({ gallery }: PortfolioProps) {
  return (
    <Container className="row">
      {gallery.map((gallery: PortfolioGallery) => (
        <PortfolioProject key={gallery.id} gallery={gallery} />
      ))}
    </Container>
  );
}
