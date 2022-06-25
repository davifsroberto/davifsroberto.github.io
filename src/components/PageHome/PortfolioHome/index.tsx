import Link from 'next/link';

import { Container } from './styles';
import { Portfolio } from '../../Portfolio';
import { mountPortfolioHomeHelper } from '../home.helper';
import { SetLanguageUtils as language } from '../../../utils/language.utils';
import portfolio from '../../../locales/home/portfolio/index.json';

export function PortfolioHome() {
  return (
    <Container id="portfolio" className="pt-5">
      <div className="container">
        <p className="paragraph">{portfolio[language()].title}</p>
        <h3 className="mb-sm-5 mb-4">{portfolio[language()].subtitle}</h3>

        <div className="container">
          <Portfolio gallery={mountPortfolioHomeHelper()} />
        </div>

        <section className="text-center mt-5">
          <Link href="/portfolio" passHref>
            <button className="btn btn-default btn-default-big">
              {portfolio[language()].viewAll} &nbsp;
              <i className="fa fa-arrow-right" />
            </button>
          </Link>
        </section>
      </div>
    </Container>
  );
}
