import { PageProps } from "@/types";
import DocsPage1 from "./docs/DocsPage1";
import DocsPage2 from "./docs/DocsPage2";
import DocsPage3 from "./docs/DocsPage3";
import DocsPage4 from "./docs/DocsPage4";
import DocsPage5 from "./docs/DocsPage5";
import DocsPage6 from "./docs/DocsPage6";
import DocsPage7 from "./docs/DocsPage7";
import DocsPage8 from "./docs/DocsPage8";
import DocsPage9 from "./docs/DocsPage9";
import DocsPage10 from "./docs/DocsPage10";
import DocsPage11 from "./docs/DocsPage11";
import DocsPage12 from "./docs/DocsPage12";
import DocsPage13 from "./docs/DocsPage13";
import DocsPage14 from "./docs/DocsPage14";
import DocsPage15 from "./docs/DocsPage15";
import DocsPage16 from "./docs/DocsPage16";
import DocsPage17 from "./docs/DocsPage17";
import DocsPage18 from "./docs/DocsPage18";
import DocsPage19 from "./docs/DocsPage19";
import DocsPage20 from "./docs/DocsPage20";
import CalendarAct from "./docs/CalendarAct";
import SystemRequirement from "./docs/SystemRequirement";
import { useMemo } from "react";
import { motion } from "framer-motion";

export default function DocsPage({}: PageProps) {
    const renderSlides = useMemo(() => {
        return slides.map((slide, i) => (
            <motion.div
                key={`slide-${i}`}
                initial={{
                    opacity: 0.5,
                    x: -200,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="w-screen h-screen flex flex-col justify-center overflow-y-scroll no-scrollbar"
            >
                {slide}
            </motion.div>
        ));
    }, []);

    return (
        <div className="flex flex-col divide-y-2 divide-opacity-50 gap-20 overflow-hidden">
            {renderSlides}
        </div>
    );
}
const slides = [
    <DocsPage1 />,
    <DocsPage2 />,
    <DocsPage3 />,
    <DocsPage4 />,
    <DocsPage5 />,
    <DocsPage6 />,
    <DocsPage7 />,
    <DocsPage8 />,
    <DocsPage9 />,
    <DocsPage10 />,
    <DocsPage11 />,
    <DocsPage12 />,
    <DocsPage13 />,
    <DocsPage14 />,
    <DocsPage15 />,
    <DocsPage16 />,
    <DocsPage17 />,
    <DocsPage18 />,
    <DocsPage19 />,
    <DocsPage20 />,
    <CalendarAct />,
    <SystemRequirement />,
];
