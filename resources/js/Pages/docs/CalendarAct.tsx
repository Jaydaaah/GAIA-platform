import Card from "@/Components/Card/Card";
import { useCallback, useMemo } from "react";

const calcWeeks = (month: number, week: number) => {
    return month * 4 + week;
};

// export default function CalendarAct() {
//     const renderCell = useCallback(
//         ({
//             colSpan,
//             label,
//             key,
//         }: {
//             colSpan: number;
//             label?: string;
//             key: string | number;
//         }) => {
//             return (
//                 <td key={key} className="px-4 py-2" colSpan={colSpan ?? 1} width={colSpan ?? 1 * 200}>
//                     {!!label && (
//                         <div className="bg-neutral w-full text-white p-1 py-2 rounded-md">
//                             <span className="text-truncate">{label}</span>
//                         </div>
//                     )}
//                 </td>
//             );
//         },
//         []
//     );

//     const cells = useMemo(() => {
//         const rows = calendar.map(({ name, tasks }, index) => {
//             // Sort tasks by week span
//             const sortedTasks = tasks.sort(
//                 (a, b) =>
//                     calcWeeks(a.month, a.week) - calcWeeks(b.month, b.week)
//             );

//             // Map tasks to table cells
//             let cellNode = sortedTasks.map(({ label, weekSpan }, index) =>
//                 renderCell({ colSpan: weekSpan, label, key: `task-${index}` })
//             );

//             // Add empty nodes for gaps
//             let totalLength = 0;
//             sortedTasks.forEach(({ month, week }, index) => {
//                 const gapCount =
//                     calcWeeks(month, week) - totalLength - index;
//                 totalLength += gapCount;
//                 if (gapCount > 0) {
//                     const empty = renderCell({
//                         colSpan: gapCount,
//                         key: `empty-${index}`,
//                     });
//                     cellNode.splice((index * 2), 0, empty);
//                 }
//             });
//             return <tr key={`row-${name}-${index}`} className="w-full">{cellNode}</tr>; // Return the row's cells
//         });
//         return rows;
//         // const maxLimit = Math.max(...rows.map((row) => row.length));
//     }, []);

//     return (
//         <div className="p-8 flex flex-col items-center">
//             <div className="text-center mb-8">
//                 <h1 className="text-5xl font-semibold text-gray-300">
//                     Gantt Chart
//                 </h1>
//             </div>

//             <div className="bg-neutral p-6 rounded-xl shadow-lg w-full flex overflow-x-clip max-w-7xl">
//                 <div className="bg-yellow-50">
//                     <table className="h-full table-auto text-center border-collapse">
//                         <thead className="bg-background/50 text-white">
//                             <tr>
//                                 <th className="px-4 py-2">Process</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-yellow-50 text-black">
//                             {calendar.map(({ name }, index) => (
//                                 <tr key={index}>
//                                     <td className="px-4 py-2 text-left font-semibold">
//                                         {name}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="overflow-x-auto flex-grow bg-yellow-50">
//                     <table className="w-full h-full table-fixed text-center border-neutral border-collapse max-w-7xl">
//                         <thead className="bg-background/50 text-white">
//                             <tr>
//                                 {months.map((month, index) => (
//                                     <th key={`month-${month}-${index}`} className="px-4 py-2" colSpan={4}>
//                                         {month}
//                                     </th>
//                                 ))}
//                             </tr>
//                         </thead>

//                         <tbody className="bg-yellow-50 text-black">
//                             {cells}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }
export default function CalendarAct() {
    return (
        <div className="p-8 flex flex-col items-center">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-semibold text-gray-300">
                    Gantt Chart
                </h1>
            </div>

            <Card className="max-w-7xl w-full">
                <iframe
                    className="clickup-embed bg-transparent border"
                    src="https://sharing.clickup.com/9016603305/g/h/4-90162365491-7/b03351c55c2f9b0"
                    width="100%"
                    height="700px"
                ></iframe>
            </Card>
        </div>
    );
}

const months = ["August", "September", "October", "November", "December"];

const calendar = [
    {
        name: "Concept Phase",
        tasks: [
            {
                label: "2 weeks",
                month: 0,
                week: 4,
                weekSpan: 2,
            },
        ],
    },
    {
        name: "Planning (Sprint 0)",
        tasks: [
            {
                label: "3 weeks",
                month: 1,
                week: 1,
                weekSpan: 3,
            },
        ],
    },
    {
        name: "Development (Iterations)",
        tasks: [
            {
                label: "Ongoing",
                month: 1,
                week: 4,
                weekSpan: 10,
            },
        ],
    },
    {
        name: "Testing Phase",
        tasks: [
            {
                label: "Ongoing",
                month: 1,
                week: 4,
                weekSpan: 10,
            },
        ],
    },
    {
        name: "Review/Feedback",
        tasks: [
            {
                label: "3 Weeks",
                month: 2,
                week: 1,
                weekSpan: 3,
            },
            {
                label: "Ongoing",
                month: 3,
                week: 2,
                weekSpan: 2,
            },
        ],
    },
    {
        name: "Delivery Phase",
        tasks: [
            {
                label: "Ongoing",
                month: 4,
                week: 1,
                weekSpan: 2,
            },
        ],
    },
    {
        name: "Maintenance Phase",
        tasks: [
            {
                label: "Ongoing",
                month: 4,
                week: 1,
                weekSpan: 2,
            },
        ],
    },
];
