interface TagsProps {
    className?: string;
    name: string;
}

export function Tags({className, name}:TagsProps) {
    return (
        <div className={`border-2 w-fit rounded-full px-4 py-1 border-[#F4A367] ${className} flex justify-center items-center`}>
            <p className={"text-light italic text-center text-[#F4A367] text-xs"}>{name}</p>
        </div>
    )
}