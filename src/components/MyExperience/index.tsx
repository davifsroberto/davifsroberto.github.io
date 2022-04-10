import Link from 'next/link';
import { Experience } from '../Experience';
import { mountMyExperience } from './my-experience.helper';

import { Container } from './styles';

export function MyExperience() {
  return (
    <Container id="my-experience" className="py-3">
      <div className="container">
        <p className="paragraph">Experiência</p>
        <h3 className="mb-sm-5 mb-4">Algumas experiências</h3>

        <section>
          {mountMyExperience().map((experience) => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </section>

        <section className="text-center mt-4">
          <Link href="/experience" passHref>
            <button className="btn btn-default">
              VER TODAS EXPERIÊNCIAS &nbsp;
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </Link>
        </section>
      </div>
    </Container>
  );
}
