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
    'I build Angular 10+ and MEAN stack applications backed by Node/Express services and MongoDB data models. Over 2+ years, I have delivered RBAC-heavy enterprise platforms, reduced timesheet errors by 50%, and shipped features with low onboarding risk.',
  primaryCta: {
    label: 'Contact Me',
    href: 'https://www.linkedin.com/in/vishakha3012',
  },
  secondaryCta: {
    label: 'Download Resume',
    href: 'Vishakha_Resume_2_March.pdf',
  },
  profileImage: {
    src: 'assets/images/profile.jpg',
    alt: 'Vishakha, Angular engineer focused on enterprise frontend systems.',
    width: 720,
    height: 720,
    caption: 'Available for Angular and frontend engineering roles in product teams.',
  },
};

export const credibilityMetrics: CredibilityMetric[] = [
  { value: '2+ yrs', label: 'Professional Angular experience', proof: 'Production delivery on enterprise web platforms' },
  { value: '50%', label: 'Timesheet discrepancy reduction', proof: 'Improved PMT validation and UI workflows' },
  { value: '3', label: 'Enterprise projects delivered', proof: 'Authentic Drilling, PMT, and AppsRhino product platform' },
  { value: '9.14', label: 'B.Tech CSE SGPA', proof: 'Lyallpur Khalsa College of Engineering (July 2024)' },
];

export const trustSignals: TrustSignal[] = [
  {
    title: 'Role-based access and security',
    detail: 'Implemented frontend and backend RBAC using Angular guards/interceptors and Node.js middleware.',
  },
  {
    title: 'Testing and stability',
    detail: 'Designed and executed unit and integration testing for critical Node.js APIs and core workflows.',
  },
  {
    title: 'Cross-functional delivery',
    detail: 'Worked closely with frontend, backend, product, and QA teams for high-quality feature releases.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    items: ['Angular (10+)', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'MEAN and API Development',
    items: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'API integration'],
  },
  {
    title: 'Architecture and Quality',
    items: ['Lazy loading', 'Shared modules', 'Service providers', 'Unit testing', 'Integration testing'],
  },
  {
    title: 'Tooling and Collaboration',
    items: ['Angular CLI', 'Docker (basic)', 'AWS (basic)', 'Git/GitHub/GitLab', 'NPM'],
  },
];

export const meanCapabilities: MeanCapability[] = [
  {
    title: 'Full-stack feature delivery',
    detail: 'Delivered end-to-end Angular + Node.js/Express + MongoDB modules for operations and product commerce workflows.',
    tools: ['Angular', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Scalable backend and workflow automation',
    detail: 'Built API-driven product and order workflows, optimized complex MongoDB queries, and supported modular microservice communication.',
    tools: ['REST APIs', 'MongoDB', 'Microservices communication'],
  },
  {
    title: 'Deployment and real-time readiness',
    detail: 'Containerized services with Docker, supported AWS cloud setup, and integrated Socket.io for real-time collaboration features.',
    tools: ['Docker', 'AWS', 'Socket.io'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    name: 'Authentic Drilling (Organisation Management Tool)',
    industry: 'Operations Management',
    problem:
      'Teams needed a single platform for organization workflows, secure access, and reliable communication.',
    action:
      'Led full-stack development with Angular frontend and Node.js/Express + MongoDB backend, implemented RBAC (guards/interceptors/middleware), and deployed with Docker + AWS while adding Socket.io-based real-time chat.',
    result:
      'Delivered a scalable operations platform with secure role-aware access, modular services, and improved team coordination.',
    stack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Docker', 'AWS'],
  },
  {
    name: 'Project Management Tool',
    industry: 'Delivery Operations',
    problem:
      'Timesheet, task, and timeline tracking had discrepancies and limited visibility across teams.',
    action:
      'Enhanced an internal Angular PMT, improved input validation and UX, and built interactive task/document management modules with reusable components and robust state handling.',
    result:
      'Reduced timesheet discrepancies by 50%, improved task traceability, and increased planning visibility.',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Tailwind'],
  },
  {
    name: 'AppsRhino - Product Development',
    industry: 'Digital Commerce',
    problem:
      'Built a scalable Angular-based e-commerce product platform with product catalog, cart, checkout modules, and API-driven architecture using Node.js and Express.js.',
    action:
      'Implemented RESTful services, order lifecycle management, lazy loading, performance optimization, and responsive UI design for high-traffic users.',
    result:
      'Supported production deployment, CI/CD pipelines, build optimization, performance monitoring, and post-release feature enhancements, ensuring seamless user experience, scalability, and reliable digital commerce delivery.',
    stack: ['Angular', 'Node.js', 'Express.js', 'REST APIs', 'CI/CD', 'Performance Optimization'],
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
  title: 'Angular engineer focused on scalable, maintainable product delivery',
  paragraphs: [
    'I have 2+ years of experience building scalable Angular applications and practical MEAN stack workflows for enterprise use cases.',
    'At Relinns Technologies, I have delivered operations, project management, and AppsRhino product platforms with strong emphasis on RBAC, API quality, and maintainable architecture.',
    'I completed my B.Tech in Computer Science and Engineering (SGPA 9.14), and hold certifications in NPTEL Python and AWS Academy Graduate.',
  ],
};

export const contactChannels: ContactChannel[] = [
  { label: 'Email', value: 'vishakha3019@gmail.com', href: 'mailto:vishakha3019@gmail.com' },
  { label: 'Phone', value: '+91 78886 21862', href: 'tel:+917888621862' },
  { label: 'Location', value: 'Punjab, India', href: 'https://maps.google.com/?q=Punjab,+India' },
  { label: 'LinkedIn', value: 'linkedin.com/in/vishakha3012', href: 'https://www.linkedin.com/in/vishakha3012' },
  { label: 'GitHub', value: 'github.com/vishakha3019', href: 'https://github.com/vishakha3019' },
];
