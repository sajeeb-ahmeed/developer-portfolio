export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter?: string;
  email: string;
  website?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string; // "Present" allowed
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  details?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
  level: number; // 0-100, proficiency shown as a progress bar
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Service {
  title: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  summary: string;
  avatarUrl: string;
  aboutPhotoUrl: string;
  resumeUrl: string;
  available: boolean;
  social: SocialLinks;
  stats: Stat[];
  services: Service[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  certificates: Certificate[];
  awards: Award[];
  projects: Project[];
  testimonials: Testimonial[];
}

export interface GithubRepo {
  id: number;
  name: string;
  htmlUrl: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string;
  homepage: string | null;
  fork: boolean;
}
