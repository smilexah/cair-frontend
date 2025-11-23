import { redirect } from "next/navigation";
import { routing } from "@/shared/lib/i18n/routing";
import Cookies from "js-cookie";

export default function RootPage() {
    const cookieLocale = Cookies.get("NEXT_LOCALE");

    const locale = routing.locales.includes(cookieLocale as ('en' | 'ru' | 'kz') ?? "")
        ? cookieLocale
        : routing.defaultLocale;


    return redirect(`/${locale}`);
}