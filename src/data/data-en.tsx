import { WorkExperienceModel } from '../models/work-experience.model';
import { EducationModel } from '../models/education.model';

export const workExperiencesEn: WorkExperienceModel[] = [
  {
    position: 'Senior Software Developer',
    companyName: 'Oracle Global Services Czech Republic s.r.o.',
    from: 'October 2024',
    description: 'Frontend development (Oracle JET, Preact).',
  },
  {
    position: 'Consultant',
    companyName: 'Profinit EU, s.r.o.',
    location: 'Prague, Czech Republic',
    from: 'May 2020',
    to: 'October 2024',
    description:
      'Frontend development (analysis, implementation, automated ' +
      'tests - Angular, Jest, Cypress) and backend ' +
      'development (Java, Spring Boot, PostgreSQL).',
  },
  {
    position: 'Frontend developer (volunteer)',
    companyName: 'MFF UK for Czech Red Cross',
    location: 'Prague, Czech Republic',
    from: 'April 2020',
    to: 'April 2020',
    link: 'https://www.ukforum.cz/rubriky/aktuality/341-tym-matfyzu-vyvinul-aplikaci-na-pomoc-osamelym-seniorum',
    description:
      'Development of the application for helping to lonely old people (React, Bootstrap).',
  },
  {
    position: 'OutSystems Junior Developer',
    companyName: 'AspectWorks s.r.o.',
    location: 'Prague, Czech Republic',
    from: 'July 2019',
    to: 'March 2020',
    description: 'Web and Mobile Development.',
  },
];

export const educationEn: EducationModel[] = [
  {
    faculty: 'Faculty of Mathematics and Physics',
    university: 'Charles University',
    major: 'Software and data engineering.',
    from: 'October 2016',
    to: 'February 2023',
    location: 'Prague, Czech Republic',
  },
];

export const LOCATION_EN = 'Czech Republic';
