import ChatBubble from "@/Components/Chatbubble/Chatbubble";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import TypewriterComponent from "typewriter-effect";

export default function TypingResponse({
    syncResponse,
    tempStreamDonetext,
}: {
    syncResponse: () => void;
    tempStreamDonetext: string;
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
