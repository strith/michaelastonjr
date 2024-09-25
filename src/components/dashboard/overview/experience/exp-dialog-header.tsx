import React from 'react';
import type { Experience } from '@/app/data/work-experience';
import { Grid, Typography } from '@mui/material';

import { ExperienceAvatar } from './experience-avatar';

interface ExpDialogHeaderProps {
  experience: Experience;
}

export function ExpDialogHeader({ experience }: ExpDialogHeaderProps): React.JSX.Element {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <ExperienceAvatar avatarImage={experience.image} avatarBGColor={experience.bgcolor} />
      </Grid>
      <Grid item xs>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Typography variant="h5">{experience.company}</Typography>
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid item xs>
              <Typography variant="h6" color="textSecondary">
                {experience.jobTitle}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="textSecondary">
                {experience.startDate} - {experience.endDate}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
