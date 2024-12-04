import { useRef } from "react";
import { useInView } from "framer-motion";
import TypewriterComponent from "typewriter-effect";

export default function DocsPage14() {
    const divRef = useRef<HTMLDivElement>(null);
    const IsInView = useInView(divRef, { once: true });

    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Calendar of Activities
            </h1>
            <div
                ref={divRef}
                className="text-xl text-gray-300 mb-6 text-justify"
            >
                {IsInView && (
                    <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter
                                .start()
                                .changeDelay(10)
                                .typeString(
                                    `The GAIA Project provides a clear, sequential guide to ensure teamwork, feedback, and ethical practices deliver high-quality, inclusive results. Stakeholder input is central to maintaining relevance and progress.`
                                );
                        }}
                    />
                )}
            </div>

            <footer className="mt-12 text-center">
                <p className="text-lg text-secondary">
                    This collaborative approach ensures milestones are achieved
                    effectively.
                </p>
            </footer>
        </div>
    );
}
