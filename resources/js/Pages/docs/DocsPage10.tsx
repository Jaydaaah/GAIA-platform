import { GiArchiveResearch } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { GiProcessor } from "react-icons/gi";
import { FcProcess } from "react-icons/fc";
import { AnimatePresence, motion } from "framer-motion";
import { p } from "framer-motion/client";
import { useState, useCallback } from "react";
import { BiRotateLeft } from "react-icons/bi";

export default function DocsPage10() {
    const [pointFocus, setPointFocus] = useState(points.map(() => false));

    const pointFocusHandler = useCallback((focus: boolean, index: number) => {
        return () => {
            setPointFocus((prev) =>
                prev.map((item, i) => {
                    if (index == i) {
                        return focus;
                    }
                    return item;
                })
            );
        };
    }, []);

    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Research Design
            </h1>
            <p className="text-xl text-gray-300 mb-6">
                <span className="bg-gray-300 text-background">GAIA</span> is a
                platform utilizing generative AI technology to enhance student
                assessments, providing personalized, interactive experiences to
                alleviate exam anxiety and improve learning outcomes. It
                combines Design-Based Research and Agile methodology for
                practical application.
            </p>
            <div className="flex">
                <ul className="w-2/3 space-y-6">
                    {points.map((point, index) => (
                        <li
                            key={index}
                            tabIndex={0}
                            className="flex items-start space-x-4 px-2 transition-all duration-1000 rounded focus:bg-primary focus:text-background focus:scale-105"
                            onFocus={pointFocusHandler(true, index)}
                            onBlur={pointFocusHandler(false, index)}
                        >
                            <span className="text-2xl font-bold">
                                {index + 1}.
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">
                                    {point.title}
                                </h2>
                                <p className="text-lg">{point.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="w-1/3 flex justify-center items-center relative">
                    <AnimatePresence>
                        {pointFocus.map((visible, index) => {
                            if (visible) {
                                return (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            x: "100%",
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x: 0,
                                            opacity: 1,
                                        }}
                                        exit={{
                                            x: "100%",
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeInOut",
                                        }}
                                        className="text-[120pt] absolute"
                                    >
                                        {points[index].icon}
                                    </motion.span>
                                );
                            }
                        })}
                    </AnimatePresence>
                </div>
            </div>
            <footer className="mt-12 text-center">
                <p className="text-xl font-medium text-secondary">
                    GAIA's iterative approach drives innovation in assessments
                    and fosters better educational outcomes.
                </p>
            </footer>
        </div>
    );
}
const points = [
    {
        title: "Design-Based Research (DBR)",
        description:
            "An iterative process involving design, testing, and refinement in real-world educational environments.",
        icon: <GiArchiveResearch />,
    },
    {
        title: "Development Process",
        description:
            "Ongoing testing and feedback ensure alignment with the needs of students and educators.",
        icon: <GiProcessor />,
    },
    {
        title: "Classroom Testing",
        description:
            "Measures impacts on student engagement, academic performance, and exam anxiety.",
        icon: <SiGoogleclassroom />,
    },
    {
        title: "Practical & Theoretical Outcomes",
        description:
            "Addresses real-world challenges while advancing educational theory.",
        icon: <AiFillProject />,
    },
];
p;
