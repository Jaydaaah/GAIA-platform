export default function DocsPage6() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Specific Objectives
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
                    These specific objectives define the approach for developing
                    GAIA's features and how it aims to positively influence both
                    student learning and educator effectiveness.
                </p>
            </footer>
        </div>
    );
}

const paragraphs = [
    "To create assessment modules for dynamic AI-student dialogues to make learning collaborative and less intimidating.",
    "To develop low-stakes, exam-like assessments to build student confidence in a supportive way.",
    "To design dashboards that summarize student performance for educators, highlighting trends and improvement areas.",
    "To use LLMs to generate feedback reports summarizing strengths, weaknesses, and targeted improvement resources.",
    "To create guidelines to help educators integrate GAIA into lesson plans and assessments effectively.",
    "To provide prompts that encourage personal student engagement and expression, such as open-ended questions.",
    "To offer positive feedback to reinforce effort and motivate students to tackle challenges confidently."
];
