import React from 'react';
import { Box, Link } from '@mui/material';
import {
  GITHUB_REPO_LUNCH_URL,
  GITHUB_REPO_PRAGUE_TOUR_GUIDE_BACKEND_URL,
  GITHUB_REPO_CV_URL,
  GITHUB_REPO_SHOPPING_MAP_MOBILE_URL,
  OXFORD_ACADEMIC_TOPIC,
  OXFORD_ACADEMIC_URL,
  PLOS_ONE_TOPIC,
  PLOS_ONE_URL,
  BLANKA_PRAGUE_GUIDE_URL,
  SMTB_URL,
} from '../../data/data';
import CustomBox from '../custom-box/custom-box';
import Languages from '../languages/languages';
import { useTranslation } from 'react-i18next';
import './additional-info.scss';

const boxContent = (t: any) => (
  <Box className='additional-info'>
    {t('additionalInfo.projects')}:{' '}
    <Link
      className='link'
      href={BLANKA_PRAGUE_GUIDE_URL}
      target='_blank'
      rel='noreferrer'
    >
      Prahou s Blankou (React)
    </Link>{' '}
    |{' '}
    <Link
      className='link'
      href={GITHUB_REPO_PRAGUE_TOUR_GUIDE_BACKEND_URL}
      target='_blank'
      rel='noreferrer'
    >
      Prahou s Blankou - Admin Backend (Java, Spring Boot)
    </Link>{' '}
    |{' '}
    <Link
      className='link'
      href={GITHUB_REPO_SHOPPING_MAP_MOBILE_URL}
      target='_blank'
      rel='noreferrer'
    >
      Shopping Map Mobile (React Native)
    </Link>{' '}
    |{' '}
    <Link
      className='link'
      href={GITHUB_REPO_LUNCH_URL}
      target='_blank'
      rel='noreferrer'
    >
      Lunch App (React)
    </Link>{' '}
    |{' '}
    <Link
      className='link'
      href={GITHUB_REPO_CV_URL}
      target='_blank'
      rel='noreferrer'
    >
      {t('additionalInfo.resume')} (React)
    </Link>
    <br />
    <br />
    {t('smtb.0')}
    <Link className='link' href={SMTB_URL} target='_blank' rel='noreferrer'>
      {t('smtb.1')}
    </Link>{' '}
    (2013/14/15), {t('smtb.2')}:
    <ol style={{ paddingInlineStart: '20px' }}>
      <li>
        PLOS One:{' '}
        <Link
          className='link'
          href={PLOS_ONE_URL}
          target='_blank'
          rel='noreferrer'
        >
          {PLOS_ONE_TOPIC}
        </Link>
      </li>
      <li>
        Oxford Academic:{' '}
        <Link
          className='link'
          href={OXFORD_ACADEMIC_URL}
          target='_blank'
          rel='noreferrer'
        >
          {OXFORD_ACADEMIC_TOPIC}
        </Link>{' '}
        ({t('additionalInfo.seeAcknowledgmentsSection')})
      </li>
    </ol>
    <Languages></Languages>
  </Box>
);
const AdditionalInfo = () => {
  const { t } = useTranslation();

  return (
    <CustomBox
      content={boxContent(t)}
      title={t('additionalInfo.label')}
    ></CustomBox>
  );
};

export default AdditionalInfo;
