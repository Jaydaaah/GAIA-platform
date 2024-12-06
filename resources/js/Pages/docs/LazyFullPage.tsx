import DocsPage1 from "./DocsPage1";
import DocsPage2 from "./DocsPage2";
import DocsPage3 from "./DocsPage3";
import DocsPage4 from "./DocsPage4";
import DocsPage5 from "./DocsPage5";
import DocsPage6 from "./DocsPage6";
import DocsPage7 from "./DocsPage7";
import DocsPage8 from "./DocsPage8";
import DocsPage9 from "./DocsPage9";
import DocsPage10 from "./DocsPage10";
import DocsPage11 from "./DocsPage11";
import DocsPage12 from "./DocsPage12";
import DocsPage13 from "./DocsPage13";
import DocsPage14 from "./DocsPage14";
import CalendarAct from "./CalendarAct";
import SystemRequirement from "./SystemRequirement";
import MembersPage from "./MembersPage";
import { Dispatch, SetStateAction, useMemo } from "react";
import DocsPageSlide from "./partial/DocsPageSlide";
import DocsPage2b from "./DocsPage2b";
import DocsPage15 from "./DocsPage15";

export default function LazyFullPage({
    autoSnap,
    setAutoSnap,
}: {
    autoSnap: boolean;
    setAutoSnap: Dispatch<SetStateAction<boolean>>;
}) {
    const renderSlides = useMemo(() => {
        return slides.map((slide, i) => (
            <DocsPageSlide
                key={`docs-slide-${i}`}
                autoSnap={autoSnap}
                setAutoSnap={setAutoSnap}
            >
                {slide}
            </DocsPageSlide>
        ));
    }, [autoSnap, setAutoSnap]);

    return <>{renderSlides}</>;
}
const slides = [
    <MembersPage />,
    <DocsPage1 />,
    <DocsPage2 />,
    <DocsPage2b />,
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
    <CalendarAct />,
    <SystemRequirement />,
];
