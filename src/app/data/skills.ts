import type { Icon } from '@phosphor-icons/react';
import {
  CloudArrowUp as CloudArrowUpIcon,
  Database as DatabaseIcon,
  DesktopTower as DesktopTowerIcon,
  Gear as GearIcon,
  Graph as GraphIcon,
  HardDrives as HardDrivesIcon,
  ShieldCheck as ShieldCheckIcon,
  TestTube as TestTubeIcon,
} from '@phosphor-icons/react/dist/ssr';

export interface Skill {
  category: string;
  name: string;
  isCore?: boolean;
}

export interface Category {
  name: string;
  icon: Icon;
}

export const skillCategories: Category[] = [
  {
    name: 'Database',
    icon: DatabaseIcon,
  },
  {
    name: 'Server',
    icon: HardDrivesIcon,
  },
  {
    name: 'Client',
    icon: DesktopTowerIcon,
  },
  {
    name: 'Cloud & Infrastructure',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Process & Methodologies',
    icon: GearIcon,
  },
  {
    name: 'Security & Compliance',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Testing & Automation',
    icon: TestTubeIcon,
  },
  {
    name: 'AI/ML & Data',
    icon: GraphIcon,
  },
];

export const skills: Skill[] = [
  // Database
  { category: 'Database', name: 'Amazon DynamoDB' },
  { category: 'Database', name: 'Amazon RDS' },
  { category: 'Database', name: 'Cassandra' },
  // { category: 'Database', name: 'Elasticsearch' },
  // { category: 'Database', name: 'Firebase' },
  { category: 'Database', name: 'GraphQL', isCore: true },
  { category: 'Database', name: 'MongoDB', isCore: true },
  { category: 'Database', name: 'MongoDB Atlas' },
  { category: 'Database', name: 'MS SQL Server' },
  { category: 'Database', name: 'MySQL' },
  { category: 'Database', name: 'NoSQL' },
  { category: 'Database', name: 'PostgreSQL', isCore: true },
  { category: 'Database', name: 'Redis' },
  { category: 'Database', name: 'SQL', isCore: true },
  { category: 'Database', name: 'SQLite' },

  // SERVER
  { category: 'Server', name: 'JavaScript', isCore: true },
  { category: 'Server', name: 'TypeScript', isCore: true },
  { category: 'Server', name: 'Amazon API Gateway *', isCore: true },
  { category: 'Server', name: 'Amazon SQS' },
  { category: 'Server', name: 'Amazon SNS' },
  { category: 'Server', name: 'Apollo Server', isCore: true },
  // { category: 'Server', name: 'C#' },
  // { category: 'Server', name: 'Django' },
  { category: 'Server', name: 'Express' },
  // { category: 'Server', name: 'Flask' },
  // { category: 'Server', name: 'hapi' },
  { category: 'Server', name: 'Java' },
  // { category: 'Server', name: 'NestJS' },
  // { category: 'Server', name: 'Next.js' },
  { category: 'Server', name: 'Node.js', isCore: true },
  { category: 'Server', name: 'PHP' },
  { category: 'Server', name: 'Python', isCore: true },
  { category: 'Server', name: 'RESTful APIs', isCore: true },
  { category: 'Server', name: 'Ruby on Rails' },
  { category: 'Server', name: 'WebSockets' },
  { category: 'Server', name: 'WordPress' },

  // CLIENT
  { category: 'Client', name: 'JavaScript', isCore: true },
  { category: 'Client', name: 'TypeScript', isCore: true },
  { category: 'Client', name: 'Angular' },
  // { category: 'Client', name: 'Ant Design' },
  { category: 'Client', name: 'Apollo Client', isCore: true },
  // { category: 'Client', name: 'Bootstrap' },
  { category: 'Client', name: 'CSS', isCore: true },
  { category: 'Client', name: 'D3.js' },
  // { category: 'Client', name: 'Ember.js' },
  // { category: 'Client', name: 'GraphQL', isCore: true },
  { category: 'Client', name: 'HTML', isCore: true },
  // { category: 'Client', name: 'Major version and library conversions & upgrades', isCore: true },
  { category: 'Client', name: 'Modernization', isCore: true },
  { category: 'Client', name: 'Material UI', isCore: true },
  // { category: 'Client', name: 'Next.js' },
  // { category: 'Client', name: 'Progressive Web Apps (PWAs)' },
  { category: 'Client', name: 'React', isCore: true },
  { category: 'Client', name: 'React Native' },
  { category: 'Client', name: 'Redux' },
  { category: 'Client', name: 'Responsive Design', isCore: true },
  // { category: 'Client', name: 'Sass' },
  // { category: 'Client', name: 'Single Page Applications (SPAs)', isCore: true },
  // { category: 'Client', name: 'Tailwind CSS' },
  { category: 'Client', name: 'Vue.js', isCore: true },
  { category: 'Client', name: 'Vuetify' },
  { category: 'Client', name: 'Web Accessibility' },
  { category: 'Client', name: 'WebSockets' },

  // Cloud & Infrastructure
  { category: 'Cloud & Infrastructure', name: 'Amazon CloudFormation' },
  { category: 'Cloud & Infrastructure', name: 'Amazon CloudFront' },
  { category: 'Cloud & Infrastructure', name: 'Amazon EC2', isCore: true },
  { category: 'Cloud & Infrastructure', name: 'Amazon Lambda', isCore: true },
  { category: 'Cloud & Infrastructure', name: 'Amazon S3', isCore: true },
  { category: 'Cloud & Infrastructure', name: 'Amazon VPC' },
  { category: 'Cloud & Infrastructure', name: 'Ansible' },
  // { category: 'Cloud & Infrastructure', name: 'AppDynamics' },
  // { category: 'Cloud & Infrastructure', name: 'CircleCI' },
  { category: 'Cloud & Infrastructure', name: 'Docker', isCore: true },
  { category: 'Cloud & Infrastructure', name: 'GitHub', isCore: true },
  // { category: 'Cloud & Infrastructure', name: 'Grafana' },
  // { category: 'Cloud & Infrastructure', name: 'Heroku' },
  { category: 'Cloud & Infrastructure', name: 'Jenkins' },
  { category: 'Cloud & Infrastructure', name: 'Kubernetes' },
  { category: 'Cloud & Infrastructure', name: 'Terraform' },

  // Process & Methodologies
  { category: 'Process & Methodologies', name: 'Agile Methodologies', isCore: true },
  { category: 'Process & Methodologies', name: 'Continuous Integration (CI)', isCore: true },
  { category: 'Process & Methodologies', name: 'Continuous Deployment (CD)', isCore: true },
  // { category: 'Process & Methodologies', name: 'GitHub', isCore: true },
  { category: 'Process & Methodologies', name: 'Jira', isCore: true },
  { category: 'Process & Methodologies', name: 'Kanban' },
  { category: 'Process & Methodologies', name: 'PagerDuty' },
  { category: 'Process & Methodologies', name: 'Project Management', isCore: true },
  { category: 'Process & Methodologies', name: 'Quality Assurance (QA)' },
  { category: 'Process & Methodologies', name: 'Rapid Prototyping' },
  { category: 'Process & Methodologies', name: 'Risk Management', isCore: true },
  { category: 'Process & Methodologies', name: 'Requirements Analysis' },
  { category: 'Process & Methodologies', name: 'Roadmapping', isCore: true },
  { category: 'Process & Methodologies', name: 'Scrum', isCore: true },
  // { category: 'Process & Methodologies', name: 'Shape Up' },
  { category: 'Process & Methodologies', name: 'Software Development Life Cycle (SDLC)', isCore: true },

  // Security & Compliance
  { category: 'Security & Compliance', name: 'Amazon Cognito' },
  { category: 'Security & Compliance', name: 'Amazon IAM', isCore: true },
  { category: 'Security & Compliance', name: 'CORS' },
  { category: 'Security & Compliance', name: 'HIPAA', isCore: true },
  { category: 'Security & Compliance', name: 'JWT', isCore: true },
  { category: 'Security & Compliance', name: 'OAuth2', isCore: true },
  { category: 'Security & Compliance', name: 'SAML' },
  { category: 'Security & Compliance', name: 'Vault' },

  // Testing & Automation
  { category: 'Testing & Automation', name: 'Amazon CloudWatch', isCore: true },
  { category: 'Testing & Automation', name: 'Fabric' },
  { category: 'Testing & Automation', name: 'Jasmine' },
  { category: 'Testing & Automation', name: 'Jenkins' },
  { category: 'Testing & Automation', name: 'Jest', isCore: true },
  { category: 'Testing & Automation', name: 'JUnit' },
  { category: 'Testing & Automation', name: 'Load Testing' },
  { category: 'Testing & Automation', name: 'Mocha' },
  { category: 'Testing & Automation', name: 'Postman', isCore: true },
  { category: 'Testing & Automation', name: 'Regression Testing' },
  { category: 'Testing & Automation', name: 'Robot' },
  { category: 'Testing & Automation', name: 'Selenium' },
  { category: 'Testing & Automation', name: 'Swagger', isCore: true },
  { category: 'Testing & Automation', name: 'Test-Driven Development (TDD)' },
  { category: 'Testing & Automation', name: 'Unit Testing', isCore: true },

  // Data & AI/ML
  {
    category: 'AI/ML & Data',
    name: 'Generative AI Models (GPT-4, Amazon Titan, Anthropic Claude, Mistral AI) *',
    isCore: true,
  },
  { category: 'AI/ML & Data', name: 'Amazon SageMaker' },
  { category: 'AI/ML & Data', name: 'Amazon Bedrock *', isCore: true },
  { category: 'AI/ML & Data', name: 'Amazon Lex' },
  { category: 'AI/ML & Data', name: 'Amazon Kendra' },
  { category: 'AI/ML & Data', name: 'Anaconda', isCore: true },
  { category: 'AI/ML & Data', name: 'ArcGIS' },
  { category: 'AI/ML & Data', name: 'Consolidated Clinical Document Architecture (CCDA)' },
  { category: 'AI/ML & Data', name: 'Continuity of Care Documents (CCD)' },
  { category: 'AI/ML & Data', name: 'HL7 FHIR' },
  { category: 'AI/ML & Data', name: 'Jupyter Notebooks', isCore: true },
  { category: 'AI/ML & Data', name: 'Swift MT Messages' },
  { category: 'AI/ML & Data', name: 'Tableau' },
];
