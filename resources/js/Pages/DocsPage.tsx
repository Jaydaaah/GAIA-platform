import { PageProps } from "@/types";
import { lazy, Suspense, useEffect, useState } from "react";
import Entrance from "./docs/Entrance";
import { Head } from "@inertiajs/react";

const LazyFullPage = lazy(() => import("./docs/LazyFullPage"));

export default function DocsPage({}: PageProps) {
    const [autoSnap, setAutoSnap] = useState(false);
    const [initialized, setInitialize] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);

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

    return (
        <>
            <Head title="Research Docs" />
            <div
                className="flex flex-col divide-y-2 divide-opacity-10 divide-neutral/50 gap-20 overflow-hidden bg-background text-white"
                style={{
                    scrollBehavior: "smooth",
                }}
            >
                <Entrance onAnimationDone={() => setAnimationDone(true)} />
                {animationDone && (
                    <Suspense fallback={<div>loading...</div>}>
                        <LazyFullPage
                            autoSnap={autoSnap}
                            setAutoSnap={setAutoSnap}
                        />
                    </Suspense>
                )}
            </div>
        </>
    );
}
