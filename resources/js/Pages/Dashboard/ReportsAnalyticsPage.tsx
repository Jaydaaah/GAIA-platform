import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function ReportsAnalyticsPage() {
    return (
        <DashboardLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Reports & Analytics
                </h2>
            }
        >
            <Head title="Reports & Analytics" />
            <div className="flex-1 p-10">
                <header className="flex justify-between items-center mb-5">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                        Reports &amp; Analytics Dashboard
                    </h1>
                    <button
                        id="toggleDarkMode"
                        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        Toggle Dark Mode
                    </button>
                </header>
                {/* Engagement Reports Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Engagement Reports
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Detailed reports on student engagement metrics, course
                        participation, and interaction frequency.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
                        View Engagement Reports
                    </button>
                </div>
                {/* Learning Progress Analytics Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Learning Progress Analytics
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Track performance trends across specific courses,
                        student cohorts, or individual students.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
                        View Learning Analytics
                    </button>
                </div>
                {/* Assessment Performance Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Assessment Performance
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Analyze results and trends from AI-powered assessments
                        to identify areas for course improvements.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
                        View Assessment Performance
                    </button>
                </div>
                {/* Export & Share Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Export &amp; Share
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Export reports in formats like PDF or CSV, or share them
                        with stakeholders.
                    </p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
                        Export as PDF
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
                        Export as CSV
                    </button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-4">
                        Share with Stakeholders
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
