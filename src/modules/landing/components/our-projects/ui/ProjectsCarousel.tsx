"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import { ProjectItem } from "@/modules/landing/components/our-projects/ui/ProjectItem";
import Autoscroll from "embla-carousel-auto-scroll";
import type { Project } from "@/data/projects";
import { useLocale } from "next-intl";

interface ProjectsCarouselProps {
    projects: Project[];
}

export const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
    const [speed, setSpeed] = useState(2);
    const locale = useLocale() as 'en' | 'ru' | 'kz';

    useEffect(() => {
        if (window.innerWidth < 512) {
            setSpeed(0.5); // меняем только на клиенте
        }
    }, []);

    const duplicatedProjects = [...projects, ...projects, ...projects];

    return (
        <Carousel
            plugins={[
                Autoscroll({
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                    playOnInit: true,
                    speed,
                }),
            ]}
            opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
            className="w-full mb-5 mt-10"
        >
            <CarouselContent>
                {duplicatedProjects.map((project, index) => (
                    <CarouselItem
                        key={`${project.id}-${index}`}
                        className="shrink-0 basis-auto"
                    >
                        <ProjectItem
                            title={project.title[locale]}
                            shortDescription={project.shortDescription[locale]}
                            imageSRC={project.image}
                            description={project.fullDescription[locale]}
                            link={`/${locale}/projects/${project.slug}`}
                            tags={project.tags}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
