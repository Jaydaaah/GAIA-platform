export default function DocsPage17() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Data Flow and Storage
            </h1>
            <p className="text-xl text-gray-300 mb-6">
                The platform uses MySQL to store chat logs, student
                assessments, and educator feedback. The data flow is as follows:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-300 mb-6">
                <li>Student interactions are logged in the database.</li>
                <li>
                    AI responses are stored alongside each student’s responses.
                </li>
                <li>
                    Educator feedback is recorded in the dashboard for future
                    reference.
                </li>
            </ul>
        </div>
    );
}
