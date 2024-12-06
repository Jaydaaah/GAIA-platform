import ChatInput from "@/Components/TextArea/ChatInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { GroqPrompt } from "@/lib/Groq-api";
import { PageProps } from "@/types";
import { Chat } from "@/types/models";
import { Head, router, useForm } from "@inertiajs/react";
import axios from "axios";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import RenderedMessage from "./partial/RenderedMessage";
import ExamStart from "./partial/ExamStart";
import TypingResponse from "./partial/TypingResponse";
import ExamHeader from "./partial/ExamHeader";

export default function Exam({
    chats,
}: PageProps<{
    chats: Chat[];
    api: {
        key: string;
        provider: string;
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
            const messageLower = message.toLowerCase().trim();

            const time = new Date(created_at);

            if (name == "You" && messageLower == "end") {
                setEnd(true);
            }
            return (
                <RenderedMessage
                    key={`message-${index}`}
                    message={message}
                    side={(side == "right" && "right") || "left"}
                    time={time}
                />
            );
        });
    }, [chats]);

    const renderTypingResponse = useMemo(() => {
        if (tempStreamDonetext) {
            return (
                <TypingResponse
                    syncResponse={syncResponse}
                    tempStreamDonetext={tempStreamDonetext}
                />
            );
        }
    }, [tempStreamDonetext, syncResponse]);

    useEffect(() => {
        if (renderMessages.length <= 0) {
            setData("prompt", "Start");
        }
    }, [renderMessages]);

    return (
        <Authenticated header={<ExamHeader />}>
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
                    <ExamStart
                        onClick={() => {
                            if (data.prompt == "Start") {
                                post(route("exam.edit"), {
                                    onSuccess,
                                });
                            }
                        }}
                    />
                )}
            </div>
        </Authenticated>
    );
}
