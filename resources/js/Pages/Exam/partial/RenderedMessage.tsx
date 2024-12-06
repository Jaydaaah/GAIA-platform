import ChatBubble from "@/Components/Chatbubble/Chatbubble";
import { PageProps } from "@/types";
import { Chat } from "@/types/models";
import { usePage } from "@inertiajs/react";
import { useMemo } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function RenderedMessage({
    side,
    time,
    message,
}: {
    side: "left" | "right";
    time: Date;
    message: string;
}) {
    const { props } = usePage<
        PageProps<{
            avatar: {
                ai: string;
                you: string;
            };
        }>
    >();

    const { avatar } = props;

    const name = useMemo(() => {
        return side == "right" ? "You" : "AI";
    }, [side]);

    if (message.toLowerCase().trim() != "start") {
        return (
            <ChatBubble
                side={side}
                src={name == "AI" ? avatar.ai : avatar.you}
                name={name}
                time={time}
            >
                <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
                    {message}
                </Markdown>
            </ChatBubble>
        );
    }
}
