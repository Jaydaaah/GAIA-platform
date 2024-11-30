import Card from "@/Components/Card/Card";
import PopupEffectDiv from "@/Components/Effects/PopupEffectDiv";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function DocsPage8() {
    // State to manage visibility of the descriptions for each limitation
    const [visibleDescription, setVisibleDescription] = useState(
        Array(limitations.length).fill(false)
    );

    const toggleDescription = (index: number) => {
        const newVisibility = [...visibleDescription];
        newVisibility[index] = !newVisibility[index];
        setVisibleDescription(newVisibility);
    };

    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Limitations
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {limitations.map((limitation, index) => (
                    <PopupEffectDiv key={`limitation-card-${index}`}>
                        <Card
                            className="flex flex-col items-center text-center"
                        >
                            <h3 className="text-2xl font-semibold text-secondary/80 mb-2">
                                {limitation.title}
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
                                            {limitation.description}
                                        </motion.p>
                                    </div>
                                )}
                            </AnimatePresence>
                            <button
                                onClick={() => toggleDescription(index)}
                                className="text-primary font-bold hover:text-yellow-700 transition-all"
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
                    While GAIA offers numerous benefits, it is important to
                    address its limitations, particularly in areas such as AI
                    capabilities, accessibility, and ethical considerations.
                </p>
            </footer>
        </div>
    );
}

const limitations = [
    {
        title: "AI Model Limitations",
        description:
            "Challenges in evaluating complex reasoning or problem-solving beyond text-based interactions.",
        image: "", // Replace with actual image URLs
    },
    {
        title: "Accessibility Issues",
        description:
            "Requires reliable internet and modern devices, potentially limiting user access.",
        image: "",
    },
    {
        title: "Subject Scope",
        description:
            "Primarily suitable for text-based subjects (e.g., language, history) and less applicable to hands-on disciplines (e.g., laboratory sciences, art).",
        image: "",
    },
    {
        title: "Network Challenges",
        description:
            "Real-time communication may suffer from network latency or server issues, affecting user experience.",
        image: "",
    },
    {
        title: "Ethical Concerns",
        description:
            "Biases in AI training data need monitoring to ensure fairness and transparency.",
        image: "",
    },
    {
        title: "Educator Involvement",
        description:
            "Essential for validating AI-generated results and providing personalized feedback.",
        image: "",
    },
];
