import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ExamHeader from "./partial/ExamHeader";
import { lazy, Suspense } from "react";

const ExamComponent = lazy(() => import("./LazyLoadExam"));

export default function Exam() {
    return (
        <Authenticated header={<ExamHeader />}>
            <Head title="Exam" />

            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl dark:text-primary pt-5">
                        Topic: Programming Languages and Execution Models
                    </h2>
                </div>
                <Suspense fallback={<div className="h-[80vh]">Loadingg exam...</div>}>
                    <ExamComponent />
                </Suspense>
            </div>
        </Authenticated>
    );
}
