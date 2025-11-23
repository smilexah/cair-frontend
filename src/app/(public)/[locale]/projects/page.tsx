import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Locale } from "use-intl";
import { Container } from "@/shared/components/Container";
import { projects } from "@/data/projects";
import { Link } from "@/shared/lib/i18n/navigation";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata({
    params
}: PageProps<'/[locale]/projects'>): Promise<Metadata> {
    const { locale } = await params;

    const titles = {
        en: "Our Projects | CAIR - Center for AI Research",
        ru: "Наши проекты | CAIR - Центр исследований ИИ",
        kz: "Біздің жобалар | CAIR - AI зерттеу орталығы"
    };

    const descriptions = {
        en: "Explore cutting-edge AI research projects at CAIR, focusing on Kazakh language processing and artificial intelligence innovation.",
        ru: "Изучите передовые проекты AI исследований в CAIR, сосредоточенные на обработке казахского языка и инновациях в искусственном интеллекте.",
        kz: "CAIR-дағы заманауи AI зерттеу жобаларын зерттеңіз, қазақ тілін өңдеуге және жасанды интеллект инновацияларына бағытталған."
    };

    return {
        title: titles[locale as keyof typeof titles] || titles.en,
        description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
        openGraph: {
            title: titles[locale as keyof typeof titles] || titles.en,
            description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
            type: 'website',
            locale: locale,
        },
        twitter: {
            card: 'summary_large_image',
            title: titles[locale as keyof typeof titles] || titles.en,
            description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
        }
    };
}

function ProjectsPageContent() {
    const t = useTranslations("projects");

    return (
        <Container>
            <div className="py-20 min-h-screen">
                <h1 className="text-5xl max-[768px]:text-4xl max-[512px]:text-3xl font-bold text-foreground mb-4">
                    {t('title')}
                </h1>
                <p className="text-xl max-[512px]:text-lg text-muted-foreground mb-12">
                    {t('subtitle')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={{ pathname: `/projects/${project.slug}` as '/projects/[slug]', params: { slug: project.slug } }}
                            className="group"
                        >
                            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full">
                                <div className="flex items-center justify-center mb-4 h-32">
                                    <img
                                        src={project.image}
                                        alt={project.title.en}
                                        className="max-h-full object-contain"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {project.title[t('locale') as 'en' | 'ru' | 'kz']}
                                </h2>
                                <p className="text-muted-foreground mb-4">
                                    {project.shortDescription[t('locale') as 'en' | 'ru' | 'kz']}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        project.status === 'active' 
                                            ? 'bg-green-500/10 text-green-500' 
                                            : project.status === 'completed'
                                            ? 'bg-blue-500/10 text-blue-500'
                                            : 'bg-yellow-500/10 text-yellow-500'
                                    }`}>
                                        {t(`status.${project.status}`)}
                                    </span>
                                    <span className="text-primary group-hover:translate-x-2 transition-transform">
                                        →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default function ProjectsPage({ params }: PageProps<'/[locale]/projects'>) {
    const { locale } = use(params);
    setRequestLocale(locale as Locale);

    return <ProjectsPageContent />;
}

