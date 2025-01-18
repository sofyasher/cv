import { WorkExperienceModel } from '../models/work-experience.model';
import { EducationModel } from '../models/education.model';

export const workExperiencesCz: WorkExperienceModel[] = [
  {
    position: 'Senior Software Developer',
    companyName: 'Oracle Global Services Czech Republic s.r.o.',
    from: 'Říjen 2024',
    description: 'Vývoj frontendu (Oracle JET, Preact).',
  },
  {
    position: 'Consultant',
    companyName: 'Profinit EU, s.r.o.',
    location: 'Praha, Česká republika',
    from: 'Květen 2020',
    to: 'Říjen 2024',
    description:
      'Vývoj (analýza, implementace, automatizované ' +
      'testování) frontendové části aplikace (Angular, Jest, Cypress) a vývoj backendu (Java, Spring Boot, PostgreSQL).',
  },
  {
    position: 'Frontend developer (dobrovolnice)',
    companyName: 'MFF UK pro Český červený kříž',
    location: 'Praha, Česká republika',
    from: 'Duben 2020',
    to: 'Duben 2020',
    link: 'https://www.ukforum.cz/rubriky/aktuality/341-tym-matfyzu-vyvinul-aplikaci-na-pomoc-osamelym-seniorum',
    description:
      'Vývoj aplikace na pomoc osamělým seniorům (React, Bootstrap).',
  },
  {
    position: 'OutSystems Junior Developer',
    companyName: 'AspectWorks s.r.o.',
    location: 'Praha, Česká republika',
    from: 'Červenec 2019',
    to: 'Březen 2020',
    description: 'Vývoj webových a mobilních aplikací.',
  },
];

export const educationCz: EducationModel[] = [
  {
    faculty: 'Matematicko-fyzikální fakulta',
    university: 'Univerzita Karlova',
    major: 'Softwarové a datové inženýrství.',
    from: 'Říjen 2016',
    to: 'Únor 2023',
    location: 'Praha, Česká republika',
  },
];
export const LOCATION_CZ = 'Česká republika';
