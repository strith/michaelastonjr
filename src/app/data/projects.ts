import dayjs from 'dayjs';

export interface ProjectMedia {
  id: string;
  title: string;
  type: string;
  url: string;
  mediaAlt: string;
  link?: string;
  handleClick?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  logo: string;
  startDate: Date;
  endDate: Date;
  role?: string;
  responsibilities?: string[];
  media?: ProjectMedia[];
  techStack?: string[];
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'INTEG-006',
    title: '1Life EHR - ONC CEHRT',
    description: 'Lead the data interoperability teams through ONC Certification for the 1Life EHR.',
    longDescription:
      'Updated in-house electronic health record (EHR) to meet all guidelines of' +
      'the Office of the National Coordinator (ONC) to meet the requirements for' +
      'becoming a Certified Electronic Health Record Technology (CEHRT). Created' +
      'FHIR API and added additional data accessibility requirements for internal' +
      'and external access. Ensured the security of all data and adherence to' +
      'required data privacy rules.',
    role: 'Software Engineering Manager',
    responsibilities: [
      'Lead the data interoperability teams through ONC Certification.',
      'Created FHIR API and added additional data accessibility requirements.',
      'Ensured the security of all data and adherence to required data privacy laws and rules (HIPAA).',
      'Using capacity planning, ensure that all dependencies are met and that the project is delivered on time.',
      'Perform code reviews and manual testing to ensure all certification requirements are met',
    ],
    logo: '/assets/one-medical-logo-icon.png',
    startDate: dayjs('02/01/2022').toDate(),
    endDate: dayjs('09/30/2022').toDate(),
    media: [
      {
        id: 'INTEG-006-MEDIA-1',
        type: 'weblink',
        title: 'ONC Health IT Certificataion offical website',
        url: '/assets/ONC_CEHRT-website.png',
        link: 'https://www.healthit.gov/topic/certification-ehrs/about-onc-health-it-certification-program',
        mediaAlt: 'ONC Health IT Certification',
      },
      {
        id: 'INTEG-006-MEDIA-2',
        type: 'weblink',
        title: 'One Medical Public API Documentation',
        url: '/assets/OM-API_Documentation.png',
        link: 'https://apidocs.onemedical.io/CCDA/patient_continuity_of_care_document/',
        mediaAlt: 'OM CEHRT API Documentation',
      },
    ],
    techStack: [
      'Ruby on Rails',
      'TypeScript',
      'React',
      'Docker',
      'Terraform',
      'Amazon S3',
      'Amazon RDS for PostgreSQL',
      'Amazon Lambda',
      'FHIR',
      'C-CDA',
    ],
  },
  {
    id: 'INTEG-005',
    title: '1Life Interoperability Switchboard',
    description: String(
      'Built a highly adaptable and scalable data interoperability platform ' +
        'that facilitated quicker and less error prone data integrations with ' +
        'outside vendors and partners.'
    ),
    longDescription: String(
      'Through the development of a sophisticated and flexible rules engine and ' +
        'integration platform, my team reduced the technical portion of health ' +
        'system onboarding from about one month to approximately one week.'
    ),
    logo: '/assets/one-medical-logo-icon.png',
    startDate: dayjs('12/01/2022').toDate(),
    endDate: dayjs('04/01/2023').toDate(),
    techStack: [
      'Ruby',
      'Docker',
      'Terraform',
      'Amazon CloudTrail',
      'Amazon CloudWatch',
      'Amazon DynamoDB',
      'Amazon Glacier',
      'Amazon Lambda',
      'Amazon S3',
      'Amazon SQS',
      'AWS Transfer Family',
    ],
  },
  {
    id: 'INTEG-004',
    title: 'TACHC - Texas HCCN',
    description:
      'Built a population health tool that provided real-time data to Texas Health Centers dilivering better patient outcomes at a lower total cost.',
    longDescription: String(
      'Worked with a third-party development company to design/architect a ' +
        'population health tool that would allow confidential data sharing across ' +
        'health centers, population health benchmarking, Uniform Data System (UDS) ' +
        'measure monitoring, and proactive care. The key feature of this tool was ML ' +
        'functionality, which helped health centers (HC) easily identify patients ' +
        'who were likely or already had gone out of range on UDS measures. This ' +
        'knowledge was then used by HC staff to reach out and provide proactive ' +
        'care to these individuals, improving patient outcomes and reducing hospital ' +
        'and emergency department visits.'
    ),
    logo: '/assets/tachc-logo-icon.jpg',
    startDate: dayjs('04/01/2019').toDate(),
    endDate: dayjs('08/31/2021').toDate(),
    techStack: [
      'ASP.NET',
      'Azure App Service',
      'Azure Application Insights',
      'Azure Kubernetes Service',
      'C#',
      'D3',
      'GitHub',
      'React',
      'SQL Server',
      'TypeScript',
      'Visual Studio',
    ],
  },
  {
    id: 'INTEG-003',
    title: 'Q2 SMART',
    description:
      'Cloud-based digital marketing platform that enables financial institutions to deliver meaningful ads to customers inside their banking app.',
    longDescription: String(
      'As a SaaS banking company, Q2 provides bleeding edge ' +
        'banking technology to banks and credit unions. SMART ' +
        'was a greenfield project that provided a marketing ' +
        "solution to allow Q2's customer banks and credit unions " +
        'to market and advertise to their customers inside the ' +
        'Q2 banking applications and website. As the technical ' +
        'lead, I worked with senior leaders in product and strategy ' +
        'and with the UI/UX group to create a roadmap and technical ' +
        'requirements for the application. In support of the ' +
        'product owner, I worked with the marketing, design, ' +
        'pricing, sales, and implementation teams to coordinate ' +
        'efforts and ensure that all parties were on board with ' +
        'timelines and technical requirements.'
    ),
    role: 'Lead Software Engineer',
    responsibilities: [
      'Architectural design of application components.',
      'Build campaign performance dashboards, including multiple adaptable chart types using D3.js.',
      'Lead migration codebase from JavaScript to TypeScript.',
      'Coordinated with product and strategy to create a roadmap and technical requirements.',
      'Coordinated development of usermanuals and training materials with the technical writing team.',
      'Developed the incident response playbook for SMART.',
    ],
    logo: '/assets/q2-logo-icon.png',
    startDate: dayjs('02/01/2015').toDate(),
    endDate: dayjs('04/01/2019').toDate(),
    media: [
      {
        id: 'INTEG-003-MEDIA-1',
        title: 'Q2 SMART Dashboard - screenshot',
        type: 'image',
        url: '/assets/q2-smart-dashboard.png',
        mediaAlt: 'Q2 SMART Dashboard',
      },
      {
        id: 'INTEG-003-MEDIA-2',
        title: 'Q2 SMART Marketing Slick',
        type: 'pdf',
        url: 'https://content.cdntwrk.com/files/aT0xNTE5MDEzJnA9MCZ2ZXJzaW9uPTEmY21kPXYmc2lnPWExOWExZDc2Mzg2ZDM2MThkYjBjZGYwNTI0YTdkMWNl/-w-320.jpg',
        mediaAlt: 'Q2 SMART Marketing Slick PDF',
        link: 'https://content.cdntwrk.com/files/aT0xNTE5MDEzJnY9MSZpc3N1ZU5hbWU9cTItc21hcnQtcHJvZHVjdC1vdmVydmlldyZjbWQ9ZCZzaWc9ZjAwYzg3MDlmMmU0MGQwZTQ0Zjc4ZDFmOTJhYzViYjk%253D',
        handleClick: 'openPdf',
      },
    ],
    techStack: ['JavaScript', 'TypeScript', 'Ember.js', 'Node.js', 'Hapi.js', 'D3.js', 'Docker', 'Ansible', 'AWS'],
  },
  {
    id: 'INTEG-007',
    title: 'Q2 - Design Library',
    description: 'Built a design library of reusable components for the Q2 SMART marketing platform.',
    longDescription: String(
      'I worked with the lead UI/UX designer to componentize the new user ' +
        'experience to allow easy implementation of UI elements. We championed ' +
        'the use of the new design to leadership and other back-office engineering ' +
        'teams. I built a prototype documentation app that documented the proper ' +
        'use of each design element, including styles, code, and dependencies.'
    ),
    logo: '/assets/q2-logo-icon.png',
    startDate: dayjs('04/30/2015').toDate(),
    endDate: dayjs('07/30/2015').toDate(),
    techStack: ['Balsamiq', 'CSS', 'Ember.js', 'JavaScript', 'Node', 'Shape'],
  },
  {
    id: 'INTEG-002',
    title: 'USAA - Auto Insurance Accquisition Campaign',
    description:
      'Used user experience, A/B, and multivariate testing to optimize the USAA auto insurance accquisition campaign.',
    longDescription: String(
      'Working with a lead UI/UX designer, we developed multiple updates to ' +
        'elements on the auto insurance pages. Using A/B and multivariate testing, ' +
        'we tested a variety of minor updates quickly with no code changes. Upon ' +
        'completion of tests, features were updated in existing components, or ' +
        'new components were written to implement more significant UI changes.'
    ),
    logo: '/assets/usaa-logo-icon.png',
    startDate: dayjs('01/01/2014').toDate(),
    endDate: dayjs('09/01/2014').toDate(),
    techStack: ['CSS', 'HTML', 'JavaScript', 'Optimizely', 'RegExp'],
  },
  {
    id: 'INTEG-001',
    title: 'USAA - Auto Insurance Experience Redesign',
    description: 'Working with UI/UX and product, rebuilt the auto insurance experience from the ground up.',
    longDescription: String(
      'Worked with UI/UX to build prototypes for user experience testing. ' +
        'Iterated on designs and updated the entire user interface for the Auto ' +
        'Insurance section of the USAA website. With UI/UX designer, presented ' +
        'new designs for UI Design approval. Coordinated with the UI Design ' +
        'Library team to build modular components for inclusion in the design ' +
        'library for other teams to implement. Coordinated with mobile teams to ' +
        'implement new designs in the iOS and Android applications.'
    ),
    logo: '/assets/usaa-logo-icon.png',
    startDate: dayjs('07/01/2012').toDate(),
    endDate: dayjs('12/31/2013').toDate(),
    techStack: ['CSS', 'HTML', 'Java', 'JavaScript', 'JUnit', 'Wicket', 'YUI'],
  },
] satisfies Project[];
