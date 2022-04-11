import type { NextPage } from 'next';

import { Container } from './styles';
import { Header } from '../../components/Header';
import { Portfolio } from '../../components/Portfolio';
import { mountPortfolioHelper } from './portfolio.helper';
import { mountMenuSecondaryHeaderUtils } from '../../utils/header.utils';

const PortfolioPage: NextPage = () => {
  return (
    <Container>
      <section className="bg-header-default">
        <Header menuCustom={mountMenuSecondaryHeaderUtils()} />
      </section>

      <article className="container py-5">
        <p className="paragraph">Portifólio</p>
        <h3 className="mb-sm-5 mb-4">Alguns projeto que já realizei</h3>

        <div className="row mb-5">
          <section className="col-sm-12">
            <h4>Referente a esse Portifólio</h4>

            <p>
              Segue abaixo alguns projetos que já realizei durante a minha
              jornada como desenvolvedor web, apesar de também ter atuado com
              backend, busquei trazer em meu portifólio apenas projetos que
              desenvolvi o frontend, pois é o meu foco.
            </p>

            <p>
              Alguns projetos eu realizei com uma equipe de desenvolvedores de
              frontend e destaquei apenas as features que fiz, além disso,
              trouxe projetos onde atuei sozinho e desenvolvi por completo todo
              o frontend do sistema.
            </p>

            <p>
              Aqui não tem <i>todos os sistemas</i> que desenvolvi, alguns são
              projeto privados, onde não posso compartilhá-los por questão de
              segurança e exigência da empresa contratante, outros eu
              simplesmente me esqueci de pegar evidências, e o sistema existe
              mais. Porém, apresento a maioria dos projetos onde atuei com
              minhas habilidades de frontend engineer.
            </p>
          </section>
        </div>

        <Portfolio gallery={mountPortfolioHelper()} />
      </article>
    </Container>
  );
};

export default PortfolioPage;
