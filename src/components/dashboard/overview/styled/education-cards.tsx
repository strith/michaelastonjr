'use client';

import React from 'react';
import { CardContent, CardHeader, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { TypographyProps } from '@mui/material/Typography';

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

export const EducationElementText = styled((props: TypographyProps) => (
  <Typography variant={props.variant} {...props} />
))(() => ({
  lineHeight: '1.5',
}));
