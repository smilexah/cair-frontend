export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

// Skip API calls during build if backend is not available
export const SKIP_API_CALLS = process.env.SKIP_API_CALLS === 'true';

console.log('[API Config] API_BASE_URL:', API_BASE_URL);
console.log('[API Config] NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
console.log('[API Config] SKIP_API_CALLS:', SKIP_API_CALLS);

export const API_ENDPOINTS = {
  TEAM_MEMBERS: '/team-members',
  PROJECTS: '/projects',
  PROJECT_BY_SLUG: (slug: string) => `/projects/slug/${slug}`,
  PROJECT_BY_ID: (id: number) => `/projects/${id}`,
  TEAM_MEMBER_BY_ID: (id: number) => `/team-members/${id}`,
} as const;

