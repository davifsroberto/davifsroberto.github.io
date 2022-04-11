import Link from 'next/link';

import { Container } from './styles';
import { Experience } from '../../../../components/Experience';
import { mountExperienceHomeHelper } from '../home.helper';

export function ExperienceHome() {
  return (
    <Container id="experience" className="py-3">
      <div className="container">
        <p className="paragraph">Experiência</p>
        <h3 className="mb-sm-5 mb-4">Algumas experiências</h3>

        <section>
          {mountExperienceHomeHelper().map((experience) => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </section>

        <section className="text-center mt-4">
          <Link href="/experience" passHref>
            <button className="btn btn-default btn-default-big">
              VER TODAS EXPERIÊNCIAS &nbsp;
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </Link>
        </section>
      </div>
    </Container>
  );
}
