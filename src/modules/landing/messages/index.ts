import {MainBannerEN, MainBannerKZ, MainBannerRU} from "@/modules/landing/components/main-banner/locales";
import {OurProjectsEN, OurProjectsRU, OurProjectsKZ} from "@/modules/landing/components/our-projects/locales";
import {TimelineEN, TimelineKZ, TimelineRU} from "@/modules/landing/components/timeline-section/locales";
import {WhatWeDoEN, WhatWeDoKZ, WhatWeDoRU} from "@/modules/landing/components/what-we-do/locales";
import { PreviouslyWorkedPlacesEN, PreviouslyWorkedPlacesKZ, PreviouslyWorkedPlacesRU} from "@/modules/landing/components/team-worked-places/locales";
import {WhoWeAreEN, WhoWeAreKZ, WhoWeAreRU} from "@/modules/landing/components/who-we-are/locales";
import {OurPartnersEN, OurPartnersKZ, OurPartnersRU} from "@/modules/landing/components/our-partners/locales";
import {JoinUsEN, JoinUsKZ, JoinUsRU} from "@/modules/landing/components/join-us/locales";

const LandingMessages = {
    ru: {
        mainBanner: MainBannerRU,
        ourProjects: OurProjectsRU,
        timeLine: TimelineRU,
        whatWeDo: WhatWeDoRU,
        previouslyWorkedPlaces: PreviouslyWorkedPlacesRU,
        whoWeAre: WhoWeAreRU,
        ourPartners: OurPartnersRU,
        joinUs: JoinUsRU
    },
    en: {
        mainBanner: MainBannerEN,
        ourProjects: OurProjectsEN,
        timeLine: TimelineEN,
        whatWeDo: WhatWeDoEN,
        previouslyWorkedPlaces: PreviouslyWorkedPlacesEN,
        whoWeAre: WhoWeAreEN,
        ourPartners: OurPartnersEN,
        joinUs: JoinUsEN
    },
    kz: {
        mainBanner: MainBannerKZ,
        ourProjects: OurProjectsKZ,
        timeLine: TimelineKZ,
        whatWeDo: WhatWeDoKZ,
        previouslyWorkedPlaces: PreviouslyWorkedPlacesKZ,
        whoWeAre: WhoWeAreKZ,
        ourPartners: OurPartnersKZ,
        joinUs: JoinUsKZ
    }
} as const;

export default LandingMessages;
