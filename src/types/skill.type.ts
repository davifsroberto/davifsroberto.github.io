export type Skill = {
  name: string;
  class: string;
  progress: number;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SkillType = Skill;
