import { ItemMenuType } from '../../components/Header/ItemMenuType';
import { ExperienceType } from '../../types/experience.type';
import { SkillType } from '../../types/skill.type';
import { TimelineType } from '../../types/timeline.type';
import { mountMenuSecondaryHeaderUtils } from '../../utils/header.utils';
import { mountAllExperienceHelper } from '../experience/helper.experience';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import cv from '../../locales/cv/index.json';

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
  return cv[language()].about.itens;
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
      progress: 90,
    },
    {
      name: 'Node.Js',
      class: 'bg-primary',
      progress: 80,
    },
  ];
}

export function mountSkillRightCvHelper(): SkillType[] {
  return cv[language()].skills.skillRight;
}

export function mountTimelineExperienceCvHelper(): TimelineType[] {
  const timelineExperience: TimelineType[] = [];

  mountAllExperienceHelper().forEach((experience: ExperienceType) => {
    timelineExperience.push({
      id: experience.id,
      title: experience.title,
      subtitle: experience.company.name,
      period: experience.period,
      description: experience.description,
    });
  });

  return timelineExperience.sort((a, b) => b.id - a.id);
}

export function mountTimelineEducationCvHelper(): TimelineType[] {
  return cv[language()].education.items;
}
