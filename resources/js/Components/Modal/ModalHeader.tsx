import { HTMLAttributes, PropsWithChildren } from "react";

export default function ModalHeader({
    children,
    className,
    ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={`flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-neutral ${className}`}
        >
            {children}
        </div>
    );
}
