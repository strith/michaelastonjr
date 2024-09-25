export interface Experience {
  id: string;
  company: string;
  jobTitle: string;
  jobTagline: string;
  jobLocation: string;
  jobDescription: string[];
  image: string;
  bgcolor?: string;
  startDate: string;
  endDate: string;
}

export const experiences: Experience[] = [
  {
    id: 'EXP-008',
    company: 'Cerebral Playground',
    jobTitle: 'Lead Software Engineer & Architect',
    jobTagline:
      'Provide critical engineering support for direct clients and a global solutions provider, filling JavaScript and Python skill gaps to get projects back on schedule and meet or exceed client expectations.',
    jobLocation: 'Remote',
    jobDescription: [
      'Built a proof-of-concept mobile app for a mapping API; leveraged JavaScript and CSS in a Cordova wrapper',
      'Deliver a parallax-based timeline for an aircraft manufacturer using minimal JavaScript and CSS to ensure a small page size for lower bandwidth users',
      'Enhance and maintain continuing education websites, adding new features, performing search engine optimization (SEO), and implementing a disaster recovery solution to ensure reliability and stability',
    ],
    image: '/assets/cp-logo-icon.png',
    startDate: '2023-10-01',
    endDate: 'Present',
  },
  {
    id: 'EXP-007',
    company: 'One Medical',
    jobTitle: 'Senior Software Engineering Manager',
    jobTagline:
      'Managed two Data Interoperability teams; responsible for all aspects of data consumption and availability across One Medical and with external partners and vendors',
    jobLocation: 'Remote',
    jobDescription: [
      'Responsible for capacity planning, roadmaps, objectives and key results (OKRs), and technical requirements to support internal and external partners and drive improvements in key performance indicators (KPIs)',
      'Coached and mentored a senior software engineer, shifting from individual contributor to manager',
      'Spearheaded transition from kanban to scrum, utilizing metrics (velocity, works in progress, cycle time, etc.) to increase productivity (measured by velocity) by over 25%, delivering multiple features ahead of goals',
      'Managed data efforts to receive ONC CEHRT (Certified Electronic Health Record Technology), including implementing an HL7 FHIR API; used capacity planning to adjust personnel allocations, ensuring on-time delivery',
    ],
    image: '/assets/one-medical-logo-icon.png',
    startDate: '2022-02-01',
    endDate: '2023-09-30',
  },
  {
    id: 'EXP-006',
    company: 'Texas Association of Community Health Centers (TACHC)',
    jobTitle: 'Principal Software Engineer & Manager',
    jobTagline: 'Executive responsible for organization-wide technical vision, strategy, and policies',
    jobLocation: 'Austin, TX',
    jobDescription: [
      'Product Owner for the development of the Texas Health Center Controlled Network (HCCN), a population health tool that provides AI/ML-based insights to improve patient outcomes and facilitate proactive care',
      'Responsible for business continuity and disaster planning, implemented VOIP and conferencing prior to COVID-19, enabling a seamless transition from a no work-from-home policy to 100% remote work for all employees',
      'Managed technology budget and optimized costs through procurement savings',
      'Contributing member of the national HCCN Task Force and Data Strategy Committee',
    ],
    image: '/assets/tachc-logo-icon.jpg',
    startDate: '2019-04-01',
    endDate: '2021-11-01',
  },
  {
    id: 'EXP-005',
    company: 'Q2 eBanking',
    jobTitle: 'Staff Software Engineer',
    jobTagline:
      "End-to-end technical Lead for the development of a greenfield marketing platform for Q2's SaaS banking solution. Coordinated cross-functional efforts to ensure the successful delivery of projects",
    jobDescription: [
      'Developed and enhanced key features for web and mobile banking apps reaching ~18 million active users',
      'Implemented AppDynamics and the Robot Framework to enhance and monitor performance and security',
      'Technical lead for the system design and development of a marketing platform using machine learning to generate ideal audiences for marketing objectives',
      'Scrum Master for 14 software engineers, 2 QA engineers, and a product owner',
      "Led the development of a design library and included components for the company's suite of back-office tools",
    ],
    jobLocation: 'Austin, TX',
    image: '/assets/q2-logo-icon.png',
    startDate: '2015-09-01',
    endDate: '2019-04-01',
  },
  {
    id: 'EXP-004',
    company: 'Q2 eBanking',
    jobTitle: 'Senior Software Engineer',
    jobTagline: '',
    jobLocation: 'Austin, TX',
    jobDescription: [],
    image: '/assets/q2-logo-icon.png',
    startDate: '2014-09-01',
    endDate: '2015-09-01',
  },
  {
    id: 'EXP-003',
    company: 'USAA',
    jobTitle: 'Senior Software Engineer',
    jobTagline: 'Lead front-end engineer for USAA Auto Insurance acquisition workflow',
    jobLocation: 'San Antonio, TX',
    jobDescription: [
      'Using A/B & multivariate testing, increased workflow completion, delivering over $50M in annual revenue growth',
      'Presented about multivariate testing process and successes to over 200 engineers at USAA tech conference',
      'Rapidly produced functional usability models and prototypes for user experience testing',
      'Developed RESTful web services with Java, Jersey, and RESTEasy',
      'Co-founded and regularly presented at the JavaScript Engineering Group to promote engineering best practices',
    ],
    image: '/assets/usaa-logo-icon.png',
    bgcolor: '#12395b',
    startDate: '2012-07-01',
    endDate: '2014-09-01',
  },
  {
    id: 'EXP-002',
    company: 'Clearwater Analytics',
    jobTitle: 'Client Data Manager',
    jobTagline:
      'Built and led a team of data engineers (average size 12) managing end-to-end data integrations and integrity for client onboarding, ETL, data infrastructure, analytics, and business intelligence',
    jobDescription: [
      'Created new tooling using Java, Perl, and Bash to facilitate easier and more reliable onboarding of clients',
      'Developed reporting dashboards and visualizations in SSAS & SSRS to facilitate data and business insights',
      'Implemented alerting and monitoring of customer data to ensure rapid resolution of data integrity issues',
      'Participate in and pass SOC1 & SOC2 audits',
    ],
    jobLocation: 'Boise, ID',
    image: '/assets/clearwater-logo-icon.png',
    startDate: '2009-04-01',
    endDate: '2012-07-01',
  },
  {
    id: 'EXP-001',
    company: 'Clearwater Analytics',
    jobTitle: 'Senior Data Engineer',
    jobTagline: 'Wrote ETL processes to load client data into the Clearwater system.',
    jobLocation: 'Boise, ID',
    jobDescription: [
      'Created new tooling using Java, Perl, and Bash to facilitate easier and more reliable onboarding of clients',
      'Developed reporting dashboards and visualizations in SSAS & SSRS to facilitate data and business insights',
      'Implemented alerting and monitoring of customer data to ensure rapid resolution of data integrity issues',
      'Participate in and pass SOC1 & SOC2 audits',
    ],
    image: '/assets/clearwater-logo-icon.png',
    startDate: '2008-04-01',
    endDate: '2009-04-01',
  },
];
