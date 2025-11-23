interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
}

export const Container = ({children, className}:ContainerProps) => {
    return (
        <div className={`max-w-[1076px] max-[1076px]:px-5 max-[512px]:px-3 mx-auto ${ className }`}>
            {children}
        </div>
    )
}