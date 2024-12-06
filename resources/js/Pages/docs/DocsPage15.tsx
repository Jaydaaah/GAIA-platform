import { BsDot } from "react-icons/bs";
import { FcProcess } from "react-icons/fc";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdFeedback, MdOutlineDeveloperMode } from "react-icons/md";
import { BiTargetLock, BiCheckShield } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DocsPage15() {
    const [phaseFocus, setPhaseFocus] = useState(phases.map(() => false));

    const phaseFocusHandler = useCallback((focus: boolean, index: number) => {
        return () => {
            setPhaseFocus((prev) =>
                prev.map((item, i) => (index === i ? focus : item))
            );
        };
    }, []);

    const renderLi = useCallback(
        (
            phase: {
                title: string;
                description: string;
                icon: JSX.Element;
            },
            index: number,
            isRight = false
        ) => {
            return (
                <li
                    key={index}
                    tabIndex={0}
                    className={`flex items-start space-x-4 px-2 transition-all duration-500 rounded focus:bg-primary focus:text-background focus:scale-105  ${
                        isRight && "text-right"
                    }`}
                    onFocus={phaseFocusHandler(true, index)}
                    onBlur={phaseFocusHandler(false, index)}
                >
                    {!isRight && (
                        <span className="text-3xl font-bold">{index + 1}.</span>
                    )}
                    <div>
                        <h2 className={`text-2xl font-semibold mb-2`}>
                            {phase.title}
                        </h2>
                        <p className={`text-sm`}>{phase.description}</p>
                    </div>
                    {isRight && (
                        <span className="text-3xl font-bold">.{index + 1}</span>
                    )}
                </li>
            );
        },
        []
    );

    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Project Phases
            </h1>
            <div className="flex flex-col md:flex-row">
                <ul className="md:w-2/3 space-y-6">
                    {phases
                        .slice(0, 4)
                        .map((phase, index) => renderLi(phase, index))}
                </ul>
                <ul className="md:w-2/3 space-y-6">
                    {phases
                        .slice(4)
                        .map((phase, index) => renderLi(phase, index + 4))}
                </ul>
                <div className="md:w-1/3 flex justify-center items-center relative mt-8 md:mt-0 pl-16">
                    <AnimatePresence>
                        {phaseFocus.map((visible, index) => {
                            if (visible) {
                                return (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            y: "-100%",
                                            opacity: 0,
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1,
                                        }}
                                        exit={{
                                            y: "-100%",
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut",
                                        }}
                                        className="text-[9rem] absolute text-primary"
                                    >
                                        {phases[index].icon}
                                    </motion.span>
                                );
                            }
                        })}
                    </AnimatePresence>
                </div>
            </div>
            <footer className="mt-12 text-center">
                <p className="text-xl text-secondary">
                    Each phase is critical to ensuring GAIA's success and
                    alignment with educational goals.
                </p>
            </footer>
        </div>
    );
}

const phases = [
    {
        title: "Concept Phase",
        description:
            "Defines GAIA's core vision and goals, identifies educational challenges like exam anxiety, and outlines objectives such as enhancing engagement and providing personalized feedback.",
        icon: <BiTargetLock />,
    },
    {
        title: "Planning Phase (Sprint 0)",
        description:
            "Establishes the roadmap, creates user stories and product backlog, and sets sprint goals to prioritize key features aligned with GAIA's vision.",
        icon: <BiCheckShield />,
    },
    {
        title: "Development Phase (Iterations)",
        description:
            "Builds GAIA’s core features in iterative sprints, focusing on AI feedback models and interactive modules, refining each feature based on continuous testing.",
        icon: <MdOutlineDeveloperMode />,
    },
    {
        title: "Testing Phase",
        description:
            "Validates GAIA’s functionalities through user acceptance testing (UAT), evaluating AI-generated content’s accuracy and effectiveness in reducing anxiety and improving learning outcomes.",
        icon: <FiSettings />,
    },
    {
        title: "Review/Feedback Phase",
        description:
            "Collects and analyzes feedback from pilot users to refine GAIA’s features, ensuring alignment with educational objectives and assessing its impact on student performance and anxiety.",
        icon: <MdFeedback />,
    },
    {
        title: "Delivery Phase",
        description:
            "Deploys GAIA in educational settings, providing training and documentation to ensure smooth integration and effective use in real-world classrooms.",
        icon: <IoRocketOutline />,
    },
    {
        title: "Maintenance Phase",
        description:
            "Monitors GAIA’s performance, releases regular updates to enhance features, and incorporates ongoing user feedback to maintain its relevance and effectiveness.",
        icon: <FaChalkboardTeacher />,
    },
];
