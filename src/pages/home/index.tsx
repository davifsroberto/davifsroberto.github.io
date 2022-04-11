import { Banner } from './Banner';
import { About } from './About';
import { ExperienceHome } from './ExperienceHome';
import { PortfolioHome } from './PortfolioHome';
import { Articles } from './Articles';
import { CallToAction } from '../../components/CallToAction';
import { Header } from '../../components/Header';
import { Recommendations } from '../../components/Recommendations';

export default function HomePage(): JSX.Element {
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
