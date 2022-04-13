import { SkillType } from '../../types/skill.type';

export function mountSkillAboutHelper(): SkillType[] {
  return [
    {
      name: 'Angular',
      class: 'bg-danger',
      progress: 97,
    },
    {
      name: 'React',
      class: 'bg-primary',
      progress: 85,
    },
    {
      name: 'TypeScript',
      class: 'bg-secondary',
      progress: 97,
    },
    {
      name: 'UX e UI',
      class: 'bg-success',
      progress: 90,
    },
    {
      name: 'Testes (unitário, comportamento, e2e)',
      class: 'bg-warning',
      progress: 92,
    },
    {
      name: 'Metodologias Ágeis',
      class: 'bg-info',
      progress: 92,
    },
  ];
}