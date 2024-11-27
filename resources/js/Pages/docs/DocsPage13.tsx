export default function DocsPage12() {
    return (
        <div className="relative bg-white px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-yellow-600">
                Educator Dashboard Design
            </h1>
            <p className="text-xl text-gray-700 mb-6 text-center">
                The educator dashboard provides a comprehensive view of student
                performance:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                        Student Tracking
                    </h3>
                    <p className="text-lg text-gray-700">
                        Monitor individual student progress, view performance
                        over time, and identify areas for improvement.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                        AI Evaluations
                    </h3>
                    <p className="text-lg text-gray-700">
                        Leverage AI-driven insights to evaluate student
                        performance and provide tailored recommendations.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                        Feedback and Adjustments
                    </h3>
                    <p className="text-lg text-gray-700">
                        Provide immediate feedback to students, and make
                        data-driven adjustments to improve learning outcomes.
                    </p>
                </div>
            </div>
        </div>
    );
}
