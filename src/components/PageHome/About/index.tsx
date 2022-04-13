import { Container } from './styles';
import { Skill } from '../../Skill';
import { mountSkillAboutHelper } from '../../Skill/skill.helper';

export function About() {
  return (
    <Container id="about" className="py-3">
      <div className="container">
        <p className="paragraph">Sobre</p>
        <h3 className="mb-sm-5 mb-4">Um pouco sobre mim</h3>

        <div className="row">
          <section className="col-sm-12 col-md-6 col-lg-6 mb-4">
            <h4>Tenho paixão pelo que faço!</h4>

            <p>
              Sou frontend engineer sênior, busco sempre me aperfeiçoar e ficar
              atualizado em minha área de atuação.
              <br />
              Aos 17 anos, eu trabalhava como
              <i> assistente de suporte técnico a computadores</i> em uma
              empresa na minha cidade, um dia vi meu supervisor fazendo algo que
              nunca tinha visto antes, quando perguntei o que era aquilo, ele me
              disse “estou fazendo um programa, isso é programação”. Em seguida
              fui atrás de estudar por conta, pois foi amor à primeira vista. Em
              seguida entrei na área de desenvolvimento, onde estou há anos.
              <br />
              Gosto muito de música, leitura e tecnologia, atuo com
              desenvolvimento de sistemas a mais de 10 anos, e há 8 anos com
              frontend.
            </p>
          </section>

          <section className="col-sm-12 col-md-6 col-lg-6">
            <h4>Algumas Skills</h4>

            <Skill skills={mountSkillAboutHelper()} />
          </section>
        </div>
      </div>
    </Container>
  );
}
