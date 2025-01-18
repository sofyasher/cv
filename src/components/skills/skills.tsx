import React from 'react';
import { skills } from '../../data/data';
import CustomBox from '../custom-box/custom-box';
import { Box, Tooltip, Zoom } from '@mui/material';
import { useTranslation } from 'react-i18next';

// @ts-ignore
const SkillItem = ({ name, level, t }) => {
  const title = (
    <span style={{ fontSize: '22px' }}>{t('skills.level' + level)}</span>
  );
  return (
    <Tooltip
      title={title}
      arrow slots={{transition: Zoom}}
      followCursor={true}
      enterDelay={0}
      placement='top'
    >
      <Box sx={{ fontSize: 14 }}>
        {name}
        <div
          style={{
            backgroundColor: '#19647E',
            width: '100%',
            height: '5px',
            borderRadius: '10px',
            overflow: 'hidden',
            marginTop: '5px',
            marginBottom: '15px',
          }}
        >
          <div
            style={{
              backgroundColor: '#EEE5E5',
              width: (level / 5) * 100 + '%',
              height: '100%',
              borderRadius: '10px',
            }}
          ></div>
        </div>
      </Box>
    </Tooltip>
  );
};
const boxContent = (t: any) => (
  <Box sx={{ marginTop: 2 }}>
    {skills
      .filter((kl) => !kl.hidden)
      .map((skill) => (
        <Box key={skill.name}>
          <SkillItem name={skill.name} level={skill.level} t={t}></SkillItem>
        </Box>
      ))}
  </Box>
);
const Skills = () => {
  const { t } = useTranslation();

  return (
    <CustomBox content={boxContent(t)} title={t('skills.label')}></CustomBox>
  );
};

export default Skills;
