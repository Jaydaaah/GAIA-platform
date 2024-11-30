import { useInView } from "framer-motion";
import { useRef } from "react";
import TypewriterComponent from "typewriter-effect";

export default function DocsPage9() {
    const divRef = useRef<HTMLDivElement>(null);
    const IsInView = useInView(divRef, { once: true });

    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Overview of the Methodology
            </h1>
            <div
                ref={divRef}
                className="text-xl text-gray-300 mb-6 text-justify"
            >
                {IsInView && (
                    <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter.start().changeDelay(10)
                                .typeString(`This research involves developing an AI-driven assessment
                platform to reduce exam anxiety and enhance student performance.
                The methodology includes selecting an AI model from providers
                like OpenAI, Anthropic, or Google, followed by system design,
                implementation, and user testing. These phases ensure the
                platform's effectiveness and integrity through thorough
                evaluation.`);
                        }}
                    />
                )}
            </div>

            <footer className="mt-12 text-center">
                <p className="text-lg text-secondary">
                    This approach ensures the development of a robust and
                    reliable platform.
                </p>
            </footer>
        </div>
    );
}
