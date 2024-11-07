import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function CourseManagementPage() {
    return (
        <DashboardLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Course Management
                </h2>
            }
        >
            <Head title="Course Management" />
            <div className="flex-1 p-10">
                <header className="flex justify-between items-center mb-5">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                        Course Management Dashboard
                    </h1>
                    <button
                        id="toggleDarkMode"
                        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        Toggle Dark Mode
                    </button>
                </header>
                {/* Course Library Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Course Library
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Course Card */}
                        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Introduction to Programming
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Skill Level: Beginner
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Description: An introductory course on
                                programming concepts.
                            </p>
                            <button className="text-blue-500 hover:underline dark:text-blue-400">
                                Edit Course
                            </button>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Data Science Fundamentals
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Skill Level: Intermediate
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Description: Learn the basics of data science.
                            </p>
                            <button className="text-blue-500 hover:underline dark:text-blue-400">
                                Edit Course
                            </button>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Advanced Web Development
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Skill Level: Advanced
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Description: In-depth study of web development
                                technologies.
                            </p>
                            <button className="text-blue-500 hover:underline dark:text-blue-400">
                                Edit Course
                            </button>
                        </div>
                    </div>
                </div>
                {/* Module Editor Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Module Editor
                    </h2>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Create New Module
                    </button>
                    <div className="mt-5">
                        <h3 className="text-gray-600 dark:text-gray-300">
                            Existing Modules
                        </h3>
                        <ul className="list-disc pl-5">
                            <li>Module 1: Introduction to Programming</li>
                            <li>Module 2: Data Structures</li>
                            <li>Module 3: Web Development Basics</li>
                        </ul>
                    </div>
                </div>
                {/* Content Library Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow mb-10">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        Content Library
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Video Lecture: Python Basics
                            </h3>
                            <button className="text-blue-500 hover:underline dark:text-blue-400">
                                Edit
                            </button>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Article: Understanding Algorithms
                            </h3>
                            <button className="text-blue-500 hover:underline dark:text-blue-400">
                                Edit
                            </button>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
                            <h3 className="text-gray-600 dark:text-gray-300">
                                Quiz: Basics of JavaScript
                            </h3>
                            <button className="text-blue-500 hover:underline dark:text-blue-400">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                {/* AI-Generated Content Section */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                    <h2 className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                        AI-Generated Content
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Curate AI-recommended materials or generate practice
                        questions:
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
                        Generate AI Content
                    </button>
                    <div className="mt-5">
                        <h3 className="text-gray-600 dark:text-gray-300">
                            Suggested Materials
                        </h3>
                        <ul className="list-disc pl-5">
                            <li>AI Recommended: Advanced Machine Learning</li>
                            <li>AI Suggested Quiz: Data Science Basics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
