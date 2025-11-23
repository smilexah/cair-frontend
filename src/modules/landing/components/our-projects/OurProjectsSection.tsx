"use client"
import {Container} from "@/shared/components/Container";
import {ProjectsCarousel} from "@/modules/landing/components/our-projects/ui/ProjectsCarousel";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";

export const OurProjectsSection = () => {

    const t = useTranslations("landing.ourProjects");

    return (
        <section className={"my-30"}>
            <Container>
                <motion.h2
                    viewport={{ once: true }}
                    className={"text-[40px] max-[512px]:text-center max-[768px]:text-[36px] max-[512px]:text-[28px] font-bold text-foreground "}
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                >

                    {t('title')}
                </motion.h2>
            </Container>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <ProjectsCarousel />
            </motion.div>
        </section>
    )
}