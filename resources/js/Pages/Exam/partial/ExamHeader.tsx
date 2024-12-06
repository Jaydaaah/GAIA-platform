import LiveTime from "@/Components/LiveTime";

export default function ExamHeader() {
    return (
        <div className="flex flex-col">
            <span className="font-extralight text-secondary">
                <LiveTime />
            </span>
            <span className="text-sm">
                temporary function: type "End" to end the chat
            </span>
        </div>
    );
}
