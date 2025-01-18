import React from 'react';
import { workExperiences } from '../../data/data';
import CustomBox from '../custom-box/custom-box';
import { Box, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './work-experiences.scss';

const boxContent = (t: any, lang: string | undefined) => (
  <Box>
    {workExperiences(lang).map((experience) => (
      <Box
        className='work-experience'
        key={experience.position + experience.from}
      >
        <b>{experience.position}</b>, {experience.companyName}
        {experience.location && <> &mdash; {experience.location}</>}
        <div className='experience-period'>
          {experience.from} &mdash;{' '}
          {experience.to ? experience.to : t('untilNow')}
        </div>
        <div className='experience-description'>
          {experience.description}
          <br />
          {experience.link && (
            <>
              {t('moreInfo.0')}{' '}
              <Link className='link' href={experience.link}>
                {t('moreInfo.1')}
              </Link>
              .
            </>
          )}
        </div>
      </Box>
    ))}
  </Box>
);
const WorkExperiences = () => {
  const { t, i18n } = useTranslation();
  return (
    <CustomBox
      content={boxContent(t, i18n.resolvedLanguage)}
      title={t('workExperience.label')}
    ></CustomBox>
  );
};

export default WorkExperiences;
