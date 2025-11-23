import { API_BASE_URL, API_ENDPOINTS, SKIP_API_CALLS } from './config';

export interface PaginationParams {
  page?: number;
  size?: number;
  sortBy?: string;
  direction?: 'ASC' | 'DESC';
}

export interface PaginatedResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface MultilingualText {
  en: string;
  ru: string;
  kz: string;
}

export interface TeamMemberDTO {
  id: number;
  name: string;
  role: MultilingualText;
  bio: MultilingualText;
  image: string | null;
  expertise: string[];
  email: string | null;
  linkedin: string | null;
  github: string | null;
  scholar: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectDTO {
  id: number;
  slug: string;
  title: MultilingualText;
  shortDescription: MultilingualText;
  fullDescription: MultilingualText;
  image: string;
  tags: string[];
  status: 'active' | 'completed' | 'upcoming';
  startDate: string;
  endDate: string | null;
  team: string[];
  objectives: MultilingualText & { [key: string]: string[] };
  results: (MultilingualText & { [key: string]: string[] }) | null;
  createdAt: string;
  updatedAt: string;
}

/**
 * Generic fetch wrapper with error handling
 */
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  console.log(`[API] Fetching: ${url}`);

  // Skip API calls during build if configured
  if (SKIP_API_CALLS) {
    console.log(`[API] Skipping API call (SKIP_API_CALLS=true): ${url}`);
    throw new Error('API calls skipped during build');
  }

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
      // Enable caching for GET requests in production
      cache: options?.cache || (process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store'),
    });

    console.log(`[API] Response status: ${response.status} for ${url}`);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log(`[API] Success: ${url}`, data);
    return data;
  } catch (error) {
    console.error(`[API] Fetch error for ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Team Members API
 */
export const teamMembersApi = {
  /**
   * Get all team members with pagination
   */
  getAll: async (params?: PaginationParams): Promise<PaginatedResponse<TeamMemberDTO>> => {
    const queryParams = new URLSearchParams();
    if (params?.page !== undefined) queryParams.set('page', params.page.toString());
    if (params?.size !== undefined) queryParams.set('size', params.size.toString());
    if (params?.sortBy) queryParams.set('sortBy', params.sortBy);
    if (params?.direction) queryParams.set('direction', params.direction);

    const endpoint = `${API_ENDPOINTS.TEAM_MEMBERS}${queryParams.toString() ? `?${queryParams}` : ''}`;
    return apiFetch<PaginatedResponse<TeamMemberDTO>>(endpoint);
  },

  /**
   * Get team member by ID
   */
  getById: async (id: number): Promise<TeamMemberDTO> => {
    return apiFetch<TeamMemberDTO>(API_ENDPOINTS.TEAM_MEMBER_BY_ID(id));
  },
};

/**
 * Projects API
 */
export const projectsApi = {
  /**
   * Get all projects with pagination
   */
  getAll: async (params?: PaginationParams): Promise<PaginatedResponse<ProjectDTO>> => {
    const queryParams = new URLSearchParams();
    if (params?.page !== undefined) queryParams.set('page', params.page.toString());
    if (params?.size !== undefined) queryParams.set('size', params.size.toString());
    if (params?.sortBy) queryParams.set('sortBy', params.sortBy);
    if (params?.direction) queryParams.set('direction', params.direction);

    const endpoint = `${API_ENDPOINTS.PROJECTS}${queryParams.toString() ? `?${queryParams}` : ''}`;
    return apiFetch<PaginatedResponse<ProjectDTO>>(endpoint);
  },

  /**
   * Get project by ID
   */
  getById: async (id: number): Promise<ProjectDTO> => {
    return apiFetch<ProjectDTO>(API_ENDPOINTS.PROJECT_BY_ID(id));
  },

  /**
   * Get project by slug
   */
  getBySlug: async (slug: string): Promise<ProjectDTO> => {
    return apiFetch<ProjectDTO>(API_ENDPOINTS.PROJECT_BY_SLUG(slug));
  },
};

