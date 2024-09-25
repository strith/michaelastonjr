import * as React from 'react';
import type { Metadata } from 'next';
// TODO Move this stuff
// Break the objective into two lines
import { certifications, education } from '@/app/data/education';
// UI Components
import { experiences } from '@/app/data/work-experience';
import { Card, Divider, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// Icons
import { Bank as BankIcon } from '@phosphor-icons/react/dist/ssr/Bank';
import { CloudCheck as CloudCheckIcon } from '@phosphor-icons/react/dist/ssr/CloudCheck';
import { Code as CodeIcon } from '@phosphor-icons/react/dist/ssr/Code';
import { Desktop as DesktopIcon } from '@phosphor-icons/react/dist/ssr/Desktop';
import { Hospital as HospitalIcon } from '@phosphor-icons/react/dist/ssr/Hospital';
import { UsersThree as UsersThreeIcon } from '@phosphor-icons/react/dist/ssr/UsersThree';

// Custom components
import { config } from '@/config';
import { ExperienceSpotlightCard } from '@/components/dashboard/overview/experience-spotlight-card';
import { Objective } from '@/components/dashboard/overview/objective';
import { SkillsSection } from '@/components/dashboard/overview/skills-section';
import {
  EducationCardContent,
  EducationCardElement,
  EducationCardHeader,
} from '@/components/dashboard/overview/styled/education-cards';
import { Traffic } from '@/components/dashboard/overview/traffic';
import { WorkExperiences } from '@/components/dashboard/overview/work-experience';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;
const objective =
  'Accomplished software engineering leader delivering business outcomes and customer satisfaction. Skilled at driving innovation, operational productivity, and creating conditions for team growth.';
const myName = 'Michael Aston Jr.';

// TODO
// Try other fonts for name
// Title bold maybe a bit larger

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={12}>
        <Objective
          sx={{
            height: '100%',
            color: blueGrey['A200'],
            backgroundImage: "url('/assets/objective-background-pattern.jpg')",
          }}
          name={myName}
          objective={objective}
        />
      </Grid>
      <Grid lg={4} sm={6} xs={12}>
        <ExperienceSpotlightCard
          sx={{ height: '100%' }}
          title="Software Engineering"
          yoe="15+ years"
          icon={<CodeIcon fontSize="var(--icon-fontSize-lg)" />}
        />
      </Grid>
      <Grid lg={4} sm={6} xs={12}>
        <ExperienceSpotlightCard
          sx={{ height: '100%' }}
          title="Engineering Management"
          yoe="8 years"
          icon={<UsersThreeIcon fontSize="var(--icon-fontSize-lg)" />}
        />
      </Grid>
      <Grid lg={4} sm={6} xs={12}>
        <ExperienceSpotlightCard
          sx={{ height: '100%' }}
          title="Cloud Architecture"
          yoe="7 years"
          icon={<CloudCheckIcon fontSize="var(--icon-fontSize-lg)" />}
        />
      </Grid>
      <Grid lg={8} xs={12}>
        <WorkExperiences experiences={experiences} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Traffic chartSeries={[40, 30, 30]} labels={['Back-end', 'Front-end', 'Leadership']} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <ExperienceSpotlightCard
          sx={{ height: '100%' }}
          title="Industry: Banking & Finance"
          yoe="10 years"
          iconColor={blueGrey['500']}
          icon={<BankIcon fontSize="var(--icon-fontSize-lg)" />}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <ExperienceSpotlightCard
          sx={{ height: '100%' }}
          title="Industry: Healthcare"
          yoe="5 years"
          iconColor={blueGrey['500']}
          icon={<HospitalIcon fontSize="var(--icon-fontSize-lg)" />}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <ExperienceSpotlightCard
          sx={{ height: '100%' }}
          title="Industry: Freelance/Consulting"
          yoe="10 years"
          iconColor={blueGrey['500']}
          icon={<DesktopIcon fontSize="var(--icon-fontSize-lg)" />}
        />
      </Grid>
      <Grid lg={6} md={12}>
        <Card>
          <EducationCardHeader title="Education" />
          <Divider />
          <EducationCardContent>
            {education.map((edu) => (
              <EducationCardElement key={edu.id}>
                <Grid container spacing={1} marginTop={2}>
                  <Grid spacing={1} lg={3} md={12}>
                    <img src={edu.logoUrl} alt={`${edu.schoolName} Logo`} width="100px" />
                  </Grid>
                  <Grid container spacing={2} lg={9} md={12} alignItems="center">
                    <div>
                      <Typography variant="overline">{edu.degree}</Typography>
                      <Typography variant="h5">{edu.schoolName}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </EducationCardElement>
            ))}
          </EducationCardContent>
        </Card>
      </Grid>
      <Grid lg={6} md={12}>
        <Card>
          <EducationCardHeader title="Certifications" />
          <Divider />
          <EducationCardContent>
            {certifications.map((cert) => (
              <EducationCardElement key={cert.id}>
                <Grid container spacing={1} marginTop={2}>
                  <Grid spacing={1} lg={3} md={12}>
                    <img src={cert.logoUrl} alt={`${cert.schoolName} Logo`} width="100px" />
                  </Grid>
                  <Grid container spacing={2} lg={9} md={12} alignItems="center">
                    <div>
                      <Typography variant="overline">{cert.degree}</Typography>
                      <Typography variant="h5">{cert.schoolName}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </EducationCardElement>
            ))}
          </EducationCardContent>
        </Card>
      </Grid>
      <SkillsSection />
    </Grid>
  );
}
