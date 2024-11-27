export default function DocsPage14() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                AI Integration
            </h1>
            <p className="text-xl text-gray-300 mb-6 text-center">
                The AI model is integrated through API routes, processing
                requests in real-time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-neutral p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                        API Integration
                    </h3>
                    <p className="text-lg text-gray-300">
                        Laravel API routes handle requests to external AI
                        services, ensuring seamless communication.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-neutral p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                        Real-Time Processing
                    </h3>
                    <p className="text-lg text-gray-300">
                        Incoming messages are processed in real-time, providing
                        immediate responses from the AI model.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-neutral p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                        AI Models Integration
                    </h3>
                    <p className="text-lg text-gray-300 mb-4">
                        The platform integrates various AI models to provide
                        diverse conversational capabilities:
                    </p>

                    <ul className="list-disc list-inside text-lg text-gray-400">
                        <li>
                            <strong>GPT-4o-mini (OpenAI):</strong>
                        </li>
                        <li>
                            <strong>Anthropic (Claude):</strong>
                        </li>
                        <li>
                            <strong>Groq:</strong>
                            processing.
                        </li>
                        <li>
                            <strong>Google AI (PaLM):</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
