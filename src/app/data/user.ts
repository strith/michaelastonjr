export interface User {
  name: string;
  avatar: string;
  jobTitle: string;
  country: string;
  city: string;
  state: string;
  timezone: string;
}

export const user = {
  name: 'Michael Aston',
  avatar: '/assets/michael-aston--profile.jpg',
  jobTitle: 'Senior Developer',
  country: 'USA',
  city: 'Austin',
  state: 'TX',
  timezone: 'Central Time (UTC-6/5)',
} as User;
