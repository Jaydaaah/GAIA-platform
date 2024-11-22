import { useCallback, useEffect, useRef, useState } from "react";

interface props {
    delay_ms?: number;
    children: AsyncGenerator<string, void, unknown>;
    timestamp: number;
    onDoneStreaming?: (
        children: AsyncGenerator<string, void, unknown>,
        timestamp: number,
        finalText: string
    ) => void;
}

export default function StreamingText({
    delay_ms,
    timestamp,
    children,
    onDoneStreaming,
}: props) {
    const isMounted = useRef(false);
    const [doneStream, setDoneStream] = useState<boolean | null>(null);
    const [text, setText] = useState("");

    const triggerUpdate = useCallback(async () => {
        setDoneStream(false);
        for await (const chunk of children) {
            for (const letter of chunk) {
                setTimeout(() => {
                    setText((prev) => prev + letter);
                }, delay_ms ?? 100);
            }
        }
        setDoneStream(true);
    }, [children, delay_ms]);

    useEffect(() => {
        if (doneStream && onDoneStreaming) {
            onDoneStreaming(children, timestamp, text);
        }
    }, [doneStream, text, timestamp, children]);

    useEffect(() => {
        if (doneStream == null && !isMounted.current) {
            isMounted.current = true;
            setText("");
            triggerUpdate();
        }
    }, [children]);

    return <>{text}</>;
}
