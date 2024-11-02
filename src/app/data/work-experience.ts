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
    jobTitle: 'Principal Software Architect & Engineer',
    jobTagline:
      'Provide critical engineering support for direct clients and a global solutions provider, filling JavaScript and Python skill gaps to get projects back on schedule and meet or exceed client expectations.',
    jobLocation: 'Remote',
    jobDescription: [
      'Cloud and AI/ML Innovation: Designed generative AI-driven resume website using AWS serverless architecture, with Amazon Lex, SageMaker, API Gateway, and DynamoDB integration with React, Redux, and Material UI',
      "Technical Lead on Strategic Projects: Built a proof-of-concept mapping API mobile app using JavaScript and CSS in a Cordova wrapper; executed additional high-profile projects for iSoftStone's corporate presence and workflow automation for diverse client needs.",
      'System Architecture: Delivered design and specifications for RAG augmented chatbot using Amazon Lex, SageMaker, Kendra, Lambda, and DynamoDB',
      'Long-Term Client Partnership: Provided ongoing support, maintenance, and modernizations, including a major WordPress migration for a high-traffic client site, ensuring accessibility, ease of updates, and optimized performance.',
      'Delivered High-Impact Solutions: Developed and implemented full-stack solutions for complex projects, including a custom e-commerce platform with shopping cart and fulfillment system using C# & .NET',
    ],
    image: '/assets/cp-logo-icon.png',
    startDate: '11/01/2021',
    endDate: 'Present',
  },
  {
    id: 'EXP-007',
    company: 'Amazon',
    jobTitle: 'Senior Software Engineering Manager - One Medical',
    jobTagline:
      'Managed two data interoperability teams. Responsible for all data consumption, storage, and availability across Amazon One Medical and with external partners and vendors. Amazon acquired One Medical in Feb 2023.',
    jobLocation: 'Remote',
    jobDescription: [
      'Established Data & Compliance Strategy: Directed interoperability teams to ensure all data consumption and storage systems were audit-ready and ONC Certified EHR Technology (CEHRT) compliant, securing Medicare and Medicaid funding streams and supporting acquisition goals.',
      'Reorganized and Expanded Team Structure: Reorganized a 15-person team into two specialized units, introducing cross-functional processes and increasing productivity by 25% through a transition to Scrum methodologies.',
      'Spearheaded Acquisition & Security Audits: Conducted comprehensive security and compliance audits of data assets, collaborating with senior leadership to resolve findings swiftly and align with Amazon standards for acquisition readiness.',
      'Led Innovation in Integration Efficiency: Created the Interoperability Switchboard, reducing third-party integration time by over 50% and streamlining data onboarding processes to enhance system interoperability.',
      'Developed Leadership within Teams: Mentored two engineers into management roles, fostering a culture of growth and enabling focus on acquisition and merger-related initiatives.',
    ],
    image: '/assets/one-medical-logo-icon.png',
    startDate: '02/01/2022',
    endDate: '09/30/2023',
  },
  {
    id: 'EXP-006',
    company: 'Texas Association of Community Health Centers (TACHC)',
    jobTitle: 'Principal Software Engineer & Manager',
    jobTagline:
      'Directed the strategic vision and implementation of all technology initiatives, overseeing digital transformation, compliance, and operational continuity for a leading health network serving population health needs.',
    jobLocation: 'Austin, TX',
    jobDescription: [
      'Strategic Technology Leadership: Established organization-wide policies, IT processes, and security protocols.',
      'Product & Data Strategy Oversight: Served as Product Owner for the Health Center Controlled Network (HCCN), leading design of AI/ML-powered population health platform, improving patient outcomes via proactive care.',
      'Operational Continuity & Remote Enablement: Spearheaded continuity planning and implemented VOIP and conferencing technologies pre-COVID, seamlessly transitioning from on-site to fully remote operations.',
      'Fiscal Responsibility: Managed and optimized a multi-year technology budget, achieving procurement savings and reallocating resources to enhance system scalability and support.',
      'Industry Leadership: Actively contributed to the national HCCN Task Force and Data Strategy Committee, driving cross-organizational strategies for population health analytics and data governance.',
    ],
    image: '/assets/tachc-logo-icon.jpg',
    startDate: '04/08/2019',
    endDate: '11/30/2021',
  },
  {
    id: 'EXP-005',
    company: 'Q2 eBanking',
    jobTitle: 'Staff Software Engineer - SMART',
    jobTagline:
      "End-to-end technical Lead for the development of a greenfield marketing platform for Q2's SaaS banking solution. Coordinated cross-functional efforts to ensure the successful delivery of projects",
    jobDescription: [
      "Technical Leadership on Strategic Initiatives: Led the architecture and development of a machine learning-powered marketing platform, optimizing audience targeting and engagement for Q2's SaaS banking clients.",
      'High-Impact Product Development: Delivered and enhanced critical features for web and mobile banking applications, serving ~18 million users, supporting secure and seamless financial transactions.',
      'Pipeline & Deployment Innovation: Designed and implemented a CI/CD pipeline, accelerating feature delivery and reducing deployment time, facilitating a faster go-to-market strategy for new functionalities.',
      'Performance & Security Enhancements: Spearheaded integration of AppDynamics and Robot Framework to monitor and optimize app performance and security, ensuring reliable, compliant service delivery.',
      'Team Leadership & Agile Coaching: Acted as Scrum Master, leading a team of 14 software engineers, 2 QA engineers, and a product owner, fostering Agile practices to improve collaboration and productivity.',
      "Design System Development: Built and standardized a reusable design library adopted across Q2's suite of back-office tools, streamlining UI consistency and accelerating development cycles.",
    ],
    jobLocation: 'Austin, TX',
    image: '/assets/q2-logo-icon.png',
    startDate: '09/01/2015',
    endDate: '04/07/2019',
  },
  {
    id: 'EXP-004',
    company: 'Q2 eBanking',
    jobTitle: 'Senior Software Engineer',
    jobTagline:
      "Major projects specialist tackling high-impact initiatives to modernize and optimize Q2's web and mobile banking applications.",
    jobLocation: 'Austin, TX',
    jobDescription: [
      'High-Impact Product Development: Developed and maintained web and mobile banking applications, serving ~18 million users',
      'Application Modernization: Led the migration of all Q2 applications from ES5 to ES6, improving performance and maintainability',
      'New Technology Adoption: Worked on tiger team to transition from JavaScript to TypeScript; improving code quality and reducing bugs; modified existing tooling, transitioned strategic existing products, and developed best practices and policies.',
    ],
    image: '/assets/q2-logo-icon.png',
    startDate: '09/08/2014',
    endDate: '08/31/2015',
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
    startDate: '07/01/2012',
    endDate: '09/07/2014',
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
    startDate: '04/01/2009',
    endDate: '06/30/2012',
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
    startDate: '04/01/2008',
    endDate: '03/31/2009',
  },
  {
    id: 'EXP-000',
    company: 'RivalGraphics',
    jobTitle: 'Principal Project Manager & Software Engineer',
    jobTagline:
      'Managed and developed web and desktop applications for clients in Portland, Oregon area. Co-founded RivalGraphics in 1998 with a graphic design colleague.',
    jobLocation: 'Portland, OR',
    jobDescription: [
      'Web Application Development: Developed web sites and e-commerce solutions using ASP.NET, C#, and SQL Server',
      'Website Development: Developed web small to medium sized web sites using PHP, MySQL, JavaScript, and CSS',
      'Mobile Application Development: Built mobile shopping applications using Objective-C, SQLLite, Core Data, UIKit, and RESTful web services',
      'Project & Product Management: Managed projects and client relationships',
      'Company Leadership & Growth: Co-founded and grew RivalGraphics from 2 founders to 8 employees.',
    ],
    image: '/assets/rivalgraphics-logo-icon.gif',
    startDate: '06/01/1998',
    endDate: '03/31/2008',
  },
];
