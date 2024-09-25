import * as React from 'react';
// import type { IconProps } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export interface ExperienceSpotlightCardProps {
  sx?: SxProps;
  title: string;
  iconColor?: string;
  yoe: string;
  icon: React.ReactNode;
}

export function ExperienceSpotlightCard({
  sx,
  title,
  iconColor,
  yoe,
  icon,
}: ExperienceSpotlightCardProps): React.JSX.Element {
  const iconBGColor = iconColor ? iconColor : 'var(--mui-palette-primary-main)';
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                {title}
              </Typography>
              <Typography variant="h4">{yoe}</Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: iconBGColor, height: '56px', width: '56px' }}>{icon}</Avatar>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
