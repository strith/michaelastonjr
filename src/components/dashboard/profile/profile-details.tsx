'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';

export function ProfileDetails(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader title="Bio" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid xs={12}>
              <p>
                As an accomplished software engineering leader with over a decade of experience, I am passionate about
                creating innovative solutions that delight users and drive business outcomes. My career has been marked
                by a consistent focus on enhancing user experiences. Whether building mobile apps, developing
                large-scale data platforms, or leading cross-functional engineering teams, I consistently drive toward
                improved user experiences.
              </p>
              <p>
                At One Medical, I managed data interoperability teams, improving productivity by adopting a scrum-like
                methodology that was adapted to an optimal solution for the team. My leadership style is rooted in
                providing engineers the freedom to innovate while maintaining accountability and fostering a
                collaborative and high-performing team culture.
              </p>
              <p>
                I have extensive experience with large-scale data systems and cloud-based architectures, having led the
                development of scalable solutions at Q2 eBanking, TACHC, and One Medical. My technical expertise spans
                JavaScript, TypeScript, Python, and various frameworks and tools, allowing me to tackle complex
                challenges effectively. My goal is to leverage my technical expertise, leadership skills, and strategic
                vision to deliver innovative and impactful solutions.
              </p>
              <p>
                Currently, as a Freelance Lead Software Engineer, I continue to deliver high-quality solutions,
                leveraging my skills in data processing, infrastructure management, and client collaboration. I am
                excited to connect with like-minded professionals and explore opportunities to create impactful
                solutions.
              </p>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
}
