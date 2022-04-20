import Link from 'next/link';

import { Container } from './styles';
import { Portfolio } from '../../Portfolio';
import { mountPortfolioHomeHelper } from '../home.helper';

export function PortfolioHome() {
  return (
    <Container id="portfolio" className="pt-5">
      <div className="container">
        <p className="paragraph">Portfólio</p>
        <h3 className="mb-sm-5 mb-4">Projetos Recentes</h3>

        <div className="container">
          <Portfolio gallery={mountPortfolioHomeHelper()} />
        </div>

        <section className="text-center mt-5">
          <Link href="/portfolio" passHref>
            <button className="btn btn-default btn-default-big">
              VER PORTFÓLIO COMPLETO &nbsp;
              <i className="fa fa-arrow-right" />
            </button>
          </Link>
        </section>
      </div>
    </Container>
  );
}
