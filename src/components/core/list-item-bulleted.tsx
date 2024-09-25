import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Terminal } from '@phosphor-icons/react';

interface ListItemBulletedProps {
  key: string;
  listItemText: string;
}

export function ListItemBulleted({ key, listItemText }: ListItemBulletedProps): React.JSX.Element {
  return (
    <ListItem key={key} alignItems="flex-start" sx={{ m: -1, ml: -2 }}>
      <ListItemIcon sx={{ mr: -3 }}>
        <Typography variant="h6" color="textSecondary">
          <Terminal />
        </Typography>
      </ListItemIcon>
      <ListItemText primary={listItemText} />
    </ListItem>
  );
}
