import * as React from 'react';
import type { Metadata } from 'next';
// TODO Move this stuff
// Break the objective into two lines
import { certifications, education } from '@/app/data/education';
// UI Components
import { experiences } from '@/app/data/work-experience';
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
import { EducationCard } from '@/components/dashboard/overview/education-card';
import { ExperienceSpotlightCard } from '@/components/dashboard/overview/experience-spotlight-card';
import { Objective } from '@/components/dashboard/overview/objective';
import { SkillsSection } from '@/components/dashboard/overview/skills-section';
import { WorkDistribution } from '@/components/dashboard/overview/work-distribution';
import { WorkExperiences } from '@/components/dashboard/overview/work-experience';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;
const objective =
  'Innovative Engineering Leader with a track record of building high-performing teams and delivering scalable, compliant solutions in highly regulated industries. Experienced in shaping technology strategy, streamlining operations, and driving mission-critical initiatives from inception to production. Skilled communicator with a talent for translating complex technical goals into actionable plans for executives, boards, and cross-functional teams.';
const myName = 'Michael Aston Jr.';

// TODO
// Try other fonts for name
// Title bold maybe a bit larger

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      {/* Page title section - name and tagline */}
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
      {/* Experience spotlight cards */}
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
      {/* Work experience */}
      <Grid lg={8} xs={12}>
        <WorkExperiences experiences={experiences} sx={{ height: '100%' }} />
      </Grid>
      {/* Work distribution - picture of me & percent breakdown of work */}
      <Grid lg={4} md={6} xs={12}>
        <WorkDistribution
          chartSeries={[40, 30, 30]}
          labels={['Back-end', 'Front-end', 'Leadership']}
          sx={{ height: '100%' }}
        />
      </Grid>
      {/* Industry experience spotlight cards */}
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
      {/* Education */}
      <Grid lg={6} md={12}>
        <EducationCard educationList={education} title="Education" />
      </Grid>
      {/* Certifications */}
      <Grid lg={6} md={12}>
        <EducationCard educationList={certifications} title="Certifications" />
      </Grid>
      {/* Skills section */}
      <SkillsSection />
    </Grid>
  );
}
