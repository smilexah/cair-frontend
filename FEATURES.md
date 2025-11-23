# CAIR Landing Page - New Features Documentation

## Overview

This document describes the newly implemented features for the CAIR (Center for AI Research) landing page.

## Features Implemented

### 1. Dynamic Projects Page (`/projects`)

- **Route**: `/[locale]/projects`
- **Features**:
  - Displays all research projects with cards
  - Shows project status (Active, Completed, Upcoming)
  - Project tags and metadata
  - Responsive grid layout
  - Internationalization support (EN, RU, KZ)
  - SEO optimized with meta tags and OpenGraph

### 2. Project Detail Pages (`/projects/[slug]`)

- **Route**: `/[locale]/projects/[slug]`
- **Example**: `/en/projects/kzh`
- **Features**:
  - Detailed project information
  - Project overview and full description
  - Objectives list
  - Results and achievements
  - Project team information
  - Timeline information (start/end dates)
  - SEO optimized with dynamic meta tags
  - Static generation for all projects

### 3. Team Page (`/team`)

- **Route**: `/[locale]/team`
- **Features**:
  - Team member profiles with avatars
  - Role and bio information
  - Expertise tags
  - Contact information
  - Responsive card layout
  - Internationalization support
  - SEO optimized

### 4. Mock Data

#### Projects Data (`src/data/projects.ts`)
- KZH project with full details
- Multilingual content (EN, RU, KZ)
- Project metadata (tags, status, dates)
- Team information
- Objectives and results

#### Team Data (`src/data/team.ts`)
- 6 team members with complete profiles
- Roles and responsibilities
- Expertise areas
- Contact information
- Multilingual bios

### 5. SEO Implementation

#### Root Layout (`src/app/layout.tsx`)
- Default metadata configuration
- OpenGraph tags
- Twitter Card support
- Robots configuration
- Google Site Verification support
- Keywords and author information

#### Page-Level Metadata
- **Home page**: Locale-specific meta tags
- **Projects page**: Dynamic meta tags
- **Project detail pages**: Dynamic meta tags per project
- **Team page**: Dedicated meta tags
- **Locale layout**: Locale-specific metadata with alternates

#### Sitemap (`src/app/sitemap.ts`)
- Auto-generated sitemap
- Includes all static pages
- Includes all project detail pages
- Multi-locale support
- Priority and change frequency configuration

### 6. Navigation Updates

#### Desktop Header
- Added "Projects" link
- Added "Team" link
- Proper routing with next-intl

#### Mobile Menu
- Added navigation items
- Close menu on navigation
- Responsive design

### 7. Routing Configuration

Updated `src/shared/lib/i18n/routing.ts`:
- `/projects` route
- `/projects/[slug]` dynamic route
- `/team` route

### 8. Internationalization

#### Message Files Created
- `src/messages/projects.ts` - Projects page translations
- `src/messages/projectDetail.ts` - Project detail translations
- `src/messages/team.ts` - Team page translations

#### Locales Supported
- English (en)
- Russian (ru)
- Kazakh (kz)

## File Structure

```
src/
├── app/
│   ├── (public)/
│   │   └── [locale]/
│   │       ├── projects/
│   │       │   ├── page.tsx
│   │       │   └── [slug]/
│   │       │       └── page.tsx
│   │       └── team/
│   │           └── page.tsx
│   ├── layout.tsx (updated with SEO)
│   └── sitemap.ts (new)
├── data/
│   ├── projects.ts (new)
│   └── team.ts (new)
├── messages/
│   ├── projects.ts (new)
│   ├── projectDetail.ts (new)
│   └── team.ts (new)
├── types/
│   └── global.d.ts (new)
└── shared/
    ├── components/
    │   └── header/
    │       └── ui/
    │           ├── HeaderMenu.tsx (updated)
    │           └── MobileHeaderMenu.tsx (updated)
    └── lib/
        └── i18n/
            ├── routing.ts (updated)
            └── request.ts (updated)
```

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## Usage

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Access Pages
- Home: `http://localhost:3000/en`
- Projects: `http://localhost:3000/en/projects`
- KZH Project: `http://localhost:3000/en/projects/kzh`
- Team: `http://localhost:3000/en/team`

Replace `en` with `ru` or `kz` for other languages.

## SEO Features

1. **Meta Tags**: All pages have proper title, description, and keywords
2. **OpenGraph**: Social media sharing optimized
3. **Twitter Cards**: Twitter sharing support
4. **Sitemap**: Auto-generated for search engines
5. **Robots.txt**: Already configured in the project
6. **Canonical URLs**: Proper canonical and alternate language links
7. **Structured Data**: Ready for JSON-LD implementation (future enhancement)

## Future Enhancements

1. Add more projects to the dataset
2. Implement JSON-LD structured data
3. Add team member detail pages
4. Implement project filtering/search
5. Add analytics integration
6. Add blog/publications section

## Notes

- All routes are properly internationalized
- SEO is configured for multi-language support
- Static generation is used where possible for better performance
- Mock data can be easily replaced with real data from a CMS or API

