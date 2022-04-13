import type { NextPage } from 'next';

import { Container } from './styles';
import { Experience } from '../../components/Experience';
import { Header } from '../../components/Header';
import { mountAllExperienceHelper } from './helper.experience';
import { mountMenuSecondaryHeaderUtils } from '../../utils/header.utils';

const ExperiencePage: NextPage = () => {
  return (
    <Container>
      <section className="bg-header-default">
        <Header menuCustom={mountMenuSecondaryHeaderUtils()} />
      </section>

      <div className="container py-5">
        <p className="paragraph">Experiência</p>
        <h3 className="mb-sm-5 mb-4">Minhas Experiências</h3>

        <div className="row mb-5">
          <section className="col-sm-12">
            <h4>Uma breve observação</h4>

            <p>
              Listo abaixo algumas as experiencias onde estive atuando
              diretamente como funcionário de uma empresa. Já desenvolvi
              sistemas atuando como freelancer, mas não está listado porque foi
              um período pontual.
            </p>
          </section>
        </div>

        <section>
          {mountAllExperienceHelper()
            .sort((asc, des) => des.id - asc.id)
            .map((experience) => (
              <Experience key={experience.id} experience={experience} />
            ))}
        </section>
      </div>
    </Container>
  );
};

export default ExperiencePage;
