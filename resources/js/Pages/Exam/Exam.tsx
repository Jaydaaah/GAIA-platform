import ChatBubble from "@/Components/Chatbubble/Chatbubble";
import ChatInput from "@/Components/TextArea/ChatInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEvent, PropsWithChildren, useCallback, useMemo } from "react";

const testData: {
    side: "left" | "right";
    name: string;
    content: string;
    time: string;
}[] = [
    {
        side: "left",
        name: "Alice",
        content: "hello",
        time: "10:00 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "Hi there!",
        time: "10:01 AM",
    },
    {
        side: "left",
        name: "Alice",
        content: "How are you?",
        time: "10:02 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "I'm good, thanks! And you?",
        time: "10:03 AM",
    },
    {
        side: "left",
        name: "Alice",
        content: "What are you up to?",
        time: "10:04 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "Just working on a project.",
        time: "10:05 AM",
    },
    {
        side: "left",
        name: "Alice",
        content: "Sounds interesting!",
        time: "10:06 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "Yeah, it is! What about you?",
        time: "10:07 AM",
    },
    {
        side: "left",
        name: "Alice",
        content: "Not much, just relaxing.",
        time: "10:08 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "Nice! Any plans for the weekend?",
        time: "10:09 AM",
    },
    {
        side: "left",
        name: "Alice",
        content: "Thinking of going hiking.",
        time: "10:10 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "That sounds fun! Where to?",
        time: "10:11 AM",
    },
    {
        side: "left",
        name: "Alice",
        content: "Maybe to the national park.",
        time: "10:12 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "I've heard it's beautiful there.",
        time: "10:13 AM",
    },
    {
        side: "left",
        name: "Alice",
        content: "Yeah, the views are amazing!",
        time: "10:14 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "I should join you sometime!",
        time: "10:15 AM",
    },
    {
        side: "left",
        name: "Alice",
        content: "Definitely! The more, the merrier.",
        time: "10:16 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "Let's plan it out!",
        time: "10:17 AM",
    },
    {
        side: "left",
        name: "Alice",
        content: "Sounds like a plan!",
        time: "10:18 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "Cool, I can't wait!",
        time: "10:19 AM",
    },
    {
        side: "left",
        name: "Alice",
        content: "Me too! It's been a while since I went.",
        time: "10:20 AM",
    },
    {
        side: "right",
        name: "Bob",
        content: "Same here! Need to get back to nature.",
        time: "10:21 AM",
    },
];

export default function Exam({ auth }: PageProps) {
    const { data, setData, post, reset, processing, errors } = useForm({
        message: "",
    });

    const onSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
        },
        [data]
    );

    const reverseData = useMemo(() => {
        return testData.reverse();
    }, []);

    return (
        <Authenticated>
            <Head title="Exam" />
            <div className="flex-grow flex flex-col items-center pt-12">
                <div className="flex-grow w-full max-w-4xl space-y-6 sm:px-6 lg:px-8 flex flex-col-reverse">
                    <ChatInput
                        value={data.message}
                        processing={processing}
                        onSubmit={onSubmit}
                        onChange={({ target }) => {
                            setData("message", target.value);
                        }}
                    />
                    <div className="flex-grow flex flex-col-reverse gap-2 h-[75vh] overflow-x-hidden overflow-y-scroll px-5 scrollbar py-4">
                        {reverseData
                            .map(({ side, name, content, time }) => (
                                <ChatBubble side={side} name={name} time={time}>
                                    {content}
                                </ChatBubble>
                            ))}
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
