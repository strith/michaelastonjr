import React from 'react';
import type { Project } from '@/app/data/projects';
import { Avatar, Box, Card, CardContent, CardHeader, Divider, Grid, Stack, Typography } from '@mui/material';

import { ProjectsMedia } from './projects-media';

interface ProjectsFeatureCardProps {
  project: Project;
}

export function ProjectsFeatureCard({ project }: ProjectsFeatureCardProps): React.JSX.Element {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Stack direction="row" sx={{ width: '100%', alignItems: 'center', p: 2 }}>
        <Stack direction="row" spacing={1}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mr: 2, verticalAlign: 'middle' }}>
            <Avatar src={project.logo} variant="square" />
          </Box>
        </Stack>
        <Stack direction="column" spacing={1}>
          <CardHeader title={<Typography variant="h4">{project.title}</Typography>} subheader={project.description} />
        </Stack>
      </Stack>
      <Divider />
      <CardContent sx={{ width: '100%' }}>
        {project.role ? <Typography variant="h6">Role: {project.role}</Typography> : null}
        {project.longDescription ? (
          <Typography variant="body1" sx={{ mt: 2 }}>
            {project.longDescription}
          </Typography>
        ) : null}
        {project.responsibilities ? (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Responsibilities</Typography>
            <ul>
              {project.responsibilities.map((responsibility) => (
                <li key="resp">{responsibility}</li>
              ))}
            </ul>
          </Box>
        ) : null}
        {project.techStack ? (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Tech Stack</Typography>
            <Grid container sx={{ mt: 2 }}>
              |&nbsp;
              {project.techStack.map((techName) => (
                // <Grid item xs={12} sm={6} md={4} key={techName}>
                <span key={`${project.id} - ${techName}`}>
                  <Typography variant="body2">{` ${techName} |`}&nbsp;</Typography>
                </span>
                // </Grid>
              ))}
            </Grid>
          </Box>
        ) : null}
        <ProjectsMedia project={project} />
      </CardContent>
    </Card>
  );
}
