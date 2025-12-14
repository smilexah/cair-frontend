import { setRequestLocale } from "next-intl/server";
import { Locale } from "use-intl";
import { Container } from "@/shared/components/Container";
import { projectsService } from "@/lib/api";
import { notFound } from "next/navigation";
import { Link } from "@/shared/lib/i18n/navigation";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export const dynamicParams = true;

export async function generateStaticParams() {
    try {
        const projects = await projectsService.getAll({ size: 100, sortBy: 'startDate', direction: 'DESC' });
        if (projects.length === 0) {
            return [];
        }
        return projects.flatMap(project =>
            ['en', 'ru', 'kz'].map(locale => ({
                locale,
                slug: project.slug
            }))
        );
    } catch {
        return [];
    }
}

export async function generateMetadata({
    params
}: PageProps<'/[locale]/projects/[slug]'>): Promise<Metadata> {
    const { locale, slug } = await params;
    const project = await projectsService.getBySlug(slug);

    if (!project) {
        return {};
    }

    const title = project.title[locale as keyof typeof project.title] || project.title.en;
    const description = project.shortDescription[locale as keyof typeof project.shortDescription] || project.shortDescription.en;

    return {
        title: `${title} | CAIR`,
        description: description,
        openGraph: {
            title: title,
            description: description,
            type: 'article',
            locale: locale,
            images: [
                {
                    url: project.image,
                    alt: title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
        }
    };
}

async function ProjectDetailContent({ slug, locale }: { slug: string; locale: string }) {
    const t = await getTranslations("projectDetail");
    const project = await projectsService.getBySlug(slug);

    if (!project) {
        notFound();
    }

    const localeKey = locale as 'en' | 'ru' | 'kz';

    return (
        <Container>
            <div className="py-20 min-h-screen">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-primary hover:underline mb-8"
                >
                    ← {t('backToProjects')}
                </Link>

                <div className="mb-12">
                    <div className="flex items-center justify-center mb-8 h-40 bg-card border border-border rounded-2xl p-8">
                        <img
                            src={project.image || '/projects/KZH.svg'}
                            alt={project.title[localeKey]}
                            className="max-h-full object-contain"
                        />
                    </div>

                    <h1 className="text-5xl max-[768px]:text-4xl max-[512px]:text-3xl font-bold text-foreground mb-4">
                        {project.title[localeKey]}
                    </h1>

                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                            project.status === 'active' 
                                ? 'bg-green-500/10 text-green-500' 
                                : project.status === 'completed'
                                ? 'bg-blue-500/10 text-blue-500'
                                : 'bg-yellow-500/10 text-yellow-500'
                        }`}>
                            {t(`status.${project.status}`)}
                        </span>
                        <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">
                            {t('started')}: {new Date(project.startDate).toLocaleDateString(locale)}
                        </span>
                        {project.endDate && (
                            <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">
                                {t('ended')}: {new Date(project.endDate).toLocaleDateString(locale)}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                {t('overview')}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.fullDescription[localeKey]}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                {t('objectives')}
                            </h2>
                            <ul className="space-y-3">
                                {(project.objectives[localeKey] as unknown as string[] || []).map((objective, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium mt-0.5">
                                            {index + 1}
                                        </span>
                                        <span className="text-muted-foreground">{objective}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {project.results && (
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-4">
                                    {t('results')}
                                </h2>
                                <ul className="space-y-3">
                                    {(project.results[localeKey] as unknown as string[] || []).map((result, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 text-green-500 text-xl">
                                                ✓
                                            </span>
                                            <span className="text-muted-foreground">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    <div className="space-y-6">
                        <Link href="/team">
                            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-foreground">
                                        {t('team')}
                                    </h3>
                                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        →
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {project.team.map((member, index) => (
                                        <li key={index} className="text-muted-foreground group-hover:text-foreground transition-colors">
                                            • {member}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <span className="text-sm text-primary font-medium">
                                        {t('viewFullTeam') || 'View full team'}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default async function ProjectDetailPage({ params }: PageProps<'/[locale]/projects/[slug]'>) {
    const { locale, slug } = await params;
    setRequestLocale(locale as Locale);

    return <ProjectDetailContent slug={slug} locale={locale} />;
}

