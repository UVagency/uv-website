import chancacaDeliciosa from '../data/projects/chancaca-deliciosa.json';
import krispyKreme from '../data/projects/krispy-kreme.json';
import ballCorporation from '../data/projects/ball-corporation.json';
import heineken from '../data/projects/heineken.json';
import mattel from '../data/projects/mattel.json';
import maybelline from '../data/projects/maybelline.json';

export type GalleryItem = {
  type: 'image' | 'video';
  url: string;
};

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
  gallery?: GalleryItem[];
};

const projects: Project[] = [
  chancacaDeliciosa,
  krispyKreme,
  ballCorporation,
  heineken,
  mattel,
  maybelline
];

export const useProjects = (): Project[] => {
  return projects;
};

export const useProject = (id: string | undefined): Project | undefined => {
  if (!id) return undefined;
  return projects.find(project => project.id === id);
};