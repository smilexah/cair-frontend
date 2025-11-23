"use client"
import {Container} from "@/shared/components/Container";
import React, {useState} from "react";
import dynamic from "next/dynamic";
import {TimeLine} from "@/modules/landing/components/timeline-section/ui/TimeLine";
import {TimeLineSkeleton} from "@/modules/landing/components/timeline-section/ui/TimeLineSkeleton";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";



const contents = {
    "2022": dynamic(() => import("@/modules/landing/components/timeline-section/ui/TimelineContent/Content22"), {
        ssr: false,
        loading: () => <TimeLineSkeleton />
    }),
    "2023": dynamic(() => import("@/modules/landing/components/timeline-section/ui/TimelineContent/Content23"), {
        ssr: false,
        loading: () => <TimeLineSkeleton />
    }),
    "2024": dynamic(() => import("@/modules/landing/components/timeline-section/ui/TimelineContent/Content24"), {
        ssr: false,
        loading: () => <TimeLineSkeleton />
    })
};


export const TimeLineSection = () => {
    const [activeYear, setActiveYear] = useState<string | null>("2022");

    const t = useTranslations('landing.timeLine');

    const text = t("description");
    const words = text.split(" ");

    const Content = activeYear ? contents[activeYear as keyof typeof contents] : contents["2022"];

    return (
        <Container className={"pt-[120px] mb-30"}>
            <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                className={"text-[40px] max-[768px]:text-[36px] max-[512px]:text-[28px] font-black "}>
                {t('title')}
            </motion.h2>
            <div className={"text-foreground/70 mt-5"}>
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02, duration: 0.55, ease: "easeOut" }}
                        style={{ display: "inline-block", marginRight: "6px" }}
                    >
                        {word}
                    </motion.span>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <hr className={"my-10  max-[512px]:my-20 border-card"}/>
                <section className={"flex flex-row max-[640px]:flex-col-reverse max-[640px]:gap-20 items-center justify-between"}>
                    <Content />
                    <TimeLine years={Object.keys(contents)} setActiveYear={setActiveYear} activeYear={activeYear} />
                </section>
                <hr className={"my-10 max-[512px]:my-20 border-card"}/>
            </motion.div>
        </Container>
    )
}