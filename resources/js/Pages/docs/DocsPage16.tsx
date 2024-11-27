export default function DocsPage16() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Front-end Development
            </h1>

            <p className="text-xl text-gray-300 mb-6 text-center">
                Both the student chat interface and the educator dashboard are
                built with **React** for the front-end, ensuring an intuitive,
                responsive design, while **Laravel** powers the back-end,
                providing real-time interaction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Left side - React + Laravel for Student Chat */}
                <div className="flex flex-col justify-between bg-blue-50 p-8 text-center">
                    <h3 className="text-3xl font-semibold text-primary mb-4">
                        Student Chat Interface
                    </h3>
                    {/* Fetching and displaying React + Laravel Student image */}
                    <img
                        src="https://via.placeholder.com/600x400?text=React+Chat+Interface"
                        alt="React Chat Interface"
                        className="w-full h-60 object-cover rounded-lg shadow-md mb-6"
                    />
                </div>

                {/* Right side - React + Laravel for Educator Dashboard */}
                <div className="flex flex-col justify-between bg-green-50 p-8 text-center">
                    <h3 className="text-3xl font-semibold text-primary mb-4">
                        Educator Dashboard
                    </h3>
                    {/* Fetching and displaying React + Laravel Educator image */}
                    <img
                        src="https://via.placeholder.com/600x400?text=React+Dashboard"
                        alt="React Educator Dashboard"
                        className="w-full h-60 object-cover rounded-lg shadow-md mb-6"
                    />
                </div>
            </div>
        </div>
    );
}
