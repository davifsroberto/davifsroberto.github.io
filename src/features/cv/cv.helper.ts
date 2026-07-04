import { education } from '../../data/education';
import {
  cvSecondarySkills,
  cvSkillGroups,
  primarySkills,
} from '../../data/skills';
import { ExperienceType } from '../../types/experience.type';
import { NavigationItem } from '../../types/navigation.type';
import { SkillGroup, SkillType } from '../../types/skill.type';
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

export function mountMenuCvHelper(): NavigationItem[] {
  return mountMenuSecondaryHeaderUtils().filter(
    (itemMenu: NavigationItem) => itemMenu.name !== 'CV'
  );
}

export function mountAboutItemsCvHelper(): AboutItem[] {
  return cv[language()].about.itens;
}

export function mountSkillGroupsCvHelper(): SkillGroup[] {
  return cvSkillGroups[language()];
}

export function mountSkillLeftCvHelper(): SkillType[] {
  return primarySkills;
}

export function mountSkillRightCvHelper(): SkillType[] {
  return cvSecondarySkills[language()];
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
  return education[language()];
}
