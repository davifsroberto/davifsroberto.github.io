export type Experience = {
  id: number;
  company: {
    image: CompanyImage;
    link: string;
    name: string;
  };
  title: string;
  period: string;
  description: string;
  classPosition?: string;
  tag?: string[];
  last?: boolean;
};

export type ExperienceType = Experience;

type CompanyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
