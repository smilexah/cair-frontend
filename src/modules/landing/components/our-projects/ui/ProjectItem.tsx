import { Tags } from "@/shared/ui/tags";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
    imageSRC?: string;
    title?: string;
    shortDescription?: string;
    link?: string;
    description?: string;
    tags?: string[];
}

export const ProjectItem = ({
                                imageSRC,
                                title,
                                shortDescription,
                                description,
                                link,
                                tags
                            }: ProjectItemProps) => {
    return (
        <div
            tabIndex={0}
            className={`
        group relative cursor-pointer
        w-[375px] max-[512px]:w-[325px]
        overflow-hidden rounded-2xl border border-white/10 bg-white/5
        px-6 pt-8 pb-6 flex flex-col
        max-h-[240px]
        hover:max-h-[560px] focus-within:max-h-[620px]
        [transition:max-height_350ms_ease]
      `}
        >
            <div className="flex justify-end mb-6">
                <Image
                    width={50}
                    height={50}
                    src={imageSRC || '/projects/KZH.svg'}
                    alt="project-image"
                    className="object-cover"
                    loading="lazy"
                />
            </div>

            <div className="space-y-2">
                <h3 className="text-2xl font-bold leading-tight">{title}</h3>
                <p className="text-sm text-white/75">{shortDescription}</p>
            </div>

            <div
                className="
          mt-4 grid grid-rows-[0fr] opacity-0
          group-hover:grid-rows-[1fr] group-hover:opacity-100
          group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100
          transition-all duration-300
        "
            >
                <div className="min-h-0 overflow-hidden flex flex-col gap-5 pb-4">
                    <p className="text-base leading-relaxed text-white/90">
                        {description}
                    </p>

                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <Tags key={index} name={tag} />
                            ))}
                        </div>
                    )}

                    <div className="flex justify-end pt-1">
                        <Link href={link || ""} className="inline-block">
              <span className="italic text-white/65 hover:text-white/90">
                More details →
              </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
