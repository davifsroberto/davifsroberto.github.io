import { PortfolioGallery } from '../../components/Portfolio/PortfolioGallery';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import portfolio from '../../locales/portfolio/index.json';

export function mountPortfolioHelper(): PortfolioGallery[] {
  // TODO: otimizar imagens

  return portfolio[language()].portfolio;
}
