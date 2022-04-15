import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Container } from './style';
import { Header } from '../Header';
import { Recommendations } from '../Recommendations';
import { About } from './About';
import { Articles } from './Articles';
import { Banner } from './Banner';
import { ExperienceHome } from './ExperienceHome';
import { CallToAction } from '../CallToAction';
import { PortfolioHome } from './PortfolioHome';

export default function Home() {
  return (
    <Container>
      <Header />

      <Banner />

      <AnimationOnScroll
        duration={1}
        animateOnce={true}
        animateIn="animate__fadeIn"
      >
        <About />
      </AnimationOnScroll>

      <AnimationOnScroll
        duration={1}
        animateOnce={true}
        animateIn="animate__fadeIn"
      >
        <ExperienceHome />
      </AnimationOnScroll>

      <CallToAction />

      <AnimationOnScroll
        duration={1}
        animateOnce={true}
        animateIn="animate__fadeIn"
      >
        <PortfolioHome />
      </AnimationOnScroll>

      <AnimationOnScroll
        duration={1}
        animateOnce={true}
        animateIn="animate__fadeIn"
      >
        <Articles />
      </AnimationOnScroll>

      <AnimationOnScroll
        duration={1}
        animateOnce={true}
        animateIn="animate__fadeIn"
      >
        <Recommendations />
      </AnimationOnScroll>
    </Container>
  );
}
