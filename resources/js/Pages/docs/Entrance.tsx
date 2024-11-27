import GAIALogo from "@/Components/GAIALogo";
import { motion } from "framer-motion";

export default function Entrance() {
    return (
        <div className="flex h-screen overflow-hidden justify-center items-center">
            <motion.div
                initial={{
                    scale: 0.5,
                    opacity: 0.5
                }}
                animate={{
                    scale: 1,
                    opacity: 1
                }}
                transition={{
                    duration: 5,
                    ease: "anticipate"
                }}
                className=" w-[800px]">
                <GAIALogo />
            </motion.div>
        </div>
    );
}
