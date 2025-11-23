import "../../globals.css";
import {Header} from "@/shared/components/header/ui/Header";
import {Footer} from "@/shared/components/Footer";
import {hasLocale} from "use-intl";
import {routing} from "@/shared/lib/i18n/routing";
import {notFound} from "next/navigation";
import {getMessages, setRequestLocale} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata({
    params
}: LayoutProps<'/[locale]'>): Promise<Metadata> {
    const { locale } = await params;

    const titles = {
        en: "CAIR - Center for AI Research in Kazakhstan",
        ru: "CAIR - Центр исследований ИИ в Казахстане",
        kz: "CAIR - Қазақстандағы AI зерттеу орталығы"
    };

    const descriptions = {
        en: "Leading AI research center in Kazakhstan advancing artificial intelligence and machine learning technologies for the Kazakh language and local applications.",
        ru: "Ведущий центр исследований ИИ в Казахстане, продвигающий технологии искусственного интеллекта и машинного обучения для казахского языка и локальных приложений.",
        kz: "Қазақ тілі мен жергілікті қосымшаларға арналған жасанды интеллект және машиналық оқыту технологияларын дамытатын Қазақстандағы жетекші AI зерттеу орталығы."
    };

    return {
        title: titles[locale as keyof typeof titles] || titles.en,
        description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'x-default': '/en',
                'en': '/en',
                'ru': '/ru',
                'kk': '/kz',
            },
        },
    };
}





export default async function PublicLayout({
        children,
        params
}:LayoutProps<'/[locale]'>) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) notFound();
    const messages = await getMessages();


    setRequestLocale(locale);

  return (
      <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
      </NextIntlClientProvider>
  );
}


export async function generateStaticParams() {
    return routing.locales.map((locale) => ({
        locale: locale
    }));
}