import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { blueGrey } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export interface ObjectiveProps {
  sx?: SxProps;
  name: string;
  objective: string;
}

export function Objective({ sx, name, objective }: ObjectiveProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color={blueGrey['100']} variant="h2">
                {name}
              </Typography>
              <Typography color={blueGrey['100']} variant="subtitle1">
                {objective}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
