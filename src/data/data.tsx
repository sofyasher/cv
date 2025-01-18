import { LANGUAGE_LEVEL_CODES, LanguageModel } from '../models/language.model';
import { SkillModel } from '../models/skill.model';
import { isCurrentLanguageEnglish } from '../helpers';
import { educationEn, LOCATION_EN, workExperiencesEn } from './data-en';
import { educationCz, LOCATION_CZ, workExperiencesCz } from './data-cz';

export const languages: LanguageModel[] = [
  {
    flagCode: 'cz',
    langCode: 'cs',
    levelCode: LANGUAGE_LEVEL_CODES.C1,
  },
  { flagCode: 'gb', langCode: 'en', levelCode: LANGUAGE_LEVEL_CODES.B2 },
];

export const skills: SkillModel[] = [
  { name: 'Java, Spring Framework, Maven, Gradle', level: 3 },
  { name: 'SQL, MySQL, SQLite', level: 4 },
  { name: 'PostgreSQL, Microsoft SQL Server', level: 3 },
  { name: 'JavaScript, TypeScript, React, React Native, Angular', level: 4 },
  { name: 'Redux, NgRx, RxJs, jQuery, Chart.js', level: 4 },
  { name: 'CSS, Sass, Bootstrap, Material Design', level: 4 },
  { name: 'Jest, Cypress', level: 3 },
  { name: 'GIT, GitLab CI/CD, Jira, YouTrack', level: 4 },
  { name: 'NPM, Yarn', level: 4 },
  { name: 'Docker', level: 2 },
  { name: 'PHP', level: 4 },
];

export const workExperiences = (lang: string | undefined) => {
  return isCurrentLanguageEnglish(lang) ? workExperiencesEn : workExperiencesCz;
};

export const education = (lang: string | undefined) => {
  return isCurrentLanguageEnglish(lang) ? educationEn : educationCz;
};

export const location = (lang: string | undefined) =>
  isCurrentLanguageEnglish(lang) ? LOCATION_EN : LOCATION_CZ;
export const NAME = 'Bc. Sofya Sherstneva';
export const PROFILE_PICTURE_URL = 'sofie.jpg';
export const GITHUB_ICON_URL = 'github.svg';
export const LINKEDIN_ICON_URL = 'linkedin.svg';
export const LINKEDIN_URL = 'https://linkedin.com/in/sofyasher';
export const GITHUB_REPO_URL = 'https://github.com/sofyasher';
export const GITHUB_REPO_SHOPPING_MAP_MOBILE_URL =
  GITHUB_REPO_URL + '/shopping-map-mobile';
export const GITHUB_REPO_LUNCH_URL = GITHUB_REPO_URL + '/lunch';
export const GITHUB_REPO_CV_URL = GITHUB_REPO_URL + '/cv';
export const GITHUB_REPO_PRAGUE_TOUR_GUIDE_BACKEND_URL =
  GITHUB_REPO_URL + '/prahou-s-blankou-admin-backend';
export const EMAIL = 'sofya@sherstneva.cz';
export const BLANKA_PRAGUE_GUIDE_URL = 'https://prahousblankou.cz';
export const PLOS_ONE_URL = 'https://doi.org/10.1371/journal.pone.0113714';
export const PLOS_ONE_TOPIC =
  'Comparative Genomics of Transcriptional Regulation of Methionine Metabolism in Proteobacteria';
export const SMTB_URL = 'https://molbioschool.org/en';
export const OXFORD_ACADEMIC_URL = 'https://doi.org/10.1093/molbev/msaa184';
export const OXFORD_ACADEMIC_TOPIC =
  'Simplification of Ribosomes in Bacteria with Tiny Genomes';
