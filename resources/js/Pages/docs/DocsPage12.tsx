export default function DocsPage12() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Chat Interface Design
            </h1>

            <p className="text-xl text-gray-300 mb-6 text-center">
                The chat interface is designed to mimic popular messaging
                applications, making it intuitive for students. The following
                design principles are applied:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-neutral p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                        Real-time interaction
                    </h3>
                    <p className="text-lg text-gray-300">
                        Ensure seamless, live communication between students and
                        the system, providing an interactive experience.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-neutral p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                        Conversation logs
                    </h3>
                    <p className="text-lg text-gray-300">
                        Retain a detailed record of all interactions for review,
                        feedback, and analysis.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-neutral p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                        User-friendly UI
                    </h3>
                    <p className="text-lg text-gray-300">
                        Ensure an easy-to-use interface with clear navigation
                        and intuitive design elements.
                    </p>
                </div>
            </div>
        </div>
    );
}
