import { axiosInstance } from '../config';
import type { ProjectDTO, PaginatedResponse, PaginationParams } from '../types';

export const projectsService = {
  async getAll(params?: PaginationParams): Promise<PaginatedResponse<ProjectDTO>> {
    const response = await axiosInstance.get<PaginatedResponse<ProjectDTO>>('/projects', {
      params: {
        page: params?.page ?? 0,
        size: params?.size ?? 10,
        sortBy: params?.sortBy ?? 'startDate',
        direction: params?.direction ?? 'DESC',
      },
    });
    return response.data;
  },

  async getBySlug(slug: string): Promise<ProjectDTO> {
    const response = await axiosInstance.get<ProjectDTO>(`/projects/slug/${slug}`);
    return response.data;
  },

  async getById(id: number): Promise<ProjectDTO> {
    const response = await axiosInstance.get<ProjectDTO>(`/projects/${id}`);
    return response.data;
  },
};

