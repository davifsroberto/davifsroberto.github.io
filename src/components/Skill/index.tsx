import { Container } from './styles';
import { SkillType } from '../../types/skill.type';

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
            <div
              className={skill.class}
              style={{ width: skill.progress + '%' }}
              role="progressbar"
              aria-label={skill.name}
              aria-valuemin={0}
              aria-valuenow={skill.progress}
              aria-valuemax={100}
            ></div>
          </div>
        </section>
      ))}
    </Container>
  );
}
