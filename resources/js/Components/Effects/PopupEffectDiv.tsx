import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function PopupEffectDiv({
    children,
    className,
    scaleAdd = 0.05,
}: PropsWithChildren<{ className?: string; scaleAdd?: number }>) {
    return (
        <motion.div
            initial={{
                scale: 1,
            }}
            whileHover={{
                scale: 1 + scaleAdd,
            }}
            transition={{
                duration: 1,
                delay: 0.1,
                ease: "anticipate",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
