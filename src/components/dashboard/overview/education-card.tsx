import React from 'react';
import type { Education } from '@/app/data/education';
import { Card, Divider, Link } from '@mui/material';
import Grid from '@mui/material/Grid';

import {
  EducationCardContent,
  EducationCardElement,
  EducationCardHeader,
  EducationElementText,
} from './styled/education-cards';

export interface EducationCardProps {
  educationList: Education[];
  title: string;
}

export interface CardContentProps {
  education: Education;
}

export function EducationCard({ educationList, title }: EducationCardProps): React.JSX.Element {
  return (
    <Card>
      <EducationCardHeader title={title} />
      <Divider />
      <EducationCardContent>
        {educationList.map((education) => (
          <EducationContentWrapper key={education.id} education={education} />
        ))}
      </EducationCardContent>
    </Card>
  );
}

export function EducationContentWrapper({ education }: CardContentProps): React.JSX.Element {
  return education.documentationUrl ? (
    <Link href={education.documentationUrl} target="_blank" rel="noreferrer">
      <CardContent education={education} />
    </Link>
  ) : (
    <div>
      <CardContent education={education} />
    </div>
  );
}

function CardContent({ education }: CardContentProps): React.JSX.Element {
  return (
    <EducationCardElement>
      <Grid container spacing={1} marginTop={2}>
        <Grid spacing={1} lg={3} md={12}>
          <img src={education.logoUrl} alt={`${education.schoolName} Logo`} width="100px" />
        </Grid>
        <Grid container spacing={2} lg={9} md={12} alignItems="center">
          <div>
            <EducationElementText variant="overline">{education.degree}</EducationElementText>
            <EducationElementText variant="h5">{education.schoolName}</EducationElementText>
          </div>
        </Grid>
      </Grid>
    </EducationCardElement>
  );
}
