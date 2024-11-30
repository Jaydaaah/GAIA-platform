import { HTMLAttributes, PropsWithChildren } from "react";

export default function ModalBody({
    children,
    className,
    ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={`p-4 md:p-5 space-y-4 ${className}`}
        >
            {children}
        </div>
    );
}
