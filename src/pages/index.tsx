import type { NextPage } from 'next';

import { CallToAction } from '../components/CallToAction';
import { Header } from '../components/Header';
import { About } from '../components/PageHome/About';
import { Articles } from '../components/PageHome/Articles';
import { Banner } from '../components/PageHome/Banner';
import { ExperienceHome } from '../components/PageHome/ExperienceHome';
import { PortfolioHome } from '../components/PageHome/PortfolioHome';
import { Recommendations } from '../components/Recommendations';

const Home: NextPage = () => {
  return (
    <main>
      <Header />

      <Banner />

      <About />

      <ExperienceHome />

      <CallToAction />

      <PortfolioHome />

      <Articles />

      <Recommendations />
    </main>
  );
};

export default Home;
