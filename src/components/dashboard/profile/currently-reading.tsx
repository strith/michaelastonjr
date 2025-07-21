import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Divider, Grid } from '@mui/material';
import { teal } from '@mui/material/colors';

const books = [
  {
    id: '1',
    title: 'The Skyward Series',
    author: 'Brandon Sanderson',
    cover: '/assets/Skyward-Series--Brandon-Sanderson.jpg',
  },
  {
    id: '2',
    title: 'Why Does E=mc²?',
    author: 'Brian Cox and Jeff Forshaw',
    cover: '/assets/Why-Does-E-mc2--Brian-Cox.jpg',
  },
] as const;

export function CurrentlyReading(): React.JSX.Element {
  return (
    <Grid item width="100%">
      <Card>
        <CardHeader
          title="Currently Reading"
          subheader="I'm generally always reading a non-fiction and a fiction book. Right now I'm reading..."
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            {books.map((book) => (
              <Grid item lg={6} xs={12} key={book.id}>
                <Card
                  sx={{
                    bgcolor: teal[100],
                    textAlign: 'center',
                    borderWidth: '1px',
                    borderColor: teal[800],
                    width: '100%',
                  }}
                >
                  <CardHeader title={book.title} subheader={book.author} sx={{ minHeight: '115px' }} />
                  <Divider />
                  <CardContent sx={{ bgcolor: teal[300] }}>
                    <CardMedia
                      component="img"
                      image={book.cover}
                      alt={book.title}
                      sx={{ height: '368px', width: '100%' }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
