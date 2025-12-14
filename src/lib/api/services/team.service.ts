import { axiosInstance } from '../config';
import type { TeamMemberDTO, PaginatedResponse, PaginationParams } from '../types';

export const teamService = {
  async getAll(params?: PaginationParams): Promise<TeamMemberDTO[]> {
    try {
      const response = await axiosInstance.get<PaginatedResponse<TeamMemberDTO>>('/team-members', {
        params: {
          page: params?.page ?? 0,
          size: params?.size ?? 10,
          sortBy: params?.sortBy ?? 'id',
          direction: params?.direction ?? 'ASC',
        },
      });
      return response.data.content;
    } catch {
      return [];
    }
  },

  async getById(id: number): Promise<TeamMemberDTO | null> {
    try {
      const response = await axiosInstance.get<TeamMemberDTO>(`/team-members/${id}`);
      return response.data;
    } catch {
      return null;
    }
  },
};

