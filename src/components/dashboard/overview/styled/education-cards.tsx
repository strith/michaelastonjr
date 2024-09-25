'use client';

import { CardContent, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EducationCardHeader = styled(CardHeader)(({ theme }) => ({
  overline: {
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export const EducationCardContent = styled(CardContent)(({ theme }) => ({
  h5: {
    fontSize: theme.typography.body1.fontSize,
  },
  padding: theme.spacing(3),
  paddingTop: theme.spacing(1),
}));

export const EducationCardElement = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
