import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const locales = ['en', 'ru', 'kz'];

    // Static pages
    const staticPages = [
        '',
        '/projects',
        '/team',
    ];

    // Generate URLs for all locales for static pages
    const staticUrls = staticPages.flatMap(page =>
        locales.map(locale => ({
            url: `${baseUrl}/${locale}${page}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: page === '' ? 1 : 0.8,
        }))
    );

    // Generate URLs for all project detail pages
    const projectUrls = projects.flatMap(project =>
        locales.map(locale => ({
            url: `${baseUrl}/${locale}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    );

    return [...staticUrls, ...projectUrls];
}

