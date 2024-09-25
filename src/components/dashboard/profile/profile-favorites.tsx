import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Divider, Grid } from '@mui/material';
import { teal } from '@mui/material/colors';

const books = [
  {
    id: '1',
    title: 'The Dragon Reborn',
    author: 'Robert Jordan',
    cover: '/assets/The-Dragon-Reborn--Robert-Jordan.jpg',
  },
  {
    id: '2',
    title: 'Snow Crash',
    author: 'Neal Stephenson',
    cover: '/assets/Snow-Crash--Neal-Stephenson.jpg',
  },
  { id: '3', title: 'Elantris', author: 'Brandon Sanderson', cover: '/assets/Elantris--Brandon-Sanderson.jpg' },
  {
    id: '4',
    title: 'The Hitchikers Guide to the Galaxy',
    author: 'Douglas Adams',
    cover: '/assets/Hitchhikers-Guide--Douglas-Adams.jpg',
  },
] as const;

export function ProfileFavorites(): React.JSX.Element {
  return (
    <Grid item width="100%">
      <Card>
        <CardHeader
          title="Favorite Books"
          subheader="I'm a huge fan of Fantasy and Science Fiction. Here are my favorite books."
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            {books.map((book) => (
              <Grid item lg={3} xs={12} key={book.id}>
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
