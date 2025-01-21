import projectsData from '../data/projects.json';

export type Project = {
  id: string;
  featured: boolean;
  brand: string;
  accent: string;
  title: string;
  shortDescription: string;
  kpi1: string;
  kpi1Value: string;
  kpi2: string;
  kpi2Value: string;
  videoLink: string;
  videoUrl: string;
  image: string;
  date: string;
  slug: string;
  services: string[];
  channels: string[];
  content: string;
  category: string;
  results?: string[];
};

export const useProjects = (): Project[] => {
  return projectsData.projects;
};

export const useProject = (id: string | undefined): Project | undefined => {
  if (!id) return undefined;
  return projectsData.projects.find(project => project.id === id);
};