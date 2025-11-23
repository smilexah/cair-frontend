import {useTranslations} from "next-intl";

export const MainBannerText = () => {

        const t = useTranslations("landing.mainBanner");

    return (
        <div className={"absolute max-[512px]:relative left-1/2  w-[700px] max-[768px]:w-[600px] max-[640px]:w-[500px] max-[512px]:max-w-[370px]  -translate-x-1/2 top-[60px]"}>
            <h2 className={"text-[54px] leading-12 font-black text-center max-[512px]:text-[40px] max-[768px]:text-[48px]"}>
                {t('title')}
            </h2>
            <p className={"mt-[30px] leading-5 opacity-70 text-center max-[512px]:text-[14px] max-[512px]:w-full"}>
                {t('subtitle')}
            </p>
        </div>
    )
}