import React from 'react';
import type { Experience } from '@/app/data/work-experience';
import { Box, Divider, List, Typography } from '@mui/material';

import { ListItemBulleted } from '@/components/core/list-item-bulleted';

import { ExpDialogHeader } from './exp-dialog-header';

interface ExpDialogContentProps {
  experience: Experience;
}

export function ExpDialogContent({ experience }: ExpDialogContentProps): React.JSX.Element {
  return (
    <Box sx={{ padding: '50px', width: '100%' }}>
      {/* Header contains Logo, Company Name, Job Title, Job Dates */}
      <ExpDialogHeader experience={experience} />
      <Divider sx={{ marginY: 1 }} />
      <Typography variant="body2" color="textSecondary">
        {experience.jobTagline}
      </Typography>
      <List>
        {experience.jobDescription.map((desc) => (
          <ListItemBulleted key={experience.id} listItemText={desc} />
        ))}
      </List>
      <Divider sx={{ marginY: 1 }} />
      <Typography variant="body2" color="textSecondary">
        {experience.jobLocation}
      </Typography>
    </Box>
  );
}
