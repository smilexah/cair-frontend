"use client"
import {CompaniesCarousel} from "@/modules/landing/shared/ui/CompaniesCarousel";
import {companies} from "@/modules/landing/components/our-partners/constants";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";

export const OurPartnersSection = () => {

    const t = useTranslations('landing.ourPartners');

    return (
        <section className={"mt-50 mb-80"}>
            <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className={"font-bold text-[36px] max-[768px]:text-[32px] max-[512px]:text-[28px] text-center mt-30"}>
                {t('title')}
            </motion.h3>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            >
                <CompaniesCarousel items={companies} />
            </motion.div>
        </section>
    )
}