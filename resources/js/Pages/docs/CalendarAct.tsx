export default function CalendarAct() {
    // The table data (equivalent to your Excel data)
    const tasks = [
        {
            name: 'Concept Phase',
            aug: 'Wk 1',
            sep: 'Wk 2-3',
            oct: '',
            nov: '',
            dec: '',
            color: 'bg-teal-600',
        },
        {
            name: 'Planning (Sprint 0)',
            aug: '',
            sep: 'Wk 1-2',
            oct: '',
            nov: '',
            dec: '',
            color: 'bg-indigo-600',
        },
        {
            name: 'Development (Iterations)',
            aug: '',
            sep: '',
            oct: 'Wk 1-3',
            nov: '',
            dec: '',
            color: 'bg-blue-600',
        },
        {
            name: 'Testing Phase',
            aug: '',
            sep: '',
            oct: '',
            nov: 'Wk 1-2',
            dec: '',
            color: 'bg-green-600',
        },
        {
            name: 'Review/Feedback',
            aug: '',
            sep: '',
            oct: '',
            nov: 'Wk 3',
            dec: '',
            color: 'bg-purple-600',
        },
        {
            name: 'Delivery Phase',
            aug: '',
            sep: '',
            oct: '',
            nov: '',
            dec: 'Wk 4',
            color: 'bg-orange-600',
        },
        {
            name: 'Maintenance Phase',
            aug: '',
            sep: '',
            oct: '',
            nov: '',
            dec: 'Wk 4',
            color: 'bg-red-600',
        },
    ];

    return (
        <div className="p-8 flex flex-col items-center">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-semibold text-gray-300">Gantt Chart</h1>
            </div>

            <div className="overflow-x-auto bg-neutral p-6 rounded-xl shadow-lg w-full">
                <table className="min-w-full table-auto text-center border-neutral border-collapse max-w-7xl">
                    <thead className="bg-background/50 text-white">
                        <tr>
                            <th className="px-4 py-2">Process</th>
                            <th className="px-4 py-2">AUGUST</th>
                            <th className="px-4 py-2">SEPTEMBER</th>
                            <th className="px-4 py-2">OCTOBER</th>
                            <th className="px-4 py-2">NOVEMBER</th>
                            <th className="px-4 py-2">DECEMBER</th>
                        </tr>
                    </thead>

                    <tbody className="bg-yellow-50 text-black">
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 text-left font-semibold">{task.name}</td>
                                <td className="px-4 py-2">
                                    {task.aug && (
                                        <div className={`${task.color} text-white py-1 rounded-md w-20 mx-auto`}>
                                            {task.aug}
                                        </div>
                                    )}
                                </td>
                                <td className="px-4 py-2">
                                    {task.sep && (
                                        <div className={`${task.color} text-white py-1 rounded-md w-20 mx-auto`}>
                                            {task.sep}
                                        </div>
                                    )}
                                </td>
                                <td className="px-4 py-2">
                                    {task.oct && (
                                        <div className={`${task.color} text-white py-1 rounded-md w-20 mx-auto`}>
                                            {task.oct}
                                        </div>
                                    )}
                                </td>
                                <td className="px-4 py-2">
                                    {task.nov && (
                                        <div className={`${task.color} text-white py-1 rounded-md w-20 mx-auto`}>
                                            {task.nov}
                                        </div>
                                    )}
                                </td>
                                <td className="px-4 py-2">
                                    {task.dec && (
                                        <div className={`${task.color} text-white py-1 rounded-md w-20 mx-auto`}>
                                            {task.dec}
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
