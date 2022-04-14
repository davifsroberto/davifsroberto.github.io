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

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
        <About />
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
        <ExperienceHome />
      </AnimationOnScroll>

      <CallToAction />

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
        <PortfolioHome />
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
        <Articles />
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
        <Recommendations />
      </AnimationOnScroll>
    </Container>
  );
}
