import {
    KeyboardEvent,
    PropsWithChildren,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import Spinner, { SpinnerSize } from "../Spinner/Spinner";
import { motion, useAnimationControls } from "framer-motion";

export default function ChatInput({
    className = "",
    children,
    processing,
    value,
    onChange,
    onSubmit,
}: PropsWithChildren<{
    className?: string;
    processing?: boolean;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}>) {
    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [textHasFocus, setHasFocus] = useState(false);
    const divMotion = useAnimationControls();

    useEffect(() => {
        divMotion.start({
            y: textHasFocus ? 1 : 10,
            scale: textHasFocus ? 1 : 0.998,
            opacity: textHasFocus ? 1 : 0.9,
        });
    }, [textHasFocus]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = "inherit";
            const scrollHeight = inputRef.current?.scrollHeight;
            inputRef.current.style.height = `${Math.min(scrollHeight, 540)}px`;
        }
    }, [value]);

    const keyPressHandler = useCallback(
        (event: KeyboardEvent<HTMLTextAreaElement>) => {
            const {shiftKey, key} = event;
            if (!shiftKey && key == "Enter") {
                formRef.current?.requestSubmit();
                event.preventDefault();
            }
        },
        []
    );

    return (
        <div className="overflow-hidden">
            <motion.div
                transition={{ ease: "anticipate" }}
                animate={divMotion}
                className="overflow-hidden"
            >
                <motion.form
                    initial={{
                        y: 200,
                    }}
                    animate={{
                        y: 0,
                    }}
                    transition={{
                        ease: "anticipate",
                        duration: 1,
                    }}
                    ref={formRef}
                    className={className}
                    onSubmit={onSubmit}
                >
                    <label htmlFor="chat" className="sr-only">
                        Your message
                    </label>
                    <div className="flex items-center px-3 py-2 pb-8 rounded-t-lg bg-gray-50 shadow-lg dark:bg-background dark:shadow-neutral border-0 border-b-0">
                        <textarea
                            id="chat"
                            ref={inputRef}
                            rows={1}
                            maxLength={1000}
                            className="overflow-hidden block mr-3 p-2.5 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-neutral focus:border-neutral dark:bg-background dark:border-neutral dark:placeholder-text-primary dark:text-white"
                            placeholder="Your message..."
                            onChange={onChange}
                            onKeyDown={keyPressHandler}
                            onFocus={() => setHasFocus(true)}
                            onBlur={() => setHasFocus(false)}
                            value={value}
                        ></textarea>
                        <button
                            type="submit"
                            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-primary dark:hover:bg-neutral/50"
                            disabled={processing}
                        >
                            {!processing ? (
                                <svg
                                    className="w-5 h-5 rotate-90 rtl:-rotate-90"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 20"
                                >
                                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                                </svg>
                            ) : (
                                <Spinner size={SpinnerSize.small} />
                            )}

                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </motion.form>
            </motion.div>
        </div>
    );
}
