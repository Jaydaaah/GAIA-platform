import { PropsWithChildren, useMemo } from "react";

export default function ChatBubble({
    children,
    name,
    side,
    time,
    src,
}: PropsWithChildren<{
    name: string;
    side: "left" | "right";
    src: string;
    time: Date;
}>) {
    const formattedTime = useMemo(() => {
        return time.toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "2-digit",
            hour12: true, // Use 12-hour format
        });
    }, [time]);

    const renderChild = useMemo(() => {
        if (typeof children == "string") {
            return (
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white leading-relaxed text-pretty">
                    {children}
                </p>
            );
        } else {
            return (
                <div className="text-sm font-normal py-2.5 text-gray-900 dark:text-white leading-relaxed text-pretty">
                    {children}
                </div>
            );
        }
    }, [children]);

    return (
        <div
            className={`flex items-start ${side == "left" && "self-start"} ${
                side == "right" && "self-end flex-row-reverse"
            } gap-2.5`}
        >
            {side == "left" && (
                <img className="w-10 h-10 rounded-full antialiased" src={src} />
            )}
            <div
                tabIndex={0}
                className={`flex flex-col w-full max-w-lg leading-1.5 p-4 rounded-xl bg-gray-100 dark:bg-neutral ${
                    side == "right"
                        ? "rounded-tr-none focus:-translate-x-3 focus:bg-opacity-100 focus:dark:bg-opacity-100 bg-opacity-30 dark:bg-opacity-30"
                        : "rounded-tl-none focus:translate-x-3 focus:bg-opacity-70 focus:dark:bg-opacity-70 bg-opacity-10 dark:bg-opacity-10"
                } focus:scale-105 duration-1000 transition-all`}
            >
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-primary">
                        {name}
                    </span>
                    <span className="text-sm font-normal text-gray-500 dark:text-secondary">
                        {formattedTime}
                    </span>
                </div>
                {renderChild}
            </div>
        </div>
    );
}
