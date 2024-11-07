import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function DocumentationPage() {
    return (
        <DashboardLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Documentation and Resources
                </h2>
            }
        >
            <Head title="Dccoumentation & Resources" />
            <div className="flex-1 p-10">
                <header className="flex justify-between items-center mb-5">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                        Documentation &amp; Resources
                    </h1>
                    <button
                        id="toggleDarkMode"
                        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        Toggle Dark Mode
                    </button>
                </header>
                {/* Guides & Tutorials Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Guides &amp; Tutorials
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Access educational materials on using AI assessments and
                        platform features effectively.
                    </p>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Explore Guides
                    </button>
                </div>
                {/* Best Practices Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Best Practices
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Insights on maximizing AI-driven assessments, enhancing
                        student engagement, and optimizing course delivery.
                    </p>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        View Best Practices
                    </button>
                </div>
                {/* API Documentation Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        API Documentation
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        For advanced users, provide API access details to
                        integrate with other educational software.
                    </p>
                    <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                        Access API Docs
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
