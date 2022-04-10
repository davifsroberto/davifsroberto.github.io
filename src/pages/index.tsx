import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { About } from '../components/About';
import { MyExperience } from '../components/MyExperience';
import { CallToAction } from '../components/CallToAction';
import { Portfolio } from '../components/Portfolio';
import { Articles } from '../components/Articles';
import { Recommendations } from '../components/Recommendations';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home(): JSX.Element {
  return (
    <main>
      <Header />

      <Banner />

      <About />

      <MyExperience />

      <CallToAction />

      <Portfolio />

      <Articles />

      <Recommendations />

      <Contact />

      <Footer />
    </main>
  );
}

export default Home;
