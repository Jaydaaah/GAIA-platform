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
    "To create assessment modules that allow students to engage in dynamic dialogues with the AI, where they can explore questions, receive supportive hints, and delve deeper into concepts, thereby transforming assessments into a collaborative and less intimidating experience.",
    "To create low-stakes assessments that simulate real exam conditions but are designed to be supportive and informative, allowing students to build confidence without the pressure of grading.",
    "To design dashboards that summarize student performance data, highlighting trends and areas for improvement, thus allowing educators to make informed decisions without sifting through individual submissions.",
    "To use LLMs to generate tailored feedback reports that summarize a student’s strengths and weaknesses, offering targeted resources for improvement specific to their work.",
    "To create comprehensive guidelines that outline best practices for educators to incorporate GAIA into their lesson plans and assessment strategies.",
    "To provide prompts that encourage students to express their thoughts, such as “What are your views on [topic] and why?” This invites more personal engagement.",
    "To provide positive feedback on students' efforts, like GAIA complementing the students' answers on the exam, it reinforces the belief that hard work leads to success. This motivation encourages them to take on new challenges, as they feel more capable and supported.",
];
