import { NextPage } from 'next';

import { Header } from '../../components/Header';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { ExperienceHome } from './components/ExperienceHome';
import { CallToAction } from '../../components/CallToAction';
import { PortfolioHome } from './components/PortfolioHome';
import { Recommendations } from '../../components/Recommendations';

const HomePage: NextPage = () => {
  return (
    <main>
      <Header />

      <Banner />

      <About />

      <ExperienceHome />

      <CallToAction />

      <PortfolioHome />

      {/* Corrige bug ssr medium */}
      <hr />

      {/* <Articles /> */}

      <Recommendations />
    </main>
  );
};

export default HomePage;
