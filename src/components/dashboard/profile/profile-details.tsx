'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';

export function ProfileDetails(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader title="Bio" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid xs={12}>
              This will become my personal biography. It will provide a brief overview of my personal and professional
              background background. The focus will be on my tech experiences and a bit about my personal interestes.
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
}
