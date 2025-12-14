import {MainBannerSection} from "@/modules/landing/components/main-banner/MainBannerSection";
import {OurProjectsSection} from "@/modules/landing/components/our-projects/OurProjectsSection";
import {TimeLineSection} from "@/modules/landing/components/timeline-section/TimeLineSection";
import {WhatWeDoSection} from "@/modules/landing/components/what-we-do/WhatWeDoSection";
import {PreviouslyWorkedSection} from "@/modules/landing/components/team-worked-places/PreviouslyWorkedSection";
import {WhoWeAreSection} from "@/modules/landing/components/who-we-are/WhoWeAreSection";
import {OurPartnersSection} from "@/modules/landing/components/our-partners/OurPartnersSection";
import {JoinUsSection} from "@/modules/landing/components/join-us/JoinUsSection";
import {setRequestLocale} from "next-intl/server";
import {Locale} from "use-intl";
import type { Metadata } from "next";
import { projectsService } from "@/lib/api";


export async function generateMetadata({
    params
}: PageProps<'/[locale]'>): Promise<Metadata> {
    const { locale } = await params;

    const titles = {
        en: "Home | CAIR - Center for AI Research",
        ru: "Главная | CAIR - Центр исследований ИИ",
        kz: "Басты бет | CAIR - AI зерттеу орталығы"
    };

    const descriptions = {
        en: "CAIR is pioneering AI research in Kazakhstan, developing cutting-edge solutions for Kazakh language processing and advancing machine learning technologies.",
        ru: "CAIR - пионер исследований ИИ в Казахстане, разрабатывающий передовые решения для обработки казахского языка и продвижения технологий машинного обучения.",
        kz: "CAIR Қазақстандағы AI зерттеулерінің көшбасшысы, қазақ тілін өңдеуге арналған озық шешімдерді әзірлеп, машиналық оқыту технологияларын дамытады."
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
    };
}

export default async function Home({params}: PageProps<'/[locale]'>) {
    const {locale} = await params;

    setRequestLocale(locale as Locale);

    const projects = await projectsService.getAll({ size: 100, sortBy: 'startDate', direction: 'DESC' });

    return (
        <>
            <MainBannerSection />
            <OurProjectsSection projects={projects} />
            <TimeLineSection />
            <WhatWeDoSection />
            <PreviouslyWorkedSection />
            <WhoWeAreSection />
            <OurPartnersSection />
            <JoinUsSection />
        </>
    );
}
