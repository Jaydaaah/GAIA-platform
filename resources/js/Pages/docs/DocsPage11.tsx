export default function DocsPage11() {
    return (
        <div className="relative bg-white px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-yellow-600">
                Application Structure
            </h1>
            <p className="text-xl text-gray-700 mb-6">
                The platform is built using Laravel to leverage its server-side
                rendering (SSR) capabilities and API routes for handling
                back-end processes. The architecture is divided into two main
                components:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700 mb-6">
                <li className="mb-4">
                    <strong className="text-yellow-600">
                        Student Chat Interface
                    </strong>
                </li>
                <li className="mb-4">
                    <strong className="text-yellow-600">
                        Educator Dashboard
                    </strong>
                </li>
            </ul>
            <p className="text-xl text-gray-700 mb-6">
                A central back-end API will manage AI integration, real-time
                communication via WebSockets, and data storage for student
                responses, chat logs, and AI feedback.
            </p>
        </div>
    );
}
