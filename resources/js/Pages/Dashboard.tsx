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
                            You're logged in!
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-10">
                    <header className="flex justify-between items-center mb-5">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                            Dashboard
                        </h1>
                        <div>
                            <span className="text-gray-600 dark:text-gray-400">
                                Welcome, Admin!
                            </span>
                        </div>
                        <button
                            id="toggleDarkMode"
                            className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
                        >
                            Toggle Dark Mode
                        </button>
                    </header>
                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Total Users
                            </h3>
                            <p className="text-2xl font-bold">1,234</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Active Users
                            </h3>
                            <p className="text-2xl font-bold">987</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Pending Requests
                            </h3>
                            <p className="text-2xl font-bold">56</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Sales This Month
                            </h3>
                            <p className="text-2xl font-bold">$5,678</p>
                        </div>
                    </div>
                    {/* Chart Section */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                        <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                            Monthly Sales Overview
                        </h2>
                        <div style={{ height: 300 }}>
                            {/* Placeholder for Chart */}
                            <div className="bg-gray-200 dark:bg-gray-700 h-full flex items-center justify-center text-gray-500 dark:text-gray-300">
                                Chart Placeholder
                            </div>
                        </div>
                    </div>
                    {/* User Table */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                        <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                            User List
                        </h2>
                        <table className="min-w-full bg-white dark:bg-gray-800">
                            <thead>
                                <tr className="w-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">
                                        User ID
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
                                <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                    <td className="py-3 px-6">1</td>
                                    <td className="py-3 px-6">John Doe</td>
                                    <td className="py-3 px-6">
                                        john@example.com
                                    </td>
                                    <td className="py-3 px-6">Active</td>
                                    <td className="py-3 px-6">
                                        <button className="text-blue-500 hover:underline dark:text-blue-400">
                                            Edit
                                        </button>
                                        <button className="text-red-500 hover:underline dark:text-red-400">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                    <td className="py-3 px-6">2</td>
                                    <td className="py-3 px-6">Jane Smith</td>
                                    <td className="py-3 px-6">
                                        jane@example.com
                                    </td>
                                    <td className="py-3 px-6">Inactive</td>
                                    <td className="py-3 px-6">
                                        <button className="text-blue-500 hover:underline dark:text-blue-400">
                                            Edit
                                        </button>
                                        <button className="text-red-500 hover:underline dark:text-red-400">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                    <td className="py-3 px-6">3</td>
                                    <td className="py-3 px-6">
                                        Michael Johnson
                                    </td>
                                    <td className="py-3 px-6">
                                        michael@example.com
                                    </td>
                                    <td className="py-3 px-6">Active</td>
                                    <td className="py-3 px-6">
                                        <button className="text-blue-500 hover:underline dark:text-blue-400">
                                            Edit
                                        </button>
                                        <button className="text-red-500 hover:underline dark:text-red-400">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
