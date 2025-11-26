import { redirect } from "next/navigation";
import { routing } from "@/shared/lib/i18n/routing";

export default function RootPage() {
    // На сервере просто редиректим на defaultLocale
    // Middleware next-intl автоматически обработает locale detection
    redirect(`/${routing.defaultLocale}`);
}