"use client"
import {CompaniesCarousel} from "@/modules/landing/shared/ui/CompaniesCarousel";
import {companies} from "@/modules/landing/components/team-worked-places/constants";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";

export const PreviouslyWorkedSection = () => {

    const t = useTranslations("landing.previouslyWorkedPlaces");

    return (
        <section className={"my-50"}>
            <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className={"text-foreground w-[90%] mx-auto text-[36px] max-[768px]:text-[32px] max-[512px]:text-[28px] font-bold text-center"}>
                {t('title')}
            </motion.h3>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            >
                <CompaniesCarousel items={companies} />
            </motion.div>
        </section>
    )
}