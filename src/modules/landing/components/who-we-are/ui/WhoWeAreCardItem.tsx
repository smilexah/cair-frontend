
interface WhoWeAreCardItemProps {
    className?: string;
    color?: string;
    icon?: React.ReactNode;
    name?: string;
}

export const WhoWeAreCardItem = ({ className, color, name, icon }: WhoWeAreCardItemProps) => {
    return (
        <div
            className={`${className} rounded-2xl w-[200px] max-[512px]:w-full  h-[200px] max-[512px]:h-fit p-2 max-[512px]:px-5 max-[512px]:py-3 flex flex-col max-[512px]:flex-row items-center justify-center max-[512px]:justify-around gap-3 hover:scale-105 hover:shadow-amber-300  transition-all duration-200`}
            style={{
                border: color ? `2px solid ${color}` : "none",
                backgroundColor: color ? `${color}66` : "transparent",
            }}
        >
            {icon ? icon : null}
            <div className={"items-center justify-center flex w-full"}>
                <p
                    style={{
                        color: color || "white",
                        filter: "brightness(0.2)"
                    }}
                    className="font-bold"
                >
                    {name}
                </p>
            </div>
        </div>
    )
}
