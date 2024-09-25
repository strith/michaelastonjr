'use client';

import React, { useState } from 'react';
import type { Project } from '@/app/data/projects';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import { XSquare } from '@phosphor-icons/react';

interface ProjectsMediaProps {
  project: Project;
}

export function ProjectsMedia({ project }: ProjectsMediaProps): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <div>
      {project.media ? (
        <Box sx={{ mt: 2 }}>
          <Divider sx={{ mt: 3, mr: 1, mb: 4, ml: 1 }} />
          <Typography variant="h6">Media</Typography>
          <Grid container width="100%" paddingTop={2}>
            {project.media.map((mediaEl) => (
              <Grid item xs={12} sm={6} md={4} key={mediaEl.id}>
                <Typography variant="h6" color="primary">
                  {mediaEl.title}
                </Typography>
                {mediaEl.type === 'image' ? (
                  <div>
                    <Button focusRipple key={mediaEl.id} onClick={handleOpen}>
                      <img src={mediaEl.url} alt={mediaEl.mediaAlt} style={{ maxWidth: '250px', maxHeight: 'auto' }} />
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>{mediaEl.mediaAlt}</DialogTitle>
                      <IconButton
                        onClick={handleClose}
                        sx={(theme) => ({
                          position: 'absolute',
                          right: theme.spacing(1),
                          top: theme.spacing(1),
                          color: theme.palette.grey[500],
                        })}
                      >
                        <XSquare />
                      </IconButton>
                      <DialogContent>
                        <img src={mediaEl.url} alt={mediaEl.mediaAlt} style={{ width: '100%', maxHeight: 'auto' }} />
                      </DialogContent>
                    </Dialog>
                  </div>
                ) : null}
                {mediaEl.type === 'pdf' ? (
                  <Link key={mediaEl.id} href={mediaEl.link} rel="noopener noreferrer">
                    <img src={mediaEl.url} alt={mediaEl.mediaAlt} style={{ maxWidth: 'auto', maxHeight: '250px' }} />
                  </Link>
                ) : null}
                {mediaEl.type === 'weblink' ? (
                  <Link key={mediaEl.id} href={mediaEl.link} target="_blank" rel="noopener noreferrer">
                    <img src={mediaEl.url} alt={mediaEl.mediaAlt} style={{ maxWidth: 'auto', maxHeight: '250px' }} />
                  </Link>
                ) : null}
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : null}
    </div>
  );
}
