import { HTMLAttributes, PropsWithChildren } from "react";

export default function ModalFooter({
    children,
    className,
    ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={`flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-neutral ${className}`}
        >
            {children}
        </div>
    );
}
