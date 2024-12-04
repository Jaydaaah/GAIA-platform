import { RiFeedbackFill } from "react-icons/ri";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { useCallback, useState } from "react";
import { BiRotateLeft } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
export default function DocsPage11() {
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
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Research Methodology
            </h1>
            <p className="text-xl text-gray-300 mb-6">
                <span className="bg-gray-300 text-background">Agile Methodology</span> is a flexible project management approach
                focusing on iterative development through sprints. GAIA uses
                Agile to incrementally design, test, and refine the platform,
                ensuring continuous improvement based on user feedback.
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
                            <span className="text-3xl font-bold">
                                {index + 1}.
                            </span>
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
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
                <p className="text-xl text-secondary">
                    Agile empowers GAIA to adapt quickly and meet user needs
                    effectively.
                </p>
            </footer>
        </div>
    );
}

const points = [
    {
        title: "Iterative Development",
        description:
            "Short sprints allow incremental design, testing, and refinement.",
        icon: <BiRotateLeft />,
    },
    {
        title: "User Feedback Integration",
        description:
            "Each sprint gathers input from educators and students to guide improvements.",
        icon: <RiFeedbackFill />,
    },
    {
        title: "Continuous Improvement",
        description:
            "Agile ensures GAIA evolves to reduce exam anxiety and enhance assessments.",
        icon: <MdOutlineSelfImprovement />,
    },
];
