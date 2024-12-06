import { Button } from "@/Components/Button";
import ChatBubble from "@/Components/Chatbubble/Chatbubble";
import LiveTime from "@/Components/LiveTime";
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
    useEffect,
    useMemo,
    useState,
} from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
    const [temporaryEnd, setEnd] = useState(false);
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
        [data, onSuccess, post]
    );

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

    useEffect(() => {
        if (renderMessages.length <= 0) {
            setData("prompt", "Start");
        }
    }, [renderMessages]);

    return (
        <Authenticated
            header={
                <div className="flex flex-col">
                    <span className="font-extralight text-secondary">
                        <LiveTime />
                    </span>
                    <span className="text-sm">
                        temporary function: type "End" to end the chat
                    </span>
                </div>
            }
        >
            <Head title="Exam" />

            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl dark:text-primary pt-5">
                        Topic: Programming Languages and Execution Models
                    </h2>
                </div>

                {renderMessages.length > 0 ? (
                    <div className="flex-grow w-full max-w-4xl space-y-6 sm:px-6 lg:px-8 flex flex-col-reverse">
                        <ChatInput
                            value={data.prompt}
                            disabled={temporaryEnd}
                            processing={processing}
                            onSubmit={onSubmit}
                            onChange={({ target }) => {
                                setData("prompt", target.value);
                            }}
                        />
                        <div className="flex-grow flex flex-col-reverse gap-5 h-[75vh] overflow-x-hidden overflow-y-scroll px-5 scrollbar py-4">
                            {renderTypingResponse}
                            {renderMessages}
                        </div>
                    </div>
                ) : (
                    <div className="flex-grow flex items-center justify-center h-[70vh] flex-col">
                        {/* Instruction Text */}
                        <p className="text-lg text-white mb-4">
                            Click the "Start" button to begin the exam or the
                            quiz.
                        </p>

                        {/* Start Button */}

                        <Button
                            onClick={() => {
                                if (data.prompt == "Start") {
                                    post(route("exam.edit"), {
                                        onSuccess,
                                    });
                                }
                            }}
                        >
                            Start
                        </Button>
                    </div>
                )}
            </div>
        </Authenticated>
    );
}
