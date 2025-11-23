"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import Autoscroll from "embla-carousel-auto-scroll";
import Image from "next/image";

interface Props {
    items: {
        name: string;
        logo: string;
    }[];
}

export const CompaniesCarousel = ({items}:Props) => {
    return (
        <div className={"bg-foreground/70 border-y-z mt-10"}>
            <Carousel
                opts={{ align: "center", loop: true }}
                plugins={[
                    Autoscroll({
                        playOnInit: true,
                        speed: 2,
                    }),
                ]}
                className={"w-full py-9 hidden max-[1000px]:block"}
            >
                <CarouselContent>
                    {items.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-1/3 flex items-center justify-center"
                        >
                            <Image
                                width={80}
                                height={80}
                                src={item.logo}
                                alt={item.name}
                                className="max-[512px]:w-[60px] object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className={"max-[1000px]:hidden flex w-full py-12 justify-center items-center gap-12"}>
                {items.map((item, index) => (
                    <Image
                        key={index}
                        width={80}
                        height={80}
                        src={item.logo}
                        alt={item.name}
                        className="object-contain"
                    />
                ))}
            </div>
        </div>
    );
};
