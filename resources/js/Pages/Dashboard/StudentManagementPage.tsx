import Card from "@/Components/Card/Card";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function StudentManagementPage() {
    return (
        <DashboardLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Student Management
                </h2>
            }
        >
            <Head title="Student Management" />

            <div className="flex-1 p-10 flex flex-col gap-10">
                <header className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                        Student Management Dashboard
                    </h1>
                    <button
                        id="toggleDarkMode"
                        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        Toggle Dark Mode
                    </button>
                </header>
                {/* Student Profiles Section */}
                <Card className="p-5">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Student Profiles
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Student Profile Card */}
                        <div className="bg-gray-100 dark:bg-neutral/30 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                John Doe
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Enrollment Status: Active
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Current Courses: Math, Science
                            </p>
                            <button className="text-blue-500 hover:underline dark:text-secondary">
                                View Details
                            </button>
                        </div>
                        <div className="bg-gray-100 dark:bg-neutral/30 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Jane Smith
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Enrollment Status: Active
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Current Courses: History, Art
                            </p>
                            <button className="text-blue-500 hover:underline dark:text-secondary">
                                View Details
                            </button>
                        </div>
                        <div className="bg-gray-100 dark:bg-neutral/30 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Michael Johnson
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Enrollment Status: Inactive
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Current Courses: N/A
                            </p>
                            <button className="text-blue-500 hover:underline dark:text-secondary">
                                View Details
                            </button>
                        </div>
                    </div>
                </Card>
                {/* Progress Tracking Section */}
                <Card className="p-5">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Progress Tracking
                    </h2>
                    <table className="min-w-full bg-white dark:bg-neutral/30">
                        <thead>
                            <tr className="w-full bg-gray-200 text-gray-600 dark:bg-neutral/30 dark:text-gray-300 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">
                                    Student Name
                                </th>
                                <th className="py-3 px-6 text-left">
                                    Performance Score
                                </th>
                                <th className="py-3 px-6 text-left">
                                    Engagement Metrics
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
                            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                <td className="py-3 px-6">John Doe</td>
                                <td className="py-3 px-6">85%</td>
                                <td className="py-3 px-6">High</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                <td className="py-3 px-6">Jane Smith</td>
                                <td className="py-3 px-6">90%</td>
                                <td className="py-3 px-6">Medium</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                <td className="py-3 px-6">Michael Johnson</td>
                                <td className="py-3 px-6">70%</td>
                                <td className="py-3 px-6">Low</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
                {/* Enrollment & Grouping Section */}
                <Card className="p-5">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Enrollment &amp; Grouping
                    </h2>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Enroll New Student
                    </button>
                    <div className="mt-5">
                        <h3 className="text-gray-600 dark:text-gray-300">
                            Current Groups
                        </h3>
                        <ul className="list-disc pl-5">
                            <li>Group A: Math Enthusiasts</li>
                            <li>Group B: Science Explorers</li>
                            <li>Group C: History Buffs</li>
                        </ul>
                    </div>
                </Card>
                {/* Performance Alerts Section */}
                <Card className="p-5">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Performance Alerts
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Set up alerts for students needing additional support:
                    </p>
                    <form className="mt-4">
                        <label className="block mb-2 text-gray-600 dark:text-gray-300">
                            Student Name:
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 mb-4 border border-gray-300 rounded dark:border-gray-600 dark:bg-neutral/30 dark:text-gray-200"
                            placeholder="Enter student name"
                        />
                        <label className="block mb-2 text-gray-600 dark:text-gray-300">
                            Alert Type:
                        </label>
                        <select className="w-full p-2 mb-4 border border-gray-300 rounded dark:border-gray-600 dark:bg-neutral/30 dark:text-gray-200">
                            <option>Low Engagement</option>
                            <option>Low Performance</option>
                            <option>Attendance Issue</option>
                        </select>
                        <button
                            type="submit"
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Set Alert
                        </button>
                    </form>
                </Card>
            </div>
        </DashboardLayout>
    );
}
