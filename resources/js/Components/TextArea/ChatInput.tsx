import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
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
            const scrollHeight = inputRef.current?.scrollHeight
            inputRef.current.style.height = `${Math.min(scrollHeight, 540)}px`;
        }
    }, [value]);

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
                    className={className}
                    onSubmit={onSubmit}
                >
                    <label htmlFor="chat" className="sr-only">
                        Your message
                    </label>
                    <div className="flex items-center px-3 py-2 pb-8 rounded-t-lg bg-gray-50 dark:bg-gray-700">
                        <textarea
                            id="chat"
                            ref={inputRef}
                            rows={1}
                            className="overflow-hidden block mr-3 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your message..."
                            onChange={onChange}
                            onFocus={() => setHasFocus(true)}
                            onBlur={() => setHasFocus(false)}
                            value={value}
                        ></textarea>
                        <button
                            type="submit"
                            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
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
