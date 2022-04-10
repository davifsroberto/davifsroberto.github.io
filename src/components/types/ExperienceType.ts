export type ExperienceType = {
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

type CompanyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
