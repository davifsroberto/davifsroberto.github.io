import { Container } from './styles';
import { Experience } from '../../components/Experience';
import { Header } from '../../components/Header';
import {
  mountAllExperienceHelper,
  mountMenuExperienceHelper,
} from './helper.experience';
import { Footer } from '../../components/Footer';
import { Contact } from '../../components/Contact';

export default function ExperiencePage() {
  return (
    <Container>
      <section className="bg-default">
        <Header menuCustom={mountMenuExperienceHelper()} custom />
      </section>

      <div className="container py-5">
        <p className="paragraph">Experiência</p>
        <h3 className="mb-sm-5 mb-4">Minhas Experiências</h3>

        <section className="row mb-5">
          <section className="col-sm-12">
            <h4>Lorem ipsum dolor sit amet</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              unde temporibus dolorem natus. Hic voluptatibus laborum, molestias
              similique ea eius odio. Culpa dolore itaque hic fugiat minus
              tempora! Culpa, quidem.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              unde temporibus dolorem natus. Hic voluptatibus laborum, molestias
              similique ea eius odio. Culpa dolore itaque hic fugiat minus
              tempora! Culpa, quidem.
            </p>
          </section>
        </section>

        <section className="row">
          {mountAllExperienceHelper()
            .sort((asc, des) => des.id - asc.id)
            .map((experience) => (
              <Experience key={experience.id} experience={experience} />
            ))}
        </section>
      </div>

      <Contact />

      <Footer />
    </Container>
  );
}
