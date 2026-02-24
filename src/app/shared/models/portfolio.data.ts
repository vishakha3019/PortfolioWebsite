import type {
  AboutContent,
  ArchitecturePrinciple,
  CaseStudy,
  ContactChannel,
  CredibilityMetric,
  HeroContent,
  MeanCapability,
  NavigationItem,
  SkillCategory,
  TrustSignal,
} from './portfolio.models';

export const navigationItems: NavigationItem[] = [
  { id: 'credibility', label: 'Credibility', route: '/' },
  { id: 'stack', label: 'Tech Stack', route: '/' },
  { id: 'mean-stack', label: 'MEAN Skills', route: '/' },
  { id: 'case-studies', label: 'Case Studies', route: '/' },
  { id: 'architecture', label: 'Architecture', route: '/' },
  { id: 'about', label: 'About', route: '/' },
  { id: 'contact', label: 'Contact', route: '/' },
];

export const hero: HeroContent = {
  headline: 'Angular-first MEAN stack engineer for production products',
  subheadline: 'Delivering reliable UIs, API workflows, and maintainable release quality',
  summary:
    'I build Angular 20 applications backed by Node/Express services and MongoDB data models. Over 2+ years, I have delivered RBAC-heavy enterprise platforms, reduced timesheet errors by 50%, and shipped features with low onboarding risk.',
  primaryCta: {
    label: 'Schedule Interview',
    href: 'mailto:vishakha3019@gmail.com?subject=Interview%20Discussion',
  },
  secondaryCta: {
    label: 'Download Resume',
    href: '/Vishakha_Resume.pdf',
  },
  profileImage: {
    src: '/assets/images/profile.jpg',
    alt: 'Vishakha, Angular engineer focused on enterprise frontend systems.',
    width: 720,
    height: 720,
    caption: 'Available for Angular and frontend engineering roles in product teams.',
  },
};

export const credibilityMetrics: CredibilityMetric[] = [
  { value: '2+ yrs', label: 'Enterprise delivery', proof: 'Angular + Node applications in production' },
  { value: '50%', label: 'Timesheet error reduction', proof: 'Validation + UX redesign in PM workflows' },
  { value: '3', label: 'Business platforms shipped', proof: 'Operations, PMT, and ATS systems' },
  { value: '9.14', label: 'CS engineering SGPA', proof: 'Strong fundamentals + implementation rigor' },
];

export const trustSignals: TrustSignal[] = [
  {
    title: 'Production discipline',
    detail: 'Strict TypeScript, reusable architecture, and release-focused testing practices.',
  },
  {
    title: 'Security and access control',
    detail: 'Role-based authorization and endpoint-level policy enforcement in multi-role systems.',
  },
  {
    title: 'Low onboarding risk',
    detail: 'Structured documentation, clear component boundaries, and strong collaboration with PM/QA.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Angular and Frontend Engineering',
    items: ['Angular 20+', 'Standalone Components', 'Signals', 'RxJS', 'Tailwind + SCSS layering'],
  },
  {
    title: 'Backend and Integrations',
    items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Socket.io real-time'],
  },
  {
    title: 'Architecture and Quality',
    items: ['Feature-based structure', 'Lazy-loaded routes', 'RBAC', 'Unit/Integration testing', 'Performance budgets'],
  },
  {
    title: 'Deployment and Delivery',
    items: ['Angular CLI', 'Docker', 'AWS basics', 'GitLab/GitHub workflows', 'Release monitoring'],
  },
];

export const meanCapabilities: MeanCapability[] = [
  {
    title: 'Backend API delivery',
    detail: 'Develop and integrate Express services with typed request/response handling and role-based access checks.',
    tools: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'Database and domain modeling',
    detail: 'Use MongoDB schemas and query patterns to support high-volume business workflows and cleaner data ownership.',
    tools: ['MongoDB', 'Mongoose', 'Aggregation basics'],
  },
  {
    title: 'Deployment readiness',
    detail: 'Package services with Docker and support cloud handoffs with AWS basics for reliable release workflows.',
    tools: ['Docker', 'AWS basics', 'CI handoff'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    name: 'Authentic Drilling Organization Platform',
    industry: 'Operations Management',
    problem:
      'Operations teams needed a single, secure interface for crew coordination, access control, and communication at scale.',
    action:
      'Built MEAN-based modules with Angular guards, backend RBAC middleware, and containerized deployment paths using Docker + AWS.',
    result:
      'Delivered a stable operations system with role-safe access and faster internal coordination across teams.',
    stack: ['Angular', 'Node.js', 'MongoDB', 'Socket.io', 'Docker', 'AWS'],
  },
  {
    name: 'Internal Project Management Tool',
    industry: 'Delivery Operations',
    problem:
      'Timesheet and task reporting had frequent inconsistencies, causing reconciliation overhead for managers.',
    action:
      'Refactored validation and UX flows, introduced reusable task/document components, and improved assignment/state handling.',
    result:
      'Reduced timesheet discrepancies by 50% and improved planning visibility for project stakeholders.',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Tailwind'],
  },
  {
    name: 'ATS Workflow Automation Portal',
    industry: 'HR and Recruitment',
    problem:
      'High-volume hiring events relied on manual follow-ups and fragmented candidate tracking.',
    action:
      'Implemented workflow automation from application intake to onboarding with role-aware dashboards and forms.',
    result:
      'Increased recruiter throughput and removed spreadsheet-driven coordination bottlenecks.',
    stack: ['Angular', 'Node.js', 'Express', 'MongoDB'],
  },
];

export const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    title: 'Feature isolation first',
    detail: 'Route-level lazy loading and standalone components keep code ownership clear and bundles controlled.',
  },
  {
    title: 'Data contracts before UI glue',
    detail: 'Typed interfaces and structured services prevent accidental API drift and reduce regression risk.',
  },
  {
    title: 'Operational safety over speed theater',
    detail: 'Validation, RBAC, and release checks are treated as mandatory architecture layers, not optional polish.',
  },
];

export const aboutContent: AboutContent = {
  title: 'Structured engineer with product-context awareness',
  paragraphs: [
    'My work style is systematic: understand business risk, map dependencies, then implement with predictable component/service boundaries.',
    'I collaborate closely with designers, PMs, and QA to ensure features are usable, secure, and maintainable after handoff.',
    'I am currently focused on Angular architecture quality, frontend performance, and building systems that scale without codebase entropy.',
  ],
};

export const contactChannels: ContactChannel[] = [
  { label: 'Email', value: 'vishakha3019@gmail.com', href: 'mailto:vishakha3019@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/vishakha3019', href: 'https://www.linkedin.com/in/vishakha3019' },
  { label: 'GitHub', value: 'github.com/vishakhadev', href: 'https://github.com/vishakhadev' },
];
