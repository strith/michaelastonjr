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
    id: 'EXP-009',
    company: 'IDR Embedded @ Texas Department of Transportation (TxDOT) (contract)',
    jobTitle: 'Sr. Software Engineer - GIS Applications',
    jobTagline: 'Provide expert software engineering, technology modernization, and technical guidance.',
    jobLocation: 'Hybrid (Remote/Austin, TX)',
    jobDescription: [
      'Build and enhance GIS applications: Using JavaScript, Vue, and Vuetify, build and enhance key features for mission-critical GIS applications, including roadway inventories for all roads in Texas.',
      'Establish, implement, and teach best practices: Reviewed current code practices and established a migration plan to current industry standards, including creating design and coding standards for CSS, JavaScript, and development patterns. Created a design library, including integrating Sass, creating and documenting UI patterns, creating key assets such as color palettes, mix-ins, and variables, and building components to be implemented easily across different GIS applications.',
      'Improve integration between front-end Vue applications with back-end Java services and APIs: Worked with backend Java engineers to establish a development process for enhanced or new backend functionality required to meet end-user needs.',
      'Manage major version migrations across multiple generations: Develop a plan and process to migrate from old unsupported versions to current LTS versions of Node (v10 - v22), Vue (v2 - v3), and Angular (JS - v20) applications. Ensure no interruption of service and feature development for mission-critical applications.',
    ],
    image: '/assets/txdot-logo.png',
    startDate: '12/09/2024',
    endDate: 'Present',
  },
  {
    id: 'EXP-008',
    company: 'Freelance',
    jobTitle: 'Software Architect & Engineer',
    jobTagline:
      'Provide critical engineering support for direct clients and a global solutions provider, filling JavaScript and Python skill gaps to get projects back on schedule and meet or exceed client expectations.',
    jobLocation: 'Remote',
    jobDescription: [
      'Built Scalable AI/ML Solutions: Designed and implemented generative AI-driven resume web application using AWS serverless architecture (API Gateway, Lambda, S3, SQS, SageMaker, DynamoDB) with an elegant user application (React, Redux, Material UI), enhancing candidate job alignment through tailored resume outputs.',
      'Rescued High-Impact Projects: Contracted for mission-critical projects with iSoftStone, including a proof-of-concept mapping mobile application and rescuing projects from time and quality challenges.',
      'Defined Advanced System Architectures: Designed a RAG-enhanced generative AI chatbot using Amazon CloudFront, Lex, Lambda, Kendra, SageMaker, and DynamoDB, optimizing user interactions with precise, contextually relevant responses; the client is currently implementing the design.',
      'Sustained Long-Term Client Success: Led multiple complex website and WordPress migrations for high-traffic sites, enhancing accessibility and performance, solidifying client trust and ongoing partnership.',
      'Engineered Full-Stack E-commerce Platform: Developed a robust e-commerce solution using Node, Express, React, Material UI, and Redux to implement shopping cart, inventory, and fulfillment systems, providing an effortless user experience for customers and company staff.',
    ],
    image: '/assets/cp-logo-icon.png',
    startDate: '11/01/2021',
    endDate: 'Present',
  },
  {
    id: 'EXP-007',
    company: 'Amazon One Medical',
    jobTitle: 'Senior Software Engineering Manager',
    jobTagline:
      'Managed two data interoperability teams. Responsible for all data consumption, storage, and availability across Amazon One Medical and with external partners and vendors. Amazon acquired One Medical in Feb 2023.',
    jobLocation: 'Remote',
    jobDescription: [
      'Led Development and Design of Key Systems: Managed the design and development of key systems, including a new FHIR API, built using Ruby on Rails, Python, React, Postgres, Terraform, and AWS (EC2, S3, Lambdas, etc.)',
      'Established Data & Compliance Strategy: Directed interoperability teams to ensure all data consumption and storage systems were audit-ready and ONC Certified EHR Technology (CEHRT) compliant, passing certification and securing Medicare and Medicaid funding streams and meeting Amazon acquisition goals.',
      'Increased Productivity by 25%: Reorganized a 15-person team into two specialized units with a clear division of responsibilities, improving cross-functional processes and workflows by transitioning to modified Scrum.',
      'Spearheaded Acquisition & Security Audits: Executed comprehensive security and compliance audits of data systems, efficiently resolving security and compliance findings to align with Amazon acquisition standards.',
      'Streamlined Integration Processes: Led design and implementation of the Interoperability Switchboard, a flexible integration platform that reduced third-party integration time by over 50%.',
      'Reduced Deployment Rollbacks by 30%: Fostered a culture of accountability through rigorous code reviews, pair programming, test-driven development, and a cross-functional root cause analysis led by the bug introducer.',
      'Fostered Leadership Development: Mentored two engineers into management roles, fostering a culture of growth and enabling the team to meet acquisition and merger objectives effectively.',
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
      'Ensured Operational Continuity: Spearheaded continuity planning and implemented VOIP and conferencing technologies pre-COVID, seamlessly transitioning from on-site to fully remote operations when needed.',
      'Optimized Technology Budget: Managed a multi-year technology budget, realizing procurement savings and reallocating resources to support system scalability, business continuity, and service capabilities.',
      'Influenced Industry Standards: Contributed to the national HCCN Task Force and Data Strategy Committee, advancing cross-organizational strategies for population health analytics and data governance.',
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
      "Delivered innovative solutions and team collaboration in building Q2's scalable marketing and fintech platforms, delivering services to millions of active users and supporting customer growth.",
    jobDescription: [
      'Drove Revenue Growth through Innovation: Led the frontend architecture and development of a Q2 SMART marketing platform, optimizing audience targeting and engagement for Q2’s SaaS banking clients.',
      'Supported Millions of Users with Scalable Solutions: Delivered and enhanced critical web and mobile banking application features, ensuring secure, seamless service for over 15 million users (Ember, Node, PostgreSQL).',
      'Accelerated Deployment Cycles: Built a CI/CD pipeline for our SaaS marketing platform, accelerating feature releases by facilitating zero-downtime deployments (using Git, Docker, Ansible, Nginx, Vault, and Fabric).',
      'Enhanced System Reliability: Integrated AppDynamics and Robot Framework to monitor performance and ensure compliant, high-quality service delivery across platforms.',
      'Standardized User Experience: Created a reusable design library, adopted across back-office tools, that streamlined UI consistency and accelerated development. Building components in Ember.js and CSS.',
      'Fostered High-Performing Teams: Scrum Master for a team of engineers, boosting collaboration & productivity through structured process while allowing adaptation for team dynamics.',
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
    jobTagline: 'Technical lead front-end engineer for USAA Auto Insurance acquisition workflow',
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
    jobTitle: 'Project Manager & Software Engineer',
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
