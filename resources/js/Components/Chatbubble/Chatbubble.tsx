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
        return time.toLocaleTimeString();
    }, [time]);

    const renderChild = useMemo(() => {
        if (typeof children == "string") {
            return (
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    {children}
                </p>
            );
        } else {
            return (
                <div className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    {children}
                </div>
            );
        }
    }, [children]);

    return (
        <div
            className={`flex items-start ${side == "left" && "self-start"} ${
                side == "right" && "self-end flex-row-reverse"
            } gap-2.5 `}
        >
            <img
                className="w-10 h-10 rounded-full antialiased"
                src={src}
                alt="Jese image"
            />
            <div
                className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl ${
                    side == "right" ? "rounded-tr-none" : "rounded-tl-none"
                } dark:bg-gray-700`}
            >
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {name}
                    </span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {formattedTime}
                    </span>
                </div>
                {renderChild}
            </div>
        </div>
    );
}
