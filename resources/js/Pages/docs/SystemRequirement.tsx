export default function SystemRequirement() {
    return (
        <div className="relative flex min-h-screen flex-col bg-background py-12 sm:py-16">
            <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative bg-neutral px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-6xl sm:rounded-lg sm:px-10">
                <h1 className="text-4xl font-bold text-center text-primary mb-8">
                    System Requirements
                </h1>

                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-primary mb-6">
                        Hardware Requirements
                    </h2>

                    <div className="bg-background/50 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            For Students
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-300">
                                <span className="font-semibold">
                                    Computer/Laptop:
                                </span>
                                <ul className="ml-4">
                                    <li>
                                        Processor: Intel Core i3 or AMD
                                        equivalent.
                                    </li>
                                    <li>Memory (RAM): 4GB.</li>
                                    <li>Storage: 128GB HDD or SSD.</li>
                                </ul>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <span className="font-semibold">
                                    Internet Connection:
                                </span>{" "}
                                Minimum of 5 Mbps for smooth platform
                                interaction and basic loading times.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-background/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            For Educators
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-300">
                                <span className="font-semibold">
                                    Computer/Laptop:
                                </span>
                                <ul className="ml-4">
                                    <li>
                                        Processor: Intel Core i5 or AMD
                                        equivalent.
                                    </li>
                                    <li>Memory (RAM): 8GB.</li>
                                    <li>
                                        Storage: 256GB HDD or SSD, to
                                        accommodate data downloads, report
                                        storage, and multitasking.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-primary mb-6">
                        Software Requirements
                    </h2>
                    <div className="bg-background/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            For Both Students and Educators
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-300">
                                <span className="font-semibold">
                                    Web Browser:
                                </span>{" "}
                                Latest version of Chrome or Firefox. These are
                                optimized for most web applications, ensuring
                                compatibility with the GAIA platform.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-primary mb-6">
                        Platform Access
                    </h2>
                    <div className="bg-background/50 p-6 rounded-lg shadow-md">
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-300">
                                <span className="font-semibold">
                                    Platform Access:
                                </span>{" "}
                                Browser access to the GAIA web platform with
                                secure login.
                            </li>
                            <li className="flex items-center text-gray-300 gap-2">
                                <span className="font-semibold text-nowrap">
                                    AI Models:
                                </span>{" "}
                                GAIA’s embedded AI models (like GPT-4o-mini,
                                Claude Haikyu, or Gemini Flash 1.5) will run
                                server-side, meaning the users' hardware doesn’t
                                need high specs to support these.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
