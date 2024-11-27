export default function DocsPage2() {
    return (
        <div className="relative bg-white px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-yellow-600">
                Overview of Technology in Education
            </h1>

            {/* Section 1: Rise of Technology in Education */}
            <div className="mb-10 flex items-center justify-between">
                <div className="w-full md:w-1/2 pr-4">
                    <p className="text-xl text-gray-700 mb-6">
                        Technology in education has revolutionized learning,
                        especially for students facing exam anxiety.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="technology-in-education.jpg"
                        alt="Technology in Education"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Section 2: AI-driven Platforms & Assessment Tools */}
            <div className="mb-10 flex items-center justify-between">
                <div className="w-full md:w-1/2 pr-4">
                    <p className="text-xl text-gray-700 mb-6">
                        AI-powered tools like online proctoring and adaptive
                        assessments create less intimidating exam environments.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="ai-driven-assessment-tools.jpg"
                        alt="AI-driven Platforms"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Section 3: AI-Based Emotional Support */}
            <div className="mb-10 flex items-center justify-between">
                <div className="w-full md:w-1/2 pr-4">
                    <p className="text-xl text-gray-700 mb-6">
                        AI-based emotional support tools help balance academic
                        integrity with student well-being.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="ai-emotional-support.jpg"
                        alt="AI Emotional Support"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            <footer className="mt-12 text-center">
                <p className="text-lg text-gray-500">
                    Embracing these technologies fosters a more supportive
                    learning environment for students.
                </p>
            </footer>
        </div>
    );
}
