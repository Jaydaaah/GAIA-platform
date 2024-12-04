import { BsFullscreen } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";
import { BiFullscreen } from "react-icons/bi";
import { motion, useInView, useScroll } from "framer-motion";
import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

export default function DocsPageSlide({
    children,
    autoSnap,
    setAutoSnap,
}: PropsWithChildren<{
    autoSnap?: boolean;
    setAutoSnap?: Dispatch<SetStateAction<boolean>>;
}>) {
    const divRef = useRef<HTMLDivElement>(null);
    useScroll
    const IsInView = useInView(divRef);

    const snapSlide = useCallback(() => {
        divRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (IsInView && !!autoSnap) {
                snapSlide();
            }
        }, 1000);
        return () => clearTimeout(timeout);
    }, [IsInView, autoSnap]);

    return (
        <motion.div
            ref={divRef}
            initial={{
                opacity: 0.5,
                x: -200,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.8,
            }}
            className="w-screen min-h-screen flex flex-col justify-center relative"
        >
            <div className="absolute top-5 right-10">
                <button
                    onClick={() => {
                        if (setAutoSnap) {
                            setAutoSnap((prev) => !prev);
                        }
                    }}
                    title={`Auto Snap: ${autoSnap ? "ON" : "OFF"}`}
                >
                    {autoSnap ? <BsFullscreenExit /> : <BsFullscreen />}
                </button>
            </div>
            {children}
        </motion.div>
    );
}