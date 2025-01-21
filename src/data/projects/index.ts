import { Project } from '../types/project';
import { saborDeBarrio } from './sabor-de-barrio';
import { krispyKreme } from './krispy-kreme';
import { ballCorporation } from './ball-corporation';
import { heineken } from './heineken';

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