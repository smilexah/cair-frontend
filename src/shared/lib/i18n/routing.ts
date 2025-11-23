import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en', 'ru', 'kz'],
    defaultLocale: 'en',
    localeDetection: true,
    pathnames: {
        '/': '/',
        '/projects': '/projects',
        '/projects/[slug]': '/projects/[slug]',
        '/team': '/team'
    }
})

export type Locale = (typeof routing.locales)[number];
