export default function DocsPage2b() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Project Rationale
            </h1>
            <p className="text-lg text-gray-300 mb-6">
                This study addresses exam anxiety in students, which harms both their academic performance and mental health. 
                Traditional methods have not been effective in reducing this anxiety. The study aims to explore how AI-based 
                platforms can provide personalized, real-time support during exam preparation, helping to reduce anxiety, improve academic success, 
                and enhance emotional well-being.
            </p>

            <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
                Key Points
            </h2>

            <ul className="list-disc list-inside text-xl text-gray-300 mb-6">
                {keyPoints.map((point, i) => (
                    <li 
                        key={`keypoint-${i}`} 
                        tabIndex={0} 
                        className="mb-2 focus:text-background focus:bg-gray-300 focus:scale-105 rounded px-2 transition-all duration-1000"
                    >
                        <strong>{point}</strong>
                    </li>
                ))}
            </ul>

            <footer className="mt-12 text-center">
                <p className="text-lg text-secondary">
                    The study aims to demonstrate how AI platforms can help students manage their anxiety and improve overall academic performance, 
                    offering significant potential for enhancing emotional well-being.
                </p>
            </footer>
        </div>
    );
}

const keyPoints = [
    "Exam anxiety impacts performance and mental health.",
    "Traditional methods have limited effectiveness.",
    "The study will explore AI platforms for personalized support.",
    "Potential benefits: Reduced anxiety, improved grades, and better emotional well-being."
];
