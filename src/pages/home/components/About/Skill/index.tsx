import { Container } from './styles';
import { SkillType } from '../SkillType';

type SkillProps = {
  skills: SkillType[];
};

export function Skill({ skills }: SkillProps) {
  return (
    <Container>
      {skills.map((skill) => (
        <section key={skill.name}>
          <h4>{skill.name}</h4>

          <div className="progress">
            <section
              className={skill.class}
              style={{ width: skill.progress + '%' }}
              aria-valuenow={skill.progress}
            ></section>
          </div>
        </section>
      ))}
    </Container>
  );
}
