import {getRequestConfig} from "next-intl/server";
import LandingMessages from "@/modules/landing/messages";
import {hasLocale} from "use-intl";
import {routing} from "@/shared/lib/i18n/routing";
import { ProjectsEN, ProjectsRU, ProjectsKZ } from "@/messages/projects";
import { ProjectDetailEN, ProjectDetailRU, ProjectDetailKZ } from "@/messages/projectDetail";
import { TeamEN, TeamRU, TeamKZ } from "@/messages/team";

export default getRequestConfig(async ({requestLocale}) => {

    const requested = await requestLocale;


    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const projectsMessages = { en: ProjectsEN, ru: ProjectsRU, kz: ProjectsKZ };
    const projectDetailMessages = { en: ProjectDetailEN, ru: ProjectDetailRU, kz: ProjectDetailKZ };
    const teamMessages = { en: TeamEN, ru: TeamRU, kz: TeamKZ };

    return {
        locale,
        messages: {
            landing: LandingMessages[locale as keyof typeof LandingMessages],
            projects: projectsMessages[locale as keyof typeof projectsMessages],
            projectDetail: projectDetailMessages[locale as keyof typeof projectDetailMessages],
            team: teamMessages[locale as keyof typeof teamMessages]
        }
    }
})