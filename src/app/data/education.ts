export interface Education {
  id: string;
  schoolName: string;
  degree: string;
  fieldOfStudy?: string;
  graduationDate: string;
  logoUrl: string;
}

export const education: Education[] = [
  {
    id: 'EDU-001',
    schoolName: 'Boise State University',
    degree: 'Masters of Business Administration (MBA)',
    fieldOfStudy: 'Business',
    graduationDate: '2020',
    logoUrl: '/assets/BSU-Bronco-Logo.svg',
  },
  {
    id: 'EDU-002',
    schoolName: 'Washington State University',
    degree: 'B.S. in Psychology',
    graduationDate: '2015',
    logoUrl: '/assets/WSU-logo.png',
  },
];

export const certifications: Education[] = [
  {
    id: 'CERT-001',
    schoolName: 'Scrum Alliance Foundation',
    degree: 'Certified Scrum Master',
    graduationDate: '2018',
    logoUrl: '/assets/sa-csm-600.png',
  },
  {
    id: 'CERT-002',
    schoolName: 'Apollo',
    degree: 'Apollo GraphQL Developer - Associate Certification',
    graduationDate: '2024',
    logoUrl: '/assets/apollo-badge_sfsiin.svg',
  },
  {
    id: 'CERT-003',
    schoolName: 'EdX',
    degree: 'Data Structures & Algorithms',
    graduationDate: '2024',
    logoUrl: 'https://edx-cdn.org/v3/prod/logo-trademark.svg',
  },
];
