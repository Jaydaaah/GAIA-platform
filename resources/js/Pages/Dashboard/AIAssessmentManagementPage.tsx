import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function AIAssessmentManagementPage() {
    return (
        <DashboardLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    AI Assessment Management
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="flex-1 p-10">
                <header className="flex justify-between items-center mb-5">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                        AI Assessment Management Dashboard
                    </h1>
                    <button
                        id="toggleDarkMode"
                        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        Toggle Dark Mode
                    </button>
                </header>
                {/* Conversational Assessments Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Conversational Assessments
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Assessment with John Doe
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Date: 2023-10-01
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Insights: Engaged in problem-solving
                                discussions.
                            </p>
                            <button className="text-blue-500 hover:underline dark:text-blue-400">
                                View Conversation Log
                            </button>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Assessment with Jane Smith
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Date: 2023-10-02
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Insights: Showed improvement in critical
                                thinking.
                            </p>
                            <button className="text-blue-500 hover:underline dark:text-blue-400">
                                View Conversation Log
                            </button>
                        </div>
                    </div>
                </div>
                {/* Assessment Templates Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Assessment Templates
                    </h2>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Create New Template
                    </button>
                    <div className="mt-5">
                        <h3 className="text-gray-600 dark:text-gray-300">
                            Existing Templates
                        </h3>
                        <ul className="list-disc pl-5">
                            <li>Template 1: Basic Knowledge Assessment</li>
                            <li>Template 2: Critical Thinking Assessment</li>
                            <li>
                                Template 3: Conversational Skills Assessment
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Performance Insights Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Performance Insights
                    </h2>
                    <table className="min-w-full bg-white dark:bg-gray-800">
                        <thead>
                            <tr className="w-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">
                                    Student Name
                                </th>
                                <th className="py-3 px-6 text-left">
                                    Assessment Date
                                </th>
                                <th className="py-3 px-6 text-left">Score</th>
                                <th className="py-3 px-6 text-left">
                                    Feedback
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
                            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                <td className="py-3 px-6">John Doe</td>
                                <td className="py-3 px-6">2023-10-01</td>
                                <td className="py-3 px-6">85%</td>
                                <td className="py-3 px-6">
                                    Good engagement, needs focus on details.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                <td className="py-3 px-6">Jane Smith</td>
                                <td className="py-3 px-6">2023-10-02</td>
                                <td className="py-3 px-6">90%</td>
                                <td className="py-3 px-6">
                                    Excellent performance, strong critical
                                    thinking.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Scoring & Review Tools Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Scoring &amp; Review Tools
                    </h2>
                    <form>
                        <label className="block mb-2 text-gray-600 dark:text-gray-300">
                            Score Criteria:
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 mb-4 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                            placeholder="Enter scoring criteria"
                        />
                        <label className="block mb-2 text-gray-600 dark:text-gray-300">
                            Manual Feedback:
                        </label>
                        <textarea
                            className="w-full p-2 mb-4 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                            rows={4}
                            placeholder="Enter feedback"
                            defaultValue={""}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Submit Feedback
                        </button>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}
