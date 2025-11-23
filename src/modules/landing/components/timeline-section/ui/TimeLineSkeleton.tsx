import { Skeleton } from "@/shared/ui/skeleton"

export const TimeLineSkeleton = () => {
    return (
        <div className="w-full flex flex-col gap-5">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                >
                    <Skeleton className="w-[90%] h-10 rounded-2xl" />
                </div>
            ))}
        </div>
    )
}
