import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function MessagingPage() {
    return (
        <DashboardLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Messaging & Announcements
                </h2>
            }
        >
            <Head title="Messaging & Announcements" />
            <div className="flex-1 p-10">
                <header className="flex justify-between items-center mb-5">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                        Messaging &amp; Announcements Dashboard
                    </h1>
                    <button
                        id="toggleDarkMode"
                        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        Toggle Dark Mode
                    </button>
                </header>
                {/* Direct Messaging Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Direct Messaging
                    </h2>
                    <div className="border border-gray-300 rounded-lg p-4 h-48 overflow-y-auto dark:border-gray-600 dark:bg-neutral/30">
                        <p className="text-gray-500 dark:text-gray-300">
                            Chat with students here...
                        </p>
                    </div>
                    <input
                        type="text"
                        className="mt-4 w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-neutral/30 dark:text-gray-200"
                        placeholder="Type your message..."
                    />
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Send
                    </button>
                </div>
                {/* Broadcast Announcements Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Broadcast Announcements
                    </h2>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-neutral/30 dark:text-gray-200"
                        rows={4}
                        placeholder="Write your announcement here..."
                        defaultValue={""}
                    />
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Broadcast Announcement
                    </button>
                </div>
                {/* Automated Notifications Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Automated Notifications
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Set up automated notifications for deadlines, reminders,
                        or important updates:
                    </p>
                    <form className="mt-4">
                        <label className="block mb-2 text-gray-600 dark:text-gray-300">
                            Notification Message:
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 mb-4 border border-gray-300 rounded dark:border-gray-600 dark:bg-neutral/30 dark:text-gray-200"
                            placeholder="Enter notification message"
                        />
                        <label className="block mb-2 text-gray-600 dark:text-gray-300">
                            Select Date:
                        </label>
                        <input
                            type="date"
                            className="w-full p-2 mb-4 border border-gray-300 rounded dark:border-gray-600 dark:bg-neutral/30 dark:text-gray-200"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Set Notification
                        </button>
                    </form>
                </div>
                {/* Message History Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Message History
                    </h2>
                    <table className="min-w-full bg-white dark:bg-neutral/30">
                        <thead>
                            <tr className="w-full bg-gray-200 text-gray-600 dark:bg-neutral/30 dark:text-gray-300 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Date</th>
                                <th className="py-3 px-6 text-left">Sender</th>
                                <th className="py-3 px-6 text-left">Message</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
                            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                <td className="py-3 px-6">2023-10-01</td>
                                <td className="py-3 px-6">Admin</td>
                                <td className="py-3 px-6">
                                    Reminder: Assignment due tomorrow.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                <td className="py-3 px-6">2023-10-02</td>
                                <td className="py-3 px-6">Admin</td>
                                <td className="py-3 px-6">
                                    New course materials are available.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                                <td className="py-3 px-6">2023-10-03</td>
                                <td className="py-3 px-6">Admin</td>
                                <td className="py-3 px-6">
                                    Meeting scheduled for Friday.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
