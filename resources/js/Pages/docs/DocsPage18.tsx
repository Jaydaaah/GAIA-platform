export default function DocsPage18() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Testing
            </h1>
            <p className="text-xl text-gray-300 mb-6">
                The platform undergoes both functional testing and user
                acceptance testing (UAT).
            </p>
            <h2 className="text-4xl font-semibold mb-4 text-primary">
                Functional Testing:
            </h2>
            <ul className="list-disc list-inside text-xl text-gray-300 mb-6">
                <li>
                    All front-end components (chat interface, dashboard) are
                    tested for real-time functionality, UI responsiveness, and
                    accurate data storage.
                </li>
                <li>
                    API routes and back-end processes are tested to ensure
                    seamless interaction between front-end and back-end.
                </li>
            </ul>
            <h2 className="text-4xl font-semibold mb-4 text-primary">
                User Acceptance Testing (UAT):
            </h2>
            <ul className="list-disc list-inside text-xl text-gray-300 mb-6">
                <li>
                    Pilot tests with students and educators are conducted to
                    ensure that the platform reduces exam anxiety and provides
                    accurate assessments.
                </li>
                <li>Feedback is gathered and used to make improvements.</li>
            </ul>
        </div>
    );
}
