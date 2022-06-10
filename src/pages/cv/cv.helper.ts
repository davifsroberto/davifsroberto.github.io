import { ItemMenuType } from '../../components/Header/ItemMenuType';
import { ExperienceType } from '../../types/experience.type';
import { SkillType } from '../../types/skill.type';
import { TimelineType } from '../../types/timeline.type';
import { mountMenuSecondaryHeaderUtils } from '../../utils/header.utils';
import { mountAllExperienceHelper } from '../experience/helper.experience';

type AboutItem = {
  id: number;
  title: string;
  anchor: boolean;
  description: {
    text: string;
    link?: string;
    target?: string;
    class?: string;
  };
};

export function mountMenuCvHelper(): ItemMenuType[] {
  return mountMenuSecondaryHeaderUtils().filter(
    (itemMenu: ItemMenuType) => itemMenu.name !== 'CV'
  );
}

export function mountAboutItemsCvHelper(): AboutItem[] {
  return [
    {
      id: 1,
      title: 'Idade',
      anchor: false,
      description: {
        text: '28 anos',
      },
    },
    {
      id: 2,
      title: 'E-mail',
      anchor: true,
      description: {
        text: 'davifsroberto@outlook.com',
        link: 'mailto:davifsroberto@outlook.com',
        class: 'link',
      },
    },
    {
      id: 3,
      title: 'Telefone',
      anchor: false,
      description: {
        text: '11 95356 6668',
      },
    },
    {
      id: 4,
      title: 'WhatsApp',
      anchor: true,
      description: {
        text: 'Clique aqui',
        link: 'https://api.whatsapp.com/send?phone=5511953566668&amp;text=Ol%C3%A1%2C%20Davi%20Roberto%2C%20tudo%20bem%3F',
        target: '_blank',
        class: 'link',
      },
    },
    {
      id: 5,
      title: 'LinkedIn',
      anchor: true,
      description: {
        text: 'linkedin.com/in/davifsroberto',
        link: 'https://www.linkedin.com/in/davifsroberto',
        target: '_blank',
        class: 'link',
      },
    },
    {
      id: 6,
      title: 'GitHub',
      anchor: true,
      description: {
        text: 'github.com/davifsroberto',
        link: 'https://github.com/davifsroberto',
        target: '_blank',
        class: 'link',
      },
    },
  ];
}

export function mountSkillLeftCvHelper(): SkillType[] {
  return [
    {
      name: 'Angular',
      class: 'bg-primary',
      progress: 97,
    },
    {
      name: 'React',
      class: 'bg-primary',
      progress: 85,
    },
    {
      name: 'TypeScript',
      class: 'bg-primary',
      progress: 97,
    },
  ];
}

export function mountSkillRightCvHelper(): SkillType[] {
  return [
    {
      name: 'UX e UI',
      class: 'bg-secondary',
      progress: 90,
    },
    {
      name: 'Testes (unitário, comportamento, e2e)',
      class: 'bg-secondary',
      progress: 92,
    },
    {
      name: 'Metodologias Ágeis',
      class: 'bg-secondary',
      progress: 92,
    },
  ];
}

export function mountTimelineExperienceCvHelper(): TimelineType[] {
  const timelineExperience: TimelineType[] = [];

  mountAllExperienceHelper().forEach((experience: ExperienceType) => {
    timelineExperience.push({
      id: experience.id,
      title: experience.title,
      subTitle: experience.company.name,
      period: experience.period,
      description: experience.description,
    });
  });

  return timelineExperience.sort((a, b) => b.id - a.id);
}

export function mountTimelineEducationCvHelper(): TimelineType[] {
  return [
    {
      id: 1,
      title: 'Graduação em Sistemas para Internet',
      subTitle: 'Centro Universitário Senac',
      period: '2013 - 2016',
      description:
        'Desenvolver aplicações totalmente originais e também utilizar-se de outras prontas para implementação em novas estruturas. Criar e executar projetos para os diversos veículos web, com discernimento e equilíbrio entre as necessidades, tanto em projetos interativos para a web como em dispositivos móveis.',
    },
  ];
}
