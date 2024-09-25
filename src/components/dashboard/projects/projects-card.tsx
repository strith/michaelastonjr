import * as React from 'react';
import type { Project } from '@/app/data/projects';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Clock as ClockIcon } from '@phosphor-icons/react/dist/ssr/Clock';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import dayjs from 'dayjs';

import { ProjectCardStyled } from './styled/project-card';

export interface ProjectCardProps {
  project: Project;
  isSelected?: boolean;
}

export function ProjectCard({ project, isSelected }: ProjectCardProps): React.JSX.Element {
  return (
    <ProjectCardStyled
      className={isSelected ? 'selected' : ''}
      sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <CardContent sx={{ flex: '1 1 auto', height: '100%' }}>
        <Stack spacing={2} sx={{ height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar src={project.logo} variant="square" />
          </Box>
          <Stack spacing={1}>
            <Typography align="center" variant="h5">
              {project.title}
            </Typography>
            <Typography align="center" variant="body1">
              {project.description}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      {/* Card Footer */}
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <ClockIcon fontSize="var(--icon-fontSize-sm)" />
          <Typography color="text.secondary" display="inline" variant="body2">
            Start: {dayjs(project.startDate).format('MMM YYYY')}
          </Typography>
        </Stack>
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <DownloadIcon fontSize="var(--icon-fontSize-sm)" />
          <Typography color="text.secondary" display="inline" variant="body2">
            End: {dayjs(project.endDate).format('MMM YYYY')}
          </Typography>
        </Stack>
      </Stack>
    </ProjectCardStyled>
  );
}
