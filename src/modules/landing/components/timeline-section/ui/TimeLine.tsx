import React from "react";

// TimeLine.tsx
interface TimeLineProps {
    years: string[];
    activeYear: string | null;
    setActiveYear: (year: string | null) => void;
    className?: string;
}


export const TimeLine = ({ years, setActiveYear, activeYear, className }: TimeLineProps) => {
    return (
        <div className={`flex flex-col max-[640px]:flex-row items-center gap-5 mx-5 ${className}`}>
            {years.map((year, index) => (
                <React.Fragment key={year}>
                    <div
                        key={index}
                        className={`w-18 h-18 transition border-2 rounded-full ${activeYear == year ? "bg-primary/20 border-primary" : " bg-card/20  border-card"} flex justify-center items-center cursor-pointer`}
                        onClick={() => setActiveYear(year)}
                    >
                        {year}
                    </div>
                    {year < years[years.length - 1] && <div className="w-1 h-10 max-[640px]:w-10 max-[640px]:h-1 bg-card/70 rounded" />}
                </React.Fragment>
            ))}
        </div>
    );
};
