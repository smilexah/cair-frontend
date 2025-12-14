import { axiosInstance } from '../config';
import type { TeamMemberDTO, PaginatedResponse, PaginationParams } from '../types';

export const teamService = {
  async getAll(params?: PaginationParams): Promise<PaginatedResponse<TeamMemberDTO>> {
    const response = await axiosInstance.get<PaginatedResponse<TeamMemberDTO>>('/team-members', {
      params: {
        page: params?.page ?? 0,
        size: params?.size ?? 10,
        sortBy: params?.sortBy ?? 'id',
        direction: params?.direction ?? 'ASC',
      },
    });
    return response.data;
  },

  async getById(id: number): Promise<TeamMemberDTO> {
    const response = await axiosInstance.get<TeamMemberDTO>(`/team-members/${id}`);
    return response.data;
  },
};

