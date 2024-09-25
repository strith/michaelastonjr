import React from 'react';
import { Box, ListItemAvatar } from '@mui/material';

interface ExperienceProps {
  avatarImage?: string;
  avatarBGColor?: string;
}

export function ExperienceAvatar({ avatarImage, avatarBGColor }: ExperienceProps): React.JSX.Element {
  return (
    <ListItemAvatar>
      {avatarImage ? (
        <Box
          sx={{
            borderRadius: 1,
            height: '54px',
            width: '54px',
            bgcolor: avatarBGColor,
            padding: '3px',
          }}
        >
          <Box component="img" src={avatarImage} sx={{ borderRadius: 1, height: '48px', width: '48px' }} />
        </Box>
      ) : (
        <Box
          sx={{
            borderRadius: 1,
            backgroundColor: 'var(--mui-palette-neutral-200)',
            height: '48px',
            width: '48px',
          }}
        />
      )}
    </ListItemAvatar>
  );
}
