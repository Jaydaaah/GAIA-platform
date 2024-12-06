import Card from "@/Components/Card/Card";
import GAIALogo from "@/Components/GAIALogo";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";

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
            <div className="bg-gray-50 text-black/50 dark:bg-background dark:text-primary">
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
                            <section>
                                <Card>
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
                                            A Generative Artificial Intelligence
                                            platform designed to foster engaging
                                            academic discussions, enhance
                                            collaborative learning, and drive
                                            meaningful innovation across various
                                            fields. By leveraging cutting-edge
                                            AI technologies, GAIA creates an
                                            interactive and dynamic learning
                                            environment that encourages critical
                                            thinking and knowledge sharing.
                                        </p>
                                        {/* <a
                                        href="#contact"
                                        className="bg-white text-green-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 dark:bg-neutral/50 dark:text-green-400 dark:hover:bg-gray-700 transition duration-300"
                                    >
                                        Get Started
                                    </a> */}
                                        <div>
                                            {/* {auth.user ? (
                                            <Link
                                                href={route("dashboard")}
                                                className="bg-white text-green-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 dark:bg-neutral/50 dark:text-green-400 dark:hover:bg-gray-700 transition duration-300"
                                            >
                                                Dashboard
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href={route("login")}
                                                    className="bg-white text-green-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 dark:bg-neutral/50 dark:text-green-400 dark:hover:bg-gray-700 transition duration-300"
                                                >
                                                    Log in
                                                </Link>
                                                <Link
                                                    href={route("register")}
                                                    className="bg-white text-green-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 dark:bg-neutral/50 dark:text-green-400 dark:hover:bg-gray-700 transition duration-300"
                                                >
                                                    Register
                                                </Link>
                                            </>
                                        )} */}
                                            <Link
                                                href={route("docs")}
                                                className="bg-white text-green-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 dark:bg-neutral/50 dark:text-secondary dark:hover:bg-neutral/40     transition duration-300"
                                            >
                                                View Research Docs
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            </section>

                            <section id="features" className="py-20">
                                <div className="container mx-auto px-6">
                                    <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
                                        Our Features
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {features.map(
                                            ({ title, description }, i) => (
                                                <motion.div
                                                    key={`feature-${i}`}
                                                    initial={{
                                                        scale: 1,
                                                    }}
                                                    whileHover={{
                                                        scale: 1.08,
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: 0.3,
                                                        ease: "anticipate",
                                                    }}
                                                >
                                                    <Card className="h-full">
                                                        <h3 className="text-xl font-semibold mb-4 text-secondary ">
                                                            {title}
                                                        </h3>
                                                        <p className="text-primary ">
                                                            {description}
                                                        </p>
                                                    </Card>
                                                </motion.div>
                                            )
                                        )}
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

const features = [
    {
        title: "Admin Dashboard",
        description:
            "A user-friendly interface for administrators to manage, monitor, and configure platform settings, track user activity, and view real-time analytics.",
    },
    {
        title: "AI Integrations",
        description:
            "Seamless integration with Groq,OpenAI, Anthropy, and Gemini, enhancing the platform with advanced AI capabilities for automation, personalization, and analytics..",
    },
    {
        title: "E-Learning Platform",
        description:
            "An intuitive platform powered by your own API, allowing seamless creation and delivery of educational content, including interactive lessons, quizzes, and progress tracking.",
    },
];
