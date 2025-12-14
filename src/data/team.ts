import { teamService, type TeamMemberDTO } from '@/lib/api';

export interface TeamMember {
  id: string;
  name: string;
  role: {
    en: string;
    ru: string;
    kz: string;
  };
  bio: {
    en: string;
    ru: string;
    kz: string;
  };
  image?: string;
  expertise: string[];
  email?: string;
  linkedin?: string;
  github?: string;
  scholar?: string;
}

/**
 * Convert API DTO to TeamMember interface
 */
function mapDTOToTeamMember(dto: TeamMemberDTO): TeamMember {
  return {
    id: dto.id.toString(),
    name: dto.name,
    role: dto.role,
    bio: dto.bio,
    image: dto.image || '/default-person.svg',
    expertise: dto.expertise,
    email: dto.email || undefined,
    linkedin: dto.linkedin || undefined,
    github: dto.github || undefined,
    scholar: dto.scholar || undefined,
  };
}

/**
 * Get all team members from API
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await teamService.getAll({ size: 100, sortBy: 'id', direction: 'ASC' });
    return response.content.map(mapDTOToTeamMember);
  } catch (error) {
    console.error('[Team] Failed to fetch team members:', error);
    return [];
  }
}

/**
 * Get team member by ID
 */
export async function getTeamMemberById(id: number): Promise<TeamMember | null> {
  try {
    const dto = await teamService.getById(id);
    return mapDTOToTeamMember(dto);
  } catch (error) {
    console.error(`Failed to fetch team member with id ${id}:`, error);
    return null;
  }
}

