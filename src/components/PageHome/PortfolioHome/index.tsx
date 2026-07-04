import Link from 'next/link';

import { Container } from './styles';
import { mountPortfolioHomeHelper } from '../../../features/home/home.helper';
import { Portfolio } from '../../Portfolio';
import {
  getLocalizedPath,
  SetLanguageUtils as language,
} from '../../../utils/language.utils';
import portfolio from '../../../locales/home/portfolio/index.json';

export function PortfolioHome() {
  const selectedLanguage = language();

  return (
    <Container id="portfolio" className="pt-5">
      <div className="container">
        <p className="paragraph">{portfolio[selectedLanguage].title}</p>
        <h3 className="mb-sm-5 mb-4">{portfolio[selectedLanguage].subtitle}</h3>

        <div className="container">
          <Portfolio gallery={mountPortfolioHomeHelper()} />
        </div>

        <section className="text-center mt-5">
          <Link
            href={getLocalizedPath('/portfolio', selectedLanguage)}
            className="btn btn-default btn-default-big"
          >
            {portfolio[selectedLanguage].viewAll} &nbsp;
            <i className="fa fa-arrow-right" />
          </Link>
        </section>
      </div>
    </Container>
  );
}
