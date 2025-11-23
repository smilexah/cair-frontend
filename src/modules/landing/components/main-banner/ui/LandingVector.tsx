import React from "react";
interface LandingVector {
    vector: React.ReactNode;
    icon: React.ReactNode;
    colorText?: string;
    title: string;
}

export const LandingVector = ({vector, icon, title, colorText}:LandingVector) => {
    return (
        <>
            <div className="relative w-[344px] max-[512px]:hidden">
                <div className={"max-[512px]:hidden"}>
                    {vector}
                </div>
                <div
                    className={`flex flex-col max-[512px]:flex-row  items-center justify-center gap-1 absolute  left-1/2  -translate-x-1/2  top-1/2 -translate-y-1/2`}
                    style={{
                        color: colorText || "white",
                    }}
                >
                    {icon}
                    <p className={"text-[24px] font-bold"}>{title}</p>
                </div>
            </div>
            <div
                className="hidden max-[512px]:flex  items-center justify-between w-full rounded-[20px] p-4"
                style={{
                    backgroundColor: colorText ? `${colorText}50` : "transparent", // 80 = 50% прозрачность (hex alpha)
                    border: colorText ? `2px solid ${colorText}` : "none",
                    color: colorText || "white",
                }}
            >
                {icon}
                <div className="w-full">
                    <p className="text-[16px]  text-center font-bold">{title}</p>
                </div>
            </div>

        </>
    )
}
