"use client"
import {Container} from "@/shared/components/Container";
import {BookOpenIcon, BracesIcon, ShieldCheckIcon} from "lucide-react";
import {MainBannerText} from "@/modules/landing/components/main-banner/ui/MainBannerText";
import {LandingVector} from "@/modules/landing/components/main-banner/ui/LandingVector";
import {Shape1} from "@/modules/landing/components/main-banner/ui/Shape1";
import {Shape2} from "@/modules/landing/components/main-banner/ui/Shape2";
import {Shape3} from "@/modules/landing/components/main-banner/ui/Shape3";
import {Shape4} from "@/modules/landing/components/main-banner/ui/Shape4";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";

export function MainBannerSection() {
    const t = useTranslations("landing.mainBanner");

    return (
        <Container className={"h-[700px] max-[512px]:mt-[20] mt-20 mb-40 max-[512px]:h-fit max-[512px]:mb-50"}>
            <div className={"relative"}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}

                >
                    <MainBannerText />
                    <div className={"mt-10 max-[512px]:hidden"}>
                        <Shape1 />
                    </div>
                </motion.div>
                <div className={"-mt-[50px] max-[512px]:mt-[150px]"}>
                    <div className={"flex max-[512px]:flex-col max-[512px]:items-center items-end justify-center gap-4 "}>
                        <motion.div
                            className={"w-full"}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay:0.2, ease: "easeOut" }}
                        >
                            <LandingVector
                                vector={<Shape2 />}
                                title={t('research')}
                                colorText="#2ABF84"
                                icon={<BookOpenIcon className={"w-[46px] h-[46px] max-[512px]:w-[26px] max-[512px]:h-[26px]"} />}
                            />
                        </motion.div>
                        <motion.div
                            className={"w-full"}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay:0.4, ease: "easeOut" }}
                        >
                            <LandingVector
                                vector={<Shape3 />}
                                title={t('development')}
                                colorText="#2F75C8"
                                icon={<BracesIcon className={"w-[46px] h-[46px] max-[512px]:w-[26px] max-[512px]:h-[26px]"} />}
                            />
                        </motion.div>
                        <motion.div
                            className={"w-full"}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay:0.6, ease: "easeOut" }}
                        >
                            <LandingVector
                                vector={<Shape4 />}
                                title={t('certification')}
                                colorText="#8440E3"
                                icon={<ShieldCheckIcon className={"w-[46px] h-[46px] max-[512px]:w-[26px] max-[512px]:h-[26px]"} />}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </Container>
    )
}