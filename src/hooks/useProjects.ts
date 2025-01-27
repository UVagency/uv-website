import lorealUvDefender from '../data/projects/loreal-uv-defender.json';
import chancacaDeliciosa from '../data/projects/chancaca-deliciosa.json';
import krispyKreme from '../data/projects/krispy-kreme.json';
import ballCorporation from '../data/projects/ball-corporation.json';
import heineken from '../data/projects/heineken.json';
import mattel from '../data/projects/mattel.json';
import maybelline from '../data/projects/maybelline.json';
import jetsmart from '../data/projects/jetsmart.json';

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
  lorealUvDefender,
  chancacaDeliciosa,
  krispyKreme,
  ballCorporation,
  heineken,
  mattel,
  maybelline,
  jetsmart
].map(project => ({
  ...project,
  videoUrl: project.videoUrl?.replace(/:\/$/, '') // Remove trailing colon and slash if present
}));

export const useProjects = (): Project[] => {
  console.log('Fetching all projects:', projects);
  return projects;
};

export const useProject = (id: string | undefined): Project | undefined => {
  console.log('Fetching project with id:', id);
  if (!id) return undefined;
  const project = projects.find(project => project.id === id);
  console.log('Found project:', project);
  return project;
};