import { Button } from "@headlessui/react";

export default function ExamStart({ onClick }: { onClick?: () => void }) {
    return (
        <div className="flex-grow flex items-center justify-center h-[70vh] flex-col">
            {/* Instruction Text */}
            <p className="text-lg text-white mb-4">
                Click the "Start" button to begin the exam or the quiz.
            </p>
            <Button onClick={onClick}>Start</Button>
        </div>
    );
}
