import { useState } from "react";

export default function DocsPage1() {
    return (
        <div className="relative bg-white px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-yellow-600">
                Background of the Problem
            </h1>

            <h2 className="text-4xl font-semibold mb-6 text-yellow-600">
                Psychological Factors
            </h2>

            {/* 2x2 Grid of Cards */}
            <div className="grid grid-cols-2 gap-8">
                {/* Card 1: Fear of Failure */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="fear-of-failure-image.jpg"
                        alt="Fear of Failure"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                            Fear of Failure
                        </h3>
                    </div>
                </div>

                {/* Card 2: Perfectionism */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="perfectionism-image.jpg"
                        alt="Perfectionism"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                            Perfectionism
                        </h3>
                    </div>
                </div>

                {/* Card 3: Low Self-Efficacy */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="low-self-efficacy-image.jpg"
                        alt="Low Self-Efficacy"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                            Low Self-Efficacy
                        </h3>
                    </div>
                </div>

                {/* Card 4: Negative Self-Talk */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="negative-self-talk-image.jpg"
                        alt="Negative Self-Talk"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                            Negative Self-Talk
                        </h3>
                    </div>
                </div>
            </div>

            <footer className="mt-12 text-center">
                <p className="text-lg text-gray-500">
                    Understanding these factors is crucial for developing
                    effective strategies to manage exam anxiety.
                </p>
            </footer>
        </div>
    );
}
