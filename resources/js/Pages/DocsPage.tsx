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
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Entrance from "./docs/Entrance";
import { Head } from "@inertiajs/react";
import DocsPageSlide from "./docs/partial/DocsPageSlide";
import MembersPage from "./docs/MembersPage";

export default function DocsPage({}: PageProps) {
    const [autoSnap, setAutoSnap] = useState(false);
    const [initialized, setInitialize] = useState(false);

    useEffect(() => {
        const localAutuSnapState = localStorage.getItem("auto-snap") == "true";
        setAutoSnap(localAutuSnapState);
        setInitialize(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            localStorage.setItem("auto-snap", autoSnap ? "true" : "false");
        }
    }, [autoSnap, initialized]);

    const renderSlides = useMemo(() => {
        return slides.map((slide, i) => {
            const key = `docs-slide-${i}`;
            if (i == 0) {
                return <div key={key}>{slide}</div>;
            }
            return (
                <DocsPageSlide
                    key={key}
                    autoSnap={autoSnap}
                    setAutoSnap={setAutoSnap}
                >
                    {slide}
                </DocsPageSlide>
            );
        });
    }, [autoSnap]);

    return (
        <>
            <Head title="Research Docs" />
            <div
                className="flex flex-col divide-y-2 divide-opacity-10 divide-neutral/50 gap-20 overflow-hidden bg-background text-white"
                style={{
                    scrollBehavior: "smooth",
                }}
            >
                {renderSlides}
            </div>
        </>
    );
}

const slides = [
    <Entrance />,
    <MembersPage />,
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
