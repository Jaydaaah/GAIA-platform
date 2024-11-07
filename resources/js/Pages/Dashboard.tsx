import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <DashboardLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Welcome to the GAIA Dashboard!
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-10">
                    <header className="flex justify-between items-center mb-5">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                            Educator Dashboard
                        </h1>
                        <div>
                            <span className="text-gray-600 dark:text-gray-400">
                                Hello, Admin!
                            </span>
                        </div>
                        <button
                            id="toggleDarkMode"
                            className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
                        >
                            Toggle Dark Mode
                        </button>
                    </header>

                    {/* Key Statistics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Total Students
                            </h3>
                            <p className="text-2xl font-bold">1,234</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Active Assessments
                            </h3>
                            <p className="text-2xl font-bold">87</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Courses Available
                            </h3>
                            <p className="text-2xl font-bold">15</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Pending Feedback
                            </h3>
                            <p className="text-2xl font-bold">43</p>
                        </div>
                    </div>

                    {/* Assessments Overview Chart */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                        <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                            Assessment Progress Overview
                        </h2>
                        <div style={{ height: 300 }}>
                            <div className="bg-gray-200 dark:bg-gray-700 h-full flex items-center justify-center text-gray-500 dark:text-gray-300">
                                Assessment Progress Chart Placeholder
                            </div>
                        </div>
                    </div>

                    {/* Course List */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                        <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                            Course Management
                        </h2>
                        <table className="min-w-full bg-white dark:bg-gray-800">
                            <thead>
                                <tr className="w-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">
                                        Course ID
                                    </th>
                                    <th className="py-3 px-6 text-left">
                                        Course Name
                                    </th>
                                    <th className="py-3 px-6 text-left">
                                        Enrolled Students
                                    </th>
                                    <th className="py-3 px-6 text-left">
                                        Status
                                    </th>
                                    <th className="py-3 px-6 text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
                                {/* Example Course Row */}
                                <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                    <td className="py-3 px-6">101</td>
                                    <td className="py-3 px-6">Intro to AI</td>
                                    <td className="py-3 px-6">120</td>
                                    <td className="py-3 px-6">Active</td>
                                    <td className="py-3 px-6">
                                        <button className="text-blue-500 hover:underline dark:text-blue-400">
                                            Edit
                                        </button>
                                        <button className="text-red-500 hover:underline dark:text-red-400 ml-3">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                {/* Repeat for additional courses */}
                            </tbody>
                        </table>
                    </div>

                    {/* Student List */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                        <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                            Student Management
                        </h2>
                        <table className="min-w-full bg-white dark:bg-gray-800">
                            <thead>
                                <tr className="w-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">
                                        Student ID
                                    </th>
                                    <th className="py-3 px-6 text-left">
                                        Name
                                    </th>
                                    <th className="py-3 px-6 text-left">
                                        Email
                                    </th>
                                    <th className="py-3 px-6 text-left">
                                        Status
                                    </th>
                                    <th className="py-3 px-6 text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
                                {/* Example Student Row */}
                                <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                    <td className="py-3 px-6">1</td>
                                    <td className="py-3 px-6">John Doe</td>
                                    <td className="py-3 px-6">
                                        john@example.com
                                    </td>
                                    <td className="py-3 px-6">Active</td>
                                    <td className="py-3 px-6">
                                        <button className="text-blue-500 hover:underline dark:text-blue-400">
                                            View
                                        </button>
                                        <button className="text-red-500 hover:underline dark:text-red-400 ml-3">
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                                {/* Repeat for additional students */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
