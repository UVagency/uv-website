import chancacaDeliciosa from '../data/projects/chancaca-deliciosa.json';
import krispyKreme from '../data/projects/krispy-kreme.json';
import ballCorporation from '../data/projects/ball-corporation.json';
import heineken from '../data/projects/heineken.json';
import mattelBackToSchool from '../data/projects/mattel-back-to-school.json';

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
  videoUrl: string;
  image: string;
  date: string;
  slug: string;
  category: string;
  services: string[];
  channels: string[];
  content: string;
  results?: string[];
};

const projects: Project[] = [
  chancacaDeliciosa,
  krispyKreme,
  ballCorporation,
  heineken,
  mattelBackToSchool
];

export const useProjects = (): Project[] => {
  return projects;
};

export const useProject = (id: string | undefined): Project | undefined => {
  if (!id) return undefined;
  return projects.find(project => project.id === id);
};