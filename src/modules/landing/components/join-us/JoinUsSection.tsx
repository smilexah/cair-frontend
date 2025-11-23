"use client"
import {Container} from "@/shared/components/Container";
import {Button} from "@/shared/ui/button";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";
import React from "react";

export const JoinUsSection = () => {

    const t = useTranslations('landing.joinUs');
    const text = t("description");
    const words = text.split(" ");

    return (
        <Container className={"flex flex-col my-50 justify-center items-center gap-5"}>
            <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className={"text-center text-[40px] max-[768px]:text-[36px] max-[512px]:text-[28px] font-bold"}>
                {t('title')}
            </motion.h3>
            <div className={"text-foreground/70 text-center mb-5 mt-5"}>
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
                initial={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}

            >
                <Button>
                    <a target={"_blank"} href="https://docs.google.com/forms/d/e/1FAIpQLSc4py_BCIXQ_4HhSM79TDihBoIdpSBNaGJkdjHEHLc7pW58-w/viewform">Join Us</a>
                </Button>
            </motion.div>
        </Container>
    )
}