import ChatBubble from "@/Components/Chatbubble/Chatbubble";
import StreamingText from "@/Components/Stream/StreamingText";
import ChatInput from "@/Components/TextArea/ChatInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { GrogStreamPrompt, GroqPrompt } from "@/lib/Groq-api";
import { PageProps } from "@/types";
import { Chat } from "@/types/models";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import axios from "axios";
import {
    FormEvent,
    PropsWithChildren,
    useCallback,
    useMemo,
    useState,
} from "react";
import TypewriterComponent from "typewriter-effect";

export default function Exam({
    auth,
    chats,
    api,
    avatar,
}: PageProps<{
    chats: Chat[];
    api: {
        key: string;
        provider: string;
    };
    avatar: {
        ai: string;
        you: string;
    };
}>) {
    const [tempStreamDonetext, setTempStreamDonetext] = useState("");
    const { data, setData, post, reset, processing, errors } = useForm({
        prompt: "",
    });

    const syncResponse = useCallback(() => {
        axios
            .post(route("exam.ai.sync"), {
                data: {
                    message: tempStreamDonetext,
                },
            })
            .finally(() => {
                setTempStreamDonetext("");
                router.reload();
            });
    }, [tempStreamDonetext]);

    const onSuccess = useCallback(async () => {
        const response = await GroqPrompt(data.prompt, chats);
        setTempStreamDonetext(response);
        reset("prompt");
    }, [data, chats]);

    const onSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (data.prompt.length > 0) {
                post(route("exam.edit"), {
                    onSuccess,
                });
            }
        },
        [data, onSuccess]
    );

    const renderMessages = useMemo(() => {
        return chats.map(({ side, message, created_at }, index) => {
            const name = side == "right" ? "me" : "AI";
            const time = new Date(created_at);

            return (
                <ChatBubble
                    key={`chat-bubble-${created_at}-${index}`}
                    side={(side == "right" && "right") || "left"}
                    src={side == "right" ? avatar.you : avatar.ai}
                    name={name}
                    time={time}
                >
                    {message}
                </ChatBubble>
            );
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
        <Authenticated>
            <Head title="Exam" />
            <div className="flex-grow flex flex-col items-center">
                <div className="flex-grow w-full max-w-4xl space-y-6 sm:px-6 lg:px-8 flex flex-col-reverse">
                    <ChatInput
                        value={data.prompt}
                        processing={processing}
                        onSubmit={onSubmit}
                        onChange={({ target }) => {
                            setData("prompt", target.value);
                        }}
                    />
                    <div className="flex-grow flex flex-col-reverse gap-2 h-[80vh] overflow-x-hidden overflow-y-scroll px-5 scrollbar py-4">
                        {renderTypingResponse}
                        {renderMessages}
                    </div>
                </div>
                {/* <div className="flex-grow w-full max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        Hello World
                    </div>
                </div> */}
            </div>
        </Authenticated>
    );
}
