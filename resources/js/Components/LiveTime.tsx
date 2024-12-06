import { useState, useEffect } from "react";

export default function LiveTime() {
    const [currentTime, setCurrentTime] = useState(() =>
        formatTime(new Date())
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(formatTime(new Date()));
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    function formatTime(date: Date): string {
        return date.toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
    }

    return <>{currentTime}</>;
}
