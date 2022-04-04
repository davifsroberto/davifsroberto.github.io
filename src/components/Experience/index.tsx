import Image from 'next/image';

import { Container } from './styles';

// TODO: add ver todas
export function Experience() {
  return (
    <Container id="experience" className="py-3">
      <div className="container">
        <p className="paragraph">Experiência</p>
        <h3 className="mb-sm-5 mb-4">Atuações mais recentes</h3>

        <div className="row">
          <section className="col-md-12">
            <figure>
              <Image
                width={145}
                height={90}
                src="/assets/images/experience/bv-logo.png"
                alt="Experiência Mottu"
              ></Image>
            </figure>

            <h5>Principal Frontend Engineer</h5>
            <h6>
              04/22 - atual
              <strong>&nbsp;#Angular</strong>
            </h6>
            <br />

            <p>
              Desenvolvimento de aplicações web com o framework Angular. Utilizo
              Angular Material e testes com Jest.
              <br />
              Durante desenvolvimento, fico sempre atento as boas práticas para
              seguir um alto nível de padrão de código.
              <br />
              Também auxílio desenvolvedores menos experientes no dia a dia para
              juntos evoluirmos tecnicamente e entregarmos um projeto altamente
              escalável.
            </p>
          </section>

          <hr className="my-4" />

          <section className="col-md-12 text-end">
            <figure>
              <Image
                width={150}
                height={50}
                src="/assets/images/experience/mottu-logo.png"
                alt="Experiência Mottu"
              ></Image>
            </figure>

            <h5>Principal Frontend Engineer</h5>
            <h6>
              09/21 - 04/22
              <strong>&nbsp;#Angular</strong>
            </h6>
            <br />

            <p>
              Desenvolvo aplicações para a frente de delivery, aplicativos de
              backoffice e totens de autoatendimento. Sempre me atento ao
              desenvolvimento com testes, performance e boas práticas. Ajudo
              desenvolvedores menos experientes, e trabalho na reestruturação de
              projetos antigos para uma arquitetura de frontend escalável.
              Quando necessário, crio as interfaces sem depender de um UI
              designer. Tenho noções de UI/UX e gosto do assunto. Algumas
              tecnologias que utilizo neste processo: Angular 12+, Monorepo, Nx
              Workspace (nx.dev), Module Federation.
            </p>
          </section>

          <hr className="my-4" />

          <section className="col-md-12">
            <figure>
              <Image
                width={150}
                height={50}
                src="/assets/images/experience/cielo-logo.png"
                alt="Experiência Cielo"
              ></Image>
            </figure>

            <h5>Principal Frontend Engineer</h5>
            <h6>
              10/19 - 10/20
              <strong>&nbsp;#React, #Angular</strong>
            </h6>
            <br />

            <p>
              Desenvolvimento de sistemas para a área financeira, criação de
              dashboards, aplicativos que monitoram os serviços e geram
              relatórios sobre as instabilidades dos serviços de transações
              financeiras. Utilizava em minha rotina de desenvolvimento: Angular
              2+, React, UI/UX, Sass, Bootstrap, Agile Scrum.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
