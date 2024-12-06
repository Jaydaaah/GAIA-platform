// File: ChatRenderer.js

import ChatBubble from "@/Components/Chatbubble/Chatbubble";
import { Chat } from "@/types/models";
import { useMemo } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TypewriterComponent from "typewriter-effect";

export function ChatRenderer({
    chats,
    avatar,
    tempStreamDonetext,
    syncResponse,
}: {
    chats: Chat[];
    avatar: {
        ai: string;
        you: string;
    };
    tempStreamDonetext: string;
    syncResponse: () => void;
}) {
    const renderMessages = useMemo(() => {
        return chats.map(({ side, message, created_at }, index) => {
            const name = side == "right" ? "You" : "AI";
            const time = new Date(created_at);

            const messageLower = message.toLowerCase().trim();

            if (name == "You" && messageLower == "end") {
                setEnd(true);
            }

            if (name != "You" || messageLower != "start") {
                return (
                    <ChatBubble
                        key={`chat-bubble-${created_at}-${index}`}
                        side={(side == "right" && "right") || "left"}
                        src={side == "right" ? avatar.you : avatar.ai}
                        name={name}
                        time={time}
                    >
                        <Markdown
                            remarkPlugins={[
                                [remarkGfm, { singleTilde: false }],
                            ]}
                        >
                            {message}
                        </Markdown>
                    </ChatBubble>
                );
            }
        });
    }, [chats]);

    const renderTypingResponse = useMemo(() => {
        if (tempStreamDonetext) {
            return (
                <ChatBubble
                    key={`chat-bubble-${Date.now()}`}
                    side="left"
                    src={avatar.ai}
                    name="AI"
                    time={new Date()}
                >
                    <TypewriterComponent
                        onInit={(typewriter) =>
                            typewriter
                                .start()
                                .changeDelay(30)
                                .typeString(tempStreamDonetext)
                                .callFunction(() => {
                                    syncResponse();
                                })
                        }
                    />
                </ChatBubble>
            );
        }
    }, [tempStreamDonetext]);

    return (
        <div className="flex-grow flex flex-col-reverse gap-5 h-[75vh] overflow-x-hidden overflow-y-scroll px-5 scrollbar py-4">
            {renderTypingResponse}
            {renderMessages}
        </div>
    );
}
