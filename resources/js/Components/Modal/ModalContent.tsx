import { HTMLAttributes, PropsWithChildren } from "react";

export default function ModalContent({
    children,
    className,
    ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={`relative bg-white rounded-lg shadow dark:bg-background ${className}`}
        >
            {children}
        </div>
    );
}
