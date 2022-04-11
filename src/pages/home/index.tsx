import { NextPage } from 'next';
import { CallToAction } from '../../components/CallToAction';
import { Header } from '../../components/Header';
import { About } from '../../components/Home/About';
import { Banner } from '../../components/Home/Banner';
import { ExperienceHome } from '../../components/Home/ExperienceHome';
import { PortfolioHome } from '../../components/Home/PortfolioHome';
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
