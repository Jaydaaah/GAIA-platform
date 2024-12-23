export default function DocsPage5() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                General Objectives
            </h1>
            <ul className="list-disc list-inside text-xl text-gray-300 mb-6">
                {paragraphs.map((p, i) => (
                    <li key={`general-p-${i}`} tabIndex={0} className="mb-2 focus:text-background focus:bg-gray-300 focus:scale-105 rounded px-2 transition-all duration-1000 ">
                        <strong>{p}</strong>
                    </li>
                ))}
            </ul>
            <footer className="mt-12 text-center">
                <p className="text-lg text-secondary">
                    These objectives guide the development of GAIA platform’s
                    features and its approach to reducing exam anxiety while
                    improving student learning outcomes.
                </p>
            </footer>
        </div>
    );
}

const paragraphs = [
    "How can we develop an interactive and user-friendly conversational platform that engages students in meaningful dialogues for assessment and support?",
    "How to implement assessment tools that can accurately evaluate students' understanding and mastery of subjects through personalized questions and feedback?",
    "How to provide efficient tools for administering,grading, and giving feedback on student assessments to streamline the evaluation process?",
    "How can we leverage generative AI to deliver immediate,personalized feedback that helps students enhance their writing and analytical skills while addressing exam anxiety?",
    "How to create specific features of GAIA contribute to enhancing student performance in assessments?",
    "How does GAIA leverage generative AI to reduce exam anxiety among students?",
    "How to integrate GAIA platform into existing educational frameworks to maximize its effectiveness?",
    "How can GAIA platform provide personalized support to students who experience high levels of exam stress?",
    "How does GAIA’s feedback system help students build confidence and reduce anxiety?",
];
