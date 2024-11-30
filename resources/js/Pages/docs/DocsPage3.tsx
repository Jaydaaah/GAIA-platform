import { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartData,
} from "chart.js";
import { motion, useInView } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DocsPage3() {
    const divRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(divRef);
    const data: ChartData<"pie", number[], string> = {
        labels: ["Traditional Exams (81.6%)", "Online Exams (18.4%)"], // Labels for the Pie Chart
        datasets: [
            {
                label: "Distribution of Exam Stress",
                data: [81.6, 18.4], // Data reflecting the stress distribution
                backgroundColor: ["#FFEB3B", "#2196F3"], // Pie segment colors (Yellow for Traditional, Blue for Online)
                borderColor: ["#FFEB3B", "#2196F3"],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Problem Statement
            </h1>
            <div className="grid grid-cols-2">
                <div className="text-xl text-gray-300 mb-6 space-y-5 text-justify">
                    <p>
                        Exams are traditional tools for assessing student
                        competency, but they can also provide valuable feedback
                        for educators. However, individual responses to exam
                        stress vary.
                    </p>

                    <p>
                        High-stakes exams exacerbate anxiety, with 81.6% of
                        students reporting stress. Factors like strict formats
                        and memorization contribute to this, while online exams
                        may reduce anxiety due to flexibility.
                    </p>

                    <p>
                        Trait anxiety negatively impacts performance, especially
                        for anxious students. Beyond academics, it can affect
                        long-term mental health and career aspirations,
                        particularly during the COVID-19 pandemic.
                    </p>

                    <p>
                        This highlights the need for more adaptive,
                        student-centered assessment approaches that prioritize
                        mental well-being alongside academic integrity.
                    </p>
                </div>
                <div className="mt-12 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-center text-primary mb-4">
                        Assessment Type Distribution
                    </h2>
                    <div ref={divRef} className="flex justify-center max-w-lg">
                        {isInView && (
                            <Pie
                                data={data}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        colors: {
                                            forceOverride: true,
                                        },
                                        legend: {
                                            position: "top",
                                            labels: {
                                                color: "#FFFFFF",
                                                font: {
                                                    size: 14,
                                                },
                                            },
                                        },
                                        tooltip: {
                                            enabled: true,
                                        },
                                    },
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Pie Chart Section */}

            <footer className="mt-12 text-center">
                <p className="text-lg text-secondary">
                    Addressing these challenges is crucial for fostering a
                    healthier educational environment.
                </p>
            </footer>
        </div>
    );
};