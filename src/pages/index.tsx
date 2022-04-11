import { Header } from '../components/Header';
import { Banner } from './home/Banner';
import { About } from './home/About';
import { ExperienceHome } from './home/ExperienceHome';
import { CallToAction } from '../components/CallToAction';
import { PortfolioHome } from './home/PortfolioHome';
import { Articles } from './home/Articles';
import { Recommendations } from '../components/Recommendations';

export function Home(): JSX.Element {
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
}

export default Home;
