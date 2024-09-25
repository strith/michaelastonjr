'use client';

import * as React from 'react';
// import type { Metadata } from 'next';
import type { Project } from '@/app/data/projects';
import { projects } from '@/app/data/projects';
import { Box, Button, Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

// import { config } from '@/config';
import { ProjectCard } from '@/components/dashboard/projects/projects-card';
import { ProjectsFeatureCard } from '@/components/dashboard/projects/projects-feature-card';
import { ProjectsSectionTitle } from '@/components/dashboard/projects/projects-section-title';

// export const metadata = { title: `Projects | Dashboard | ${config.site.name}` } satisfies Metadata;

// TODO
// In media section add titles to each peice of media
// Space below Tech Stack and Media titles
// Increase font size to 1rem on Tech Stack
// Personal section will include link to this Github repo

// Try putting the media down the side of the selected project card
// Adjust the Logo and Project Name section
// Add pagination to the projects list
// Any other visual improvements needed
//   Maybe a pattern or image behind teh whole thing
// Build out the personal projects section

export default function Page(): React.JSX.Element {
  const [selectedProject, setSelectedProject] = React.useState<Project>(projects[0]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const projectListPageSize = 3;

  const handleSelectedProject = (project: Project): void => {
    setSelectedProject(project);
  };
  const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    setCurrentPage(page);
  };

  const projectListStart = (currentPage - 1) * projectListPageSize;
  const projectListPages: number = Math.ceil(projects.length / projectListPageSize);

  return (
    <Stack spacing={3}>
      {/* Featured Project */}
      <ProjectsSectionTitle>Projects</ProjectsSectionTitle>
      <ProjectsFeatureCard project={selectedProject} />

      <Grid container spacing={3}>
        {projects.map((project, index) =>
          index >= projectListStart && index < projectListStart + projectListPageSize ? (
            <Grid key={project.id} lg={4} md={6} xs={12} display="flex" sx={{ flexDirection: 'columnn' }}>
              <Button
                onClick={() => {
                  handleSelectedProject(project);
                }}
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <ProjectCard project={project} isSelected={selectedProject.id === project.id} />
              </Button>
            </Grid>
          ) : null
        )}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={projectListPages} page={currentPage} size="medium" onChange={handlePaginationChange} />
      </Box>
    </Stack>
  );
}
