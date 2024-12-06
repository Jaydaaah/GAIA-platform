import GAIALogo from "@/Components/GAIALogo";
import {
    AnimatePresence,
    AnimationDefinition,
    motion,
    MotionConfig,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Entrance({
    onAnimationDone,
}: {
    onAnimationDone?: (definition: AnimationDefinition) => void;
}) {
    const [animationStage, setStage] = useState(0);

    return (
        <div
            className="flex w-screen h-screen overflow-hidden justify-center items-center bg-background"
        >
            <motion.div
                initial={{
                    scale: 0.5,
                    opacity: 0.5,
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    duration: 5,
                    ease: "anticipate",
                }}
                onAnimationComplete={(definition) => {
                    if (onAnimationDone) {
                        onAnimationDone(definition);
                    }
                    setStage(1);
                }}
            >
                <div className="flex items-center justify-center flex-wrap sm:flex-nowrap">
                    {/* Logo Section */}
                    <div className="w-[300px] md:w-[400px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px] z-10 relative">
                        {animationStage >= 2 && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 3,
                                    ease: "easeIn",
                                }}
                                className="w-full h-full absolute top-0 left-0 blur-sm -z-10 select-none"
                            >
                                <GAIALogo />
                            </motion.div>
                        )}
                        <GAIALogo />
                    </div>

                    {/* Text Section */}
                    {animationStage >= 1 && (
                        <motion.div
                            initial={{
                                x: "500%",
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                        >
                            <motion.div
                                initial={{
                                    width: 0,
                                }}
                                animate={{
                                    width: "fit-content",
                                }}
                                transition={{
                                    duration: 1,
                                }}
                                className="leading-none ml-8"
                            >
                                <motion.div
                                    initial={{
                                        x: "100%",
                                    }}
                                    animate={{
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: 1,
                                        duration: 1,
                                        ease: "backOut",
                                    }}
                                    onAnimationComplete={() => setStage(2)}
                                    className="relative"
                                >
                                    {animationStage >= 2 && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                            }}
                                            transition={{
                                                delay: 0.5,
                                                duration: 3,
                                                ease: "easeIn",
                                            }}
                                            className="absolute inset-0 blur text-primary opacity-75"
                                        >
                                            <h1 className="select-none font-commissioner text-[96px] sm:text-[120px] lg:text-[144px] xl:text-[192px] font-semibold tracking-tight animate-pulse">
                                                GAIA
                                            </h1>
                                        </motion.div>
                                    )}
                                    <h1 className="font-commissioner text-[96px] sm:text-[120px] lg:text-[144px] xl:text-[192px] font-semibold tracking-tight text-primary">
                                        GAIA
                                    </h1>
                                </motion.div>
                                <motion.h2
                                    initial={{
                                        x: "100%",
                                    }}
                                    animate={{
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: 1.08,
                                        duration: 1,
                                        ease: "backOut",
                                    }}
                                    className="font-lato font-light text-[38px] sm:text-[62px] lg:text-[86px] xl:text-[110px] tracking-wide italic ml-4 text-secondary"
                                >
                                    Platform
                                </motion.h2>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
