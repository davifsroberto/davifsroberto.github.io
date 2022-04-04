import type { NextPage } from 'next';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { CallToAction } from '../components/CallToAction';
import { Portfolio } from '../components/Portfolio';
import { Articles } from '../components/Articles';
import { Recommendations } from '../components/Recommendations';
// import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
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

      {/*
        TODO: finalize contact section
       <Contact />
      */}

      <Footer />
    </main>
  );
};

export default Home;
