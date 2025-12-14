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

