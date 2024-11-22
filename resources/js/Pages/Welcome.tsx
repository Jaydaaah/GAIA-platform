import GAIALogo from "@/Components/GAIALogo";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center"></div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <section className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800 text-white py-20">
                                <div className="container mx-auto px-6 text-center">
                                    <div className="flex lg:col-start-2 lg:justify-center">
                                        <GAIALogo className="w-52 h-52" />
                                    </div>
                                    <h1 className="text-5xl font-bold mb-4">
                                        Welcome to GAIA
                                    </h1>
                                    <h2 className="text-3xl font-light mb-4">
                                        Platform
                                    </h2>
                                    <p className="text-lg mb-8">
                                        A platform for sustainable solutions and
                                        innovation.
                                    </p>
                                    {/* <a
                                        href="#contact"
                                        className="bg-white text-green-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700 transition duration-300"
                                    >
                                        Get Started
                                    </a> */}
                                    <div>
                                        {auth.user ? (
                                            <Link
                                                href={route("dashboard")}
                                                className="bg-white text-green-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700 transition duration-300"
                                            >
                                                Dashboard
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href={route("login")}
                                                    className="bg-white text-green-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700 transition duration-300"
                                                >
                                                    Log in
                                                </Link>
                                                <Link
                                                    href={route("register")}
                                                    className="bg-white text-green-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700 transition duration-300"
                                                >
                                                    Register
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </section>

                            <section id="features" className="py-20">
                                <div className="container mx-auto px-6">
                                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
                                        Our Features
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                                Feature One
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Description of feature one and
                                                its benefits.
                                            </p>
                                        </div>
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                                Feature Two
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Description of feature two and
                                                its benefits.
                                            </p>
                                        </div>
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                                Feature Three
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Description of feature three and
                                                its benefits.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            <div className="container mx-auto px-6 text-center">
                                <p>
                                    &copy; 2024 GAIA Platform. All rights
                                    reserved.
                                </p>
                                <div className="flex justify-center space-x-4 mt-4">
                                    <a
                                        href="#"
                                        className="hover:text-green-500 dark:hover:text-green-400"
                                    >
                                        Privacy Policy
                                    </a>
                                    <a
                                        href="#"
                                        className="hover:text-green-500 dark:hover:text-green-400"
                                    >
                                        Terms of Service
                                    </a>
                                </div>
                            </div>
                        </footer>
                        {/* <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
                            </footer> */}
                    </div>
                </div>
            </div>
        </>
    );
}
