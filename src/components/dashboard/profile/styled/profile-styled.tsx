import React from 'react';

export function ProfileLabel({ children }: { children: string }): React.JSX.Element {
  return <span style={{ fontWeight: 'bold' }}>{children}</span>;
}

export function ProfileInfo({ children }: { children: string }): React.JSX.Element {
  return <span style={{ color: 'blue' }}>{children}</span>;
}
