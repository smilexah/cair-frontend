import { projectsApi, type ProjectDTO } from '@/lib/api/client';

export interface Project {
  id: string;
  slug: string;
  title: {
    en: string;
    ru: string;
    kz: string;
  };
  shortDescription: {
    en: string;
    ru: string;
    kz: string;
  };
  fullDescription: {
    en: string;
    ru: string;
    kz: string;
  };
  image: string;
  tags: string[];
  status: 'active' | 'completed' | 'upcoming';
  startDate: string;
  endDate?: string;
  team: string[];
  objectives: {
    en: string[];
    ru: string[];
    kz: string[];
  };
  results?: {
    en: string[];
    ru: string[];
    kz: string[];
  };
}

/**
 * Convert API DTO to Project interface
 */
function mapDTOToProject(dto: ProjectDTO): Project {
  return {
    id: dto.id.toString(),
    slug: dto.slug,
    title: dto.title,
    shortDescription: dto.shortDescription,
    fullDescription: dto.fullDescription,
    image: dto.image || '/projects/KZH.svg',
    tags: dto.tags,
    status: dto.status,
    startDate: dto.startDate,
    endDate: dto.endDate || undefined,
    team: dto.team,
    objectives: {
      en: Array.isArray(dto.objectives.en) ? dto.objectives.en : [],
      ru: Array.isArray(dto.objectives.ru) ? dto.objectives.ru : [],
      kz: Array.isArray(dto.objectives.kz) ? dto.objectives.kz : [],
    },
    results: dto.results ? {
      en: Array.isArray(dto.results.en) ? dto.results.en : [],
      ru: Array.isArray(dto.results.ru) ? dto.results.ru : [],
      kz: Array.isArray(dto.results.kz) ? dto.results.kz : [],
    } : undefined,
  };
}

/**
 * Get all projects from API
 */
export async function getProjects(): Promise<Project[]> {
  console.log('[Projects] Fetching all projects from API...');
  try {
    const response = await projectsApi.getAll({ size: 100, sortBy: 'startDate', direction: 'DESC' });
    console.log('[Projects] Received projects:', response.content.length);
    return response.content.map(mapDTOToProject);
  } catch (error) {
    console.error('[Projects] Failed to fetch projects:', error);
    return [];
  }
}

/**
 * Get project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  console.log('[Projects] Fetching project by slug:', slug);
  try {
    const dto = await projectsApi.getBySlug(slug);
    console.log('[Projects] Received project:', dto.title.en);
    return mapDTOToProject(dto);
  } catch (error) {
    console.error(`[Projects] Failed to fetch project with slug ${slug}:`, error);
    return null;
  }
}


