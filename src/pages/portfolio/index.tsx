import type { NextPage } from 'next';

import { Container } from './styles';
import { Header } from '../../components/Header';
import { Portfolio } from '../../components/Portfolio';
import { Seo } from '../../components/Seo';
import { seo } from '../../data/seo';
import { mountPortfolioHelper } from './portfolio.helper';
import { mountMenuSecondaryHeaderUtils } from '../../utils/header.utils';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import portfolio from '../../locales/portfolio/index.json';

const PortfolioPage: NextPage = () => {
  const selectedLanguage = language();
  const pageSeo = seo.portfolio[selectedLanguage];

  return (
    <Container>
      <Seo
        title={pageSeo.title}
        description={pageSeo.description}
        path={selectedLanguage === 'pt' ? '/portfolio' : '/en/portfolio'}
      />

      <section className="bg-header-default">
        <Header menuCustom={mountMenuSecondaryHeaderUtils()} />
      </section>

      <article className="container py-5">
        <p className="paragraph">{portfolio[selectedLanguage].title}</p>
        <h3 className="mb-sm-5 mb-4">{portfolio[selectedLanguage].subtitle}</h3>

        <div className="row mb-5">
          <section className="col-sm-12">
            <h4>{portfolio[selectedLanguage].posTitle}</h4>

            <p>{portfolio[selectedLanguage].infoOne}</p>

            <p>{portfolio[selectedLanguage].infoTwo}</p>

            <p
              dangerouslySetInnerHTML={{
                __html: portfolio[selectedLanguage].infoTree,
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
