import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
// import { CurrentlyReading } from '@/components/dashboard/profile/currently-reading';
import { ProfileDetails } from '@/components/dashboard/profile/profile-details';
import { ProfileFavorites } from '@/components/dashboard/profile/profile-favorites';
import { ProfileInfo } from '@/components/dashboard/profile/profile-info';

export const metadata = { title: `Account | Dashboard | ${config.site.name}` } satisfies Metadata;

// TODO
// Change image to be dolphin one
// Hobbies - Reading, D&D, comics, video games, hiking, podcasting
// Accomplishments
//   Eagle Scout
//   Graduated with Honors in Writing
//   2nd place in Clark County cheesecake competition
//   Brown/black sash in Kajukenbo Kung-Fu
//   Black belt in Tae Kwon Do
//     1st place in Forms at Jhoon-Rhee Regional Tae Kwon Do Tournament
//     1st place in Breaking at Jhoon-Rhee Regional Tae Kwon Do Tournament
//     2nd place in Sparring at Jhoon-Rhee Regional Tae Kwon Do Tournament
//   Jhoon-Rhee Demo Team
//     Opened for the Harlem Globetrotters, Austin Spurs, Texas Stars, and other events
//   Certified in Trauma Response

// IF TIME ALLOLWS
// Favorite Teams?: BSU
// Add Volunteer Work
//    Coaching in STEM - LinkedIn Mentoring & various boot camps
//    Food collection & services - Reveal Resource Center
//    Youth Group Leader - Church of Jesus Christ
// Link to The VodSquad ?
// Places I've been/lived
// Relocation considerations
//    Georgia, NC, SC (in/near major cities)
//    Pheonix
//    Southern CA - LA area to San Diego
//    Seattle area (including Tacoma & Olympia)
//    Portland, OR/Vancouver, WA
//    Nashville
//    Central FL (Tampa, Orlando, etc., maybe far northern Miami area)
//    San Antonio, Dallas & Fort Worth, Houston
//    Salt Lake City/Ogden/Provo

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">About Me</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid lg={4} md={6} xs={12}>
          <ProfileInfo />
        </Grid>
        <Grid lg={8} md={6} xs={12}>
          <ProfileDetails />
        </Grid>
      </Grid>
      <Grid container>
        <ProfileFavorites />
      </Grid>
      {/* <Grid container spacing={3}>
        <Grid lg={6} md={6} xs={12}>
          <CurrentlyReading />
        </Grid>
      </Grid> */}
    </Stack>
  );
}
