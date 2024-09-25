import React from 'react';
import { Stack, Typography } from '@mui/material';

interface ProjectsSectionTitleProps {
  children: React.ReactNode;
}

export function ProjectsSectionTitle({ children }: ProjectsSectionTitleProps): React.JSX.Element {
  return (
    <Stack direction="row" spacing={3}>
      <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
        <Typography variant="h4">{children}</Typography>
      </Stack>
    </Stack>
  );
}
