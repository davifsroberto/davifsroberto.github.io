import { Container } from './styles';
import PortfolioProject from './PortfolioProject';
import { PortfolioGallery } from './PortfolioGallery';
import { mountPortfolio } from './portfolio.helper';

// TODO: add ver todos
export function Portfolio() {
  return (
    <Container id="portfolio" className="pt-5">
      <div className="container">
        <p className="paragraph">Portfólio</p>
        <h3 className="mb-sm-5 mb-4">Projetos Recentes</h3>

        <div className="row">
          {mountPortfolio().map((gallery: PortfolioGallery) => (
            <PortfolioProject key={gallery.id} gallery={gallery} />
          ))}
        </div>
      </div>
    </Container>
  );
}
