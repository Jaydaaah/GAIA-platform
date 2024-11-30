import { PropsWithChildren } from "react";

export default function Card({
    className = "",
    children,
    ...props
}: PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={`p-4 sm:rounded-lg sm:p-8
                bg-white text-primary
                dark:bg-neutral/10 dark:border-neutral border-[2px]
                shadow shadow-neutral
                ${className}`}
        >
            {children}
        </div>
    );
}
