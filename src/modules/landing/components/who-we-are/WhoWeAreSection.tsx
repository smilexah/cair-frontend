"use client"
import {Container} from "@/shared/components/Container";
import {WhoWeAreCardItem} from "@/modules/landing/components/who-we-are/ui/WhoWeAreCardItem";
import {CodeXmlIcon} from "lucide-react";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";
import React from "react";

const whoWeAreItems = [
    { color: "#d4f542", name: "Software" },
    { color: "#4A7EBB", name: "DevOps" },
    { color: "#F7A16B", name: "AI/ML" },
    { color: "#F0F9FF", name: "Security" },
    { color: "#42f5d7", name: "Hardware" },
] as const;

export const WhoWeAreSection = () => {

    const t = useTranslations('landing.whoWeAre')
    const text = t("description");
    const words = text.split(" ");



    return (
        <Container className={"mt-50 mb-80"}>
            <div>
                <motion.h3
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                    className={"text-[40px] max-[768px]:text-[36px] max-[512px]:text-[28px] font-bold"}
                >
                    {t('title')}
                </motion.h3>
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
            </div>
            <motion.div
                className="flex mt-10 flex-wrap w-full h-full gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 3, ease: "easeOut" }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
            >
                {whoWeAreItems.map((item, i) => (
                    <motion.div
                        className={"max-[512px]:w-full "}
                        key={i+4}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <WhoWeAreCardItem
                            color={item.color}
                            icon={<CodeXmlIcon width={40} height={40} color={item.color} />}
                            name={item.name}
                        />
                    </motion.div>
                ))}
            </motion.div>

        </Container>
    )
}