"use client"
import {Container} from "@/shared/components/Container";
import {Button} from "@/shared/ui/button";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";

export const WhatWeDoSection = () => {
    const t = useTranslations('landing.whatWeDo')

    return (
        <Container className={"flex flex-col max-[1076px]:gap-10 mt-20 mb-50 py-[100px]"}>
            <motion.h3
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                className={"text-[40px] max-[768px]:text-[36px] max-[512px]:text-[28px] font-black  max-[1076px]:text-center text-foreground"}>
                {t('title')}
            </motion.h3>
            <div className={"flex flex-row flex-wrap-reverse max-[1076px]:justify-center  justify-between  max-[1076px]:gap-10"}>
                <div className={"flex justify-center flex-col items-center "}>
                    <div className={"flex flex-col max-[512px]:text-[14px] px-5 gap-5 mt-[30px] w-[400px]  max-[1076px]:w-full text-foreground opacity-70"}>
                        <motion.li
                            initial={{ opacity: 0, y: 10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            {t('point-1')}
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            {t('point-2')}
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            {t('point-2')}
                        </motion.li>
                    </div>
                    <motion.div
                        className={"w-full flex items-center justify-center max-[512px]:w-[100%]"}
                        initial={{ opacity: 0, y: -10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <Button className={"mt-[30px] max-[1076px]:mt-[50px] max-[1076px]:w-[50%] max-[512px]:w-[100%]"}>
                            <a target={"_blank"} href="https://docs.google.com/forms/d/e/1FAIpQLSc4py_BCIXQ_4HhSM79TDihBoIdpSBNaGJkdjHEHLc7pW58-w/viewform">Join Us</a>
                        </Button>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <Image
                        src={"/images/freedom-workshop.png"}
                        width={630}
                        height={380}
                        className={"h-[380px] max-[512px]:h-[200px] object-cover object-center rounded-xl"}
                        alt="What we do"
                        loading={"lazy"}

                    />
                </motion.div>
            </div>
        </Container>
    )
}