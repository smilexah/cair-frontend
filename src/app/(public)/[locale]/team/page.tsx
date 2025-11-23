import { setRequestLocale } from "next-intl/server";
import { Locale } from "use-intl";
import { Container } from "@/shared/components/Container";
import { getTeamMembers } from "@/data/team";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
    params
}: PageProps<'/[locale]/team'>): Promise<Metadata> {
    const { locale } = await params;

    const titles = {
        en: "Our Team | CAIR - Center for AI Research",
        ru: "Наша команда | CAIR - Центр исследований ИИ",
        kz: "Біздің команда | CAIR - AI зерттеу орталығы"
    };

    const descriptions = {
        en: "Meet the talented researchers and engineers behind CAIR's innovative AI research projects.",
        ru: "Познакомьтесь с талантливыми исследователями и инженерами, стоящими за инновационными проектами AI исследований CAIR.",
        kz: "CAIR-дың инновациялық AI зерттеу жобаларының артындағы талантты зерттеушілер мен инженерлермен танысыңыз."
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

async function TeamPageContent({ locale }: { locale: string }) {
    const t = await getTranslations("team");
    const teamMembers = await getTeamMembers();

    return (
        <Container>
            <div className="py-20 min-h-screen">
                <h1 className="text-5xl max-[768px]:text-4xl max-[512px]:text-3xl font-bold text-foreground mb-4">
                    {t('title')}
                </h1>
                <p className="text-xl max-[512px]:text-lg text-muted-foreground mb-12 max-w-3xl">
                    {t('subtitle')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="flex flex-col items-center text-center mb-4">
                                {member.image ? (
                                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                                        <img
                                            src="/default-person.svg"
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                                <h2 className="text-xl font-bold text-foreground mb-1">
                                    {member.name}
                                </h2>
                                <p className="text-sm text-primary font-medium mb-3">
                                    {member.role[t('locale') as 'en' | 'ru' | 'kz']}
                                </p>
                            </div>

                            <p className="text-muted-foreground text-sm mb-4 text-center">
                                {member.bio[t('locale') as 'en' | 'ru' | 'kz']}
                            </p>

                            <div className="border-t border-border pt-4">
                                <p className="text-xs font-semibold text-foreground mb-2">
                                    {t('expertise')}:
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {member.expertise.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {member.email && (
                                <div className="mt-4 pt-4 border-t border-border">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="text-sm text-primary hover:underline flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        {t('contact')}
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default async function TeamPage({ params }: PageProps<'/[locale]/team'>) {
    const { locale } = await params;
    setRequestLocale(locale as Locale);

    return <TeamPageContent locale={locale} />;
}

