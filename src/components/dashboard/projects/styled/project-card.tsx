'use client';

import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ProjectCardStyled = styled(Card)(({ theme }) => ({
  '&.selected': {
    boxShadow: `8px 4px 4px ${theme.palette.neutral[500]}`,
    border: `1px solid ${theme.palette.neutral[800]}`,
  },
}));
