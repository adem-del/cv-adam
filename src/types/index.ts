export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface CvData {
  name: string;
  title: string;
  subtitle: string;
  about: string[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  languages: { language: string; level: string }[];
  contact: {
    email: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}
