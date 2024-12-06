import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function FeedbackSupportPage() {
    return (
        <DashboardLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Feedback and Support
                </h2>
            }
        >
            <Head title="Feedback & Support" />
            <div className="flex-1 p-10">
                <header className="flex justify-between items-center mb-5">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                        Feedback &amp; Support Dashboard
                    </h1>
                    <button
                        id="toggleDarkMode"
                        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        Toggle Dark Mode
                    </button>
                </header>
                {/* Feedback Collection Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Feedback Collection
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Receive feedback from students on course materials,
                        assessments, or platform usability:
                    </p>
                    <textarea
                        className="mt-2 w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-neutral/30 dark:text-gray-200"
                        rows={4}
                        placeholder="Enter your feedback here..."
                        defaultValue={""}
                    />
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Submit Feedback
                    </button>
                </div>
                {/* Help Center Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Help Center
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Access FAQs, tutorials, and guides for platform features
                        and functionality:
                    </p>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Visit Help Center
                    </button>
                </div>
                {/* Support Tickets Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Support Tickets
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Submit or track support tickets for technical issues or
                        feature requests:
                    </p>
                    <form className="mt-4">
                        <label className="block mb-2 text-gray-600 dark:text-gray-300">
                            Issue Description:
                        </label>
                        <textarea
                            className="w-full p-2 mb-4 border border-gray-300 rounded dark:border-gray-600 dark:bg-neutral/30 dark:text-gray-200"
                            rows={4}
                            placeholder="Describe your issue..."
                            defaultValue={""}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Submit Ticket
                        </button>
                    </form>
                </div>
                {/* Platform Updates Section */}
                <div className="bg-white dark:bg-neutral/30 p-5 rounded-lg shadow">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Platform Updates
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        View release notes or upcoming feature announcements to
                        stay informed:
                    </p>
                    <ul className="mt-4 list-disc pl-5">
                        <li>
                            Version 1.1: New feedback collection features added.
                        </li>
                        <li>
                            Version 1.2: Enhanced support ticket tracking
                            system.
                        </li>
                        <li>
                            Version 1.3: Upcoming tutorial series available next
                            month.
                        </li>
                    </ul>
                </div>
            </div>
        </DashboardLayout>
    );
}
