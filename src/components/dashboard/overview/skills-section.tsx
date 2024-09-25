import React from 'react';
import type { Category, Skill } from '@/app/data/skills';
import { skillCategories, skills } from '@/app/data/skills';
import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { Star as StarIcon } from '@phosphor-icons/react/dist/ssr';

export function SkillsSection(): React.JSX.Element {
  const skillsList: Skill[] = skills;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Technology & Skills" />
          <Divider />
          <CardContent>
            <Typography variant="body1" paragraph>
              I have production experience in the following technologies and tools. I have also included a star (
              <StarIcon size={12} color="rgb(2, 138, 140)" weight="fill" />) on all of my core technologies. This
              indicates that I have utilized that technology for more than 5 years to deliver multiple projects and the
              technology is fresh enough in my mind to require no ramp-up time.
            </Typography>
            <Grid container spacing={4}>
              {skillCategories.map((skillCategory: Category) => (
                <Grid item xs={12} md={6} lg={3} key={skillCategory.name}>
                  <Box
                    component="section"
                    sx={{ p: 2, border: '1px solid grey', backgroundColor: 'azure' }}
                    width="100%"
                  >
                    <Grid container textAlign="center" paddingBottom={2}>
                      <Grid item width="100%">
                        <skillCategory.icon width="65px" height="65px" />
                      </Grid>
                      <Grid item width="100%" spacing={2}>
                        <Typography variant="h6">{skillCategory.name}</Typography>
                      </Grid>
                    </Grid>
                    <Divider sx={{ marginBottom: '24px' }} />
                    {skillsList.map((skill: Skill) => {
                      return skill.category === skillCategory.name ? (
                        <Box key={skill.name} display="flex" alignItems="center" mb={1}>
                          {skill.isCore ? (
                            <StarIcon size={12} color="rgb(2, 138, 140)" weight="fill" style={{ marginRight: 8 }} />
                          ) : null}
                          <Typography key={skill.name} variant="body1">
                            {skill.name}
                          </Typography>
                        </Box>
                      ) : null;
                    })}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
