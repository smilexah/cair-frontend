import {Inter} from "next/font/google";
import type {Metadata} from "next";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "cyrillic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "CAIR - Center for AI Research in Kazakhstan",
        template: "%s | CAIR"
    },
    description: "CAIR is a leading AI research center in Kazakhstan, focusing on advancing artificial intelligence and machine learning technologies for the Kazakh language and local applications.",
    keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Kazakhstan", "Research", "NLP", "Kazakh Language", "Deep Learning"],
    authors: [{ name: "CAIR Team" }],
    creator: "CAIR",
    publisher: "CAIR",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    openGraph: {
        type: "website",
        locale: "en_US",
        alternateLocale: ["ru_RU", "kk_KZ"],
        siteName: "CAIR - Center for AI Research",
        title: "CAIR - Center for AI Research in Kazakhstan",
        description: "Leading AI research center in Kazakhstan advancing artificial intelligence and machine learning technologies.",
    },
    twitter: {
        card: "summary_large_image",
        title: "CAIR - Center for AI Research in Kazakhstan",
        description: "Leading AI research center in Kazakhstan advancing artificial intelligence and machine learning technologies.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
};

interface Props {children: React.ReactNode}

export default function RootLayout({children}: Props) {

    return (
        <html>
            <body className={`${inter.className} ${inter.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}