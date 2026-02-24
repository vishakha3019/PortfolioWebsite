export type NavigationItem = {
  id: string;
  label: string;
  route: string;
};

export type HeroContent = {
  headline: string;
  subheadline: string;
  summary: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  profileImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
};

export type CredibilityMetric = {
  value: string;
  label: string;
  proof: string;
};

export type TrustSignal = {
  title: string;
  detail: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type MeanCapability = {
  title: string;
  detail: string;
  tools: string[];
};

export type CaseStudy = {
  name: string;
  industry: string;
  problem: string;
  action: string;
  result: string;
  stack: string[];
};

export type ArchitecturePrinciple = {
  title: string;
  detail: string;
};

export type AboutContent = {
  title: string;
  paragraphs: string[];
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};
