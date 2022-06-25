import type { NextPage } from 'next';

import { Container } from './styles';
import { Header } from '../../components/Header';
import { Portfolio } from '../../components/Portfolio';
import { mountPortfolioHelper } from './portfolio.helper';
import { mountMenuSecondaryHeaderUtils } from '../../utils/header.utils';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import portfolio from '../../locales/portfolio/index.json';

const PortfolioPage: NextPage = () => {
  return (
    <Container>
      <section className="bg-header-default">
        <Header menuCustom={mountMenuSecondaryHeaderUtils()} />
      </section>

      <article className="container py-5">
        <p className="paragraph">{portfolio[language()].title}</p>
        <h3 className="mb-sm-5 mb-4">{portfolio[language()].subtitle}</h3>

        <div className="row mb-5">
          <section className="col-sm-12">
            <h4>{portfolio[language()].posTitle}</h4>

            <p>{portfolio[language()].infoOne}</p>

            <p>{portfolio[language()].infoTwo}</p>

            <p
              dangerouslySetInnerHTML={{
                __html: portfolio[language()].infoTree,
              }}
            />
          </section>
        </div>

        <Portfolio gallery={mountPortfolioHelper()} />
      </article>
    </Container>
  );
};

export default PortfolioPage;
