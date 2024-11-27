export default function DocsPage19() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Evaluation Phase: Post-Exam Rating System
            </h1>
            <p className="text-xl text-gray-300 mb-6">
                <strong>Objective:</strong> Provide students with immediate
                ratings based on their exam performance through interactive
                conversation.
            </p>
            <p className="text-xl text-gray-300 mb-6">
                <strong>Trigger:</strong> A pop-up window appears after students
                complete their conversational exams.
            </p>
            <p className="text-xl text-gray-300 mb-6">
                <strong>Format:</strong> A chatbot engages students in a
                friendly manner, guiding them through the rating process.
            </p>

            <h2 className="text-4xl font-semibold mb-6 text-primary">
                Conversation Structure:
            </h2>
            <ol className="list-decimal list-inside text-xl text-gray-300 mb-6 space-y-4">
                <li>
                    <strong>Greeting and Acknowledgment:</strong> The chatbot
                    thanks the student for completing the exam and expresses
                    interest in their performance.
                </li>
                <li>
                    <strong>Rating Prompt:</strong> "On a scale from 1 to 5, how
                    would you rate your experience during the exam? (1 being
                    poor, 5 being excellent)"
                </li>
                <li>
                    <strong>Follow-Up Questions:</strong>
                    <ul className="list-disc list-inside text-xl text-gray-300 space-y-2">
                        <li>
                            <strong>1-2:</strong> "I'm sorry to hear that!"
                        </li>
                        <li>
                            <strong>3:</strong> "Thank you so much for your
                            feedback! I truly appreciate it."
                        </li>
                        <li>
                            <strong>4-5:</strong> "Oh, that’s amazing! I’m
                            really glad to hear it!"
                        </li>
                    </ul>
                </li>
            </ol>

            <div className="mt-10 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Rate Your Experience
                </h3>
                <div className="flex justify-center space-x-2">
                    {/* Star Rating System */}
                    <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-gray-300">★</span>
                    </div>
                </div>
                <p className="mt-4 text-lg text-gray-600">
                    Your feedback helps improve our platform!
                </p>
            </div>
        </div>
    );
}
