import { PropsWithChildren } from "react";

export default function Card({
    className = "",
    children,
    ...props
}: PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) {
    // Check if there's any class in className starting with "p-"
    const hasPaddingClass = /\bp-\S+/g.test(className);

    // Build the complete className string
    const computedClassName = [
        !hasPaddingClass && "p-4 sm:p-8", // Add "p-4" if no other padding class is present
        "sm:rounded-lg",
        "bg-white text-primary",
        "dark:bg-neutral/10 dark:border-neutral border-[2px]",
        "shadow shadow-neutral",
        className, // Add the provided className
    ]
        .filter(Boolean) // Remove any undefined or falsy values
        .join(" "); // Join the classes into a single string

    return (
        <div {...props} className={computedClassName}>
            {children}
        </div>
    );
}
