export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string;
  created_at: string;
  updated_at: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'tools' | 'database';
  proficiency: number;
  icon?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}
