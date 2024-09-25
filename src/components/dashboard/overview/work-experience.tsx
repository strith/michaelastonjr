'use client';

import React, { useState } from 'react';
import type { Experience } from '@/app/data/work-experience';
import { Dialog, ListItemButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import type { SxProps } from '@mui/material/styles';
import { DotsThreeVertical as DotsThreeVerticalIcon } from '@phosphor-icons/react/dist/ssr/DotsThreeVertical';
import dayjs from 'dayjs';

import { ExpDialogContent } from './experience/exp-dialog-content';
import { ExperienceAvatar } from './experience/experience-avatar';

export interface ExperiencesProps {
  experiences?: Experience[];
  sx?: SxProps;
}

export function WorkExperiences({ experiences = [], sx }: ExperiencesProps): React.JSX.Element {
  const [open, setOpen] = useState<boolean[]>(new Array(experiences.length).fill(false));

  const handleExpClick = (index: number): void => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };
  const handleClose = (index: number): void => {
    const newOpen = [...open];
    newOpen[index] = false;
    setOpen(newOpen);
  };

  return (
    <Card sx={sx}>
      <CardHeader title="Work Experience" />
      <Divider />
      <List>
        {experiences.map((experience, index) => (
          <div key={experience.id}>
            <ListItem divider={index < experiences.length - 1} key={experience.id}>
              <ListItemButton
                onClick={() => {
                  handleExpClick(index);
                }}
              >
                <ExperienceAvatar avatarBGColor={experience.bgcolor} avatarImage={experience.image} />
                <ListItemText
                  primary={`${experience.company} | ${experience.jobTitle}`}
                  primaryTypographyProps={{ variant: 'subtitle1' }}
                  secondary={experience.jobTagline}
                  secondaryTypographyProps={{ variant: 'body2' }}
                  sx={{ paddingLeft: '10px' }}
                />
                <ListItemText
                  primary={`${dayjs(experience.startDate).format('MMM YYYY')} - ${
                    experience.endDate.toLowerCase() === 'present'
                      ? 'Present'
                      : dayjs(experience.endDate).format('MMM YYYY')
                  }`}
                  primaryTypographyProps={{ variant: 'subtitle1' }}
                  secondary={experience.jobLocation}
                  secondaryTypographyProps={{ variant: 'body2' }}
                  sx={{ width: '300px', textAlign: 'right' }}
                />
                <IconButton edge="end">
                  <DotsThreeVerticalIcon weight="bold" />
                </IconButton>
              </ListItemButton>
            </ListItem>
            <Dialog
              open={open[index]}
              maxWidth={'md'}
              onClose={() => {
                handleClose(index);
              }}
              sx={{ width: '100%' }}
            >
              <ExpDialogContent experience={experience} />
            </Dialog>
          </div>
        ))}
      </List>
    </Card>
  );
}
