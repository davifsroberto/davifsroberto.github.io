import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { CallToAction } from '../components/CallToAction';
import { Portfolio } from '../components/Portfolio';
import { Articles } from '../components/Articles';
import { Recommendations } from '../components/Recommendations';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { MoveToUp } from '../components/MoveToUp';

export function Home(): JSX.Element {
  return (
    <main>
      <Header />

      <Banner />

      <About />

      <Experience />

      <CallToAction />

      <Portfolio />

      <Articles />

      <Recommendations />

      <Contact />

      <Footer />

      <MoveToUp />
    </main>
  );
}

export default Home;
