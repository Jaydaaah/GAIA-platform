import { PropsWithChildren } from "react";

export default function ChatBubble({
    children,
    name,
    side,
    time,
}: PropsWithChildren<{ name: string; side: "left" | "right"; time: string }>) {
    return (
        <div
            className={`flex items-start ${side == "left" && "self-start"} ${
                side == "right" && "self-end flex-row-reverse"
            } gap-2.5 `}
        >
            <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
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
                        {time}
                    </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    {children}
                </p>
            </div>
        </div>
    );
}
