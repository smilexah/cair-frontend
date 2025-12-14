import { axiosInstance } from '../config';
import type { ProjectDTO, PaginatedResponse, PaginationParams } from '../types';

export const projectsService = {
  async getAll(params?: PaginationParams): Promise<ProjectDTO[]> {
    try {
      const response = await axiosInstance.get<PaginatedResponse<ProjectDTO>>('/projects', {
        params: {
          page: params?.page ?? 0,
          size: params?.size ?? 10,
          sortBy: params?.sortBy ?? 'startDate',
          direction: params?.direction ?? 'DESC',
        },
      });
      return response.data.content;
    } catch {
      return [];
    }
  },

  async getBySlug(slug: string): Promise<ProjectDTO | null> {
    try {
      const response = await axiosInstance.get<ProjectDTO>(`/projects/slug/${slug}`);
      return response.data;
    } catch {
      return null;
    }
  },

  async getById(id: number): Promise<ProjectDTO | null> {
    try {
      const response = await axiosInstance.get<ProjectDTO>(`/projects/${id}`);
      return response.data;
    } catch {
      return null;
    }
  },
};

