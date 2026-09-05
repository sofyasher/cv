import React from 'react';
import './styles/App.scss';
import { Box } from '@mui/material';
import Header from './components/header/header';
import WorkExperiences from './components/work-experiences/work-experiences';
import Skills from './components/skills/skills';
import AdditionalInfo from './components/additional-info/additional-Info';
import Education from './components/education/education';
import LangSwitch from './components/lang-switch/lang-switch';
import DownloadPdf from './components/download-pdf/download-pdf';
import Grid from '@mui/material/Grid';

const App = () => {
  return (
    <Box className='main'>
      <Grid
        container
        spacing={2}
        className='sections'
        sx={{ paddingBottom: 0 }}
      >
        <Grid size={12}>
          <Header></Header>
        </Grid>
        <Grid size={12} className='lang-switch'>
          <Box className='pdf-lang-switch-wrapper'>
            <DownloadPdf />
            <LangSwitch />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        className='sections'
        sx={{ paddingBottom: 2.5, paddingTop: 2 }}
      >
        <Grid size={{ xs: 12, md: 9 }}>
          <Box>
            <WorkExperiences></WorkExperiences>
            <br />
            <Education></Education>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Skills></Skills>
        </Grid>
      </Grid>
      <Grid container spacing={2} className='sections' sx={{ paddingTop: 0 }}>
        <Grid size={12}>
          <AdditionalInfo></AdditionalInfo>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
