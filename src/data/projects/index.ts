import { Project } from './types/project';
import { saborDeBarrio } from './projects/sabor-de-barrio';
import { krispyKreme } from './projects/krispy-kreme';
import { ballCorporation } from './projects/ball-corporation';
import { heineken } from './projects/heineken';

export type { Project };

export const projects: Project[] = [
  saborDeBarrio,
  krispyKreme,
  ballCorporation,
  heineken,
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};