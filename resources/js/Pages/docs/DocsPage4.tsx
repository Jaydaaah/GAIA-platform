import { useInView } from "framer-motion";
import { useRef } from "react";
import TypewriterComponent from "typewriter-effect";

export default function DocsPage4() {
    const divRef = useRef<HTMLDivElement>(null);
    const IsInView = useInView(divRef, { once: true });

    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Proposed Research Project
            </h1>
            <div ref={divRef} className="text-xl text-gray-300 mb-6 text-justify">
                {IsInView && (
                    <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter.start().changeDelay(10)
                                .typeString(`The GAIA platform reduces exam anxiety by providing
                personalized, interactive learning through conversational and
                generative AI. Students engage in low-stakes, AI-driven
                assessments with adaptive feedback, promoting understanding and
                highlighting strengths and areas for improvement. Simulated
                exams replicate test conditions but focus on learning rather
                than high-stakes grading. GAIA also offers personalized writing
                and analytical support. Educators benefit from a dashboard that
                tracks student progress and performance trends, facilitating
                balanced automated and human feedback. By promoting positive
                reinforcement and reducing stress, GAIA helps students build
                confidence and enhance academic performance.`);
                        }}
                    />
                )}
            </div>
            <footer className="mt-12 text-center">
                <p className="text-lg text-secondary">
                    This platform aims to transform traditional assessment
                    methods and support students’ academic journey through
                    innovative AI-driven solutions.
                </p>
            </footer>
        </div>
    );
}
