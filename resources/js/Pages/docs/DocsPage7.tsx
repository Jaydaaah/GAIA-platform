import Card from "@/Components/Card/Card";
import PopupEffectDiv from "@/Components/Effects/PopupEffectDiv";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function DocsPage7() {
    // State to manage visibility of the descriptions for each feature
    const [visibleDescription, setVisibleDescription] = useState(
        Array(features.length).fill(false)
    );

    const toggleDescription = (index: number) => {
        const newVisibility = [...visibleDescription];
        newVisibility[index] = !newVisibility[index];
        setVisibleDescription(newVisibility);
    };

    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Scope of the Project
            </h1>
            <p className="text-xl text-gray-300 mb-6">
                This project aims to develop a web-based platform using Laravel
                to support AI-driven conversational assessments, helping
                students manage exam anxiety and improve academic performance.
                Key features include an Admin Dashboard for educators to monitor
                student progress and performance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <PopupEffectDiv key={`feature-card-${index}`}>
                        <Card className="flex flex-col items-center text-center">
                            <h3 className="text-2xl font-semibold text-secondary/80 mb-2">
                                {feature.title}
                            </h3>
                            {/* Toggle the description visibility */}
                            <AnimatePresence>
                                {visibleDescription[index] && (
                                    <div className="overflow-hidden">
                                        <motion.p
                                            initial={{
                                                height: 0,
                                            }}
                                            animate={{
                                                height: 100,
                                            }}
                                            exit={{
                                                height: 0,
                                            }}
                                            className="text-xl text-gray-300 mb-4"
                                        >
                                            {feature.description}
                                        </motion.p>
                                    </div>
                                )}
                            </AnimatePresence>
                            <button
                                onClick={() => toggleDescription(index)}
                                className="text-primary font-bold hover:text-secondary transition-all"
                            >
                                {visibleDescription[index]
                                    ? "Show Less"
                                    : "Learn More"}
                            </button>
                        </Card>
                    </PopupEffectDiv>
                ))}
            </div>

            <footer className="mt-12 text-center">
                <p className="text-lg text-secondary">
                    The scope defines the primary features of the GAIA platform,
                    focusing on enhancing student performance while providing
                    educators with the necessary tools to monitor and support
                    progress.
                </p>
            </footer>
        </div>
    );
}

const features = [
    {
        title: "Chat-like Interface",
        description:
            "A chat-like interface for students to interact with the AI for academic assessment.",
        image: "", // Replace with actual image URLs
    },
    {
        title: "Educator Dashboard",
        description:
            "An educator dashboard that allows educators to review AI-generated assessments, monitor student performance, and provide feedback.",
        image: "",
    },
    {
        title: "Real-time Communication",
        description:
            "Real-time communication between the AI and students, utilizing WebSockets or a similar real-time technology.",
        image: "",
    },
    {
        title: "Advanced NLP Models",
        description:
            "Integration of advanced NLP models like GPT-4o-mini, Claude Haikyu, or Gemini Flash 1.5 to handle conversations and generate assessments.",
        image: "",
    },
    {
        title: "Student Data Collection",
        description:
            "The collection of student interaction data for performance tracking and AI evaluation.",
        image: "",
    },
];
