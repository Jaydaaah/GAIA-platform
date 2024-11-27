export default function CalendarAct() {
    return (
        <div className="bg-orange-100 p-8">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-semibold text-gray-700">
                    GAIA Platform Project Gantt Chart
                </h1>
            </div>

            <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg">
                <table className="min-w-full table-auto text-center border-collapse">
                    <thead className="bg-yellow-500 text-white">
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
                        <tr>
                            <td className="px-4 py-2 text-left font-semibold">
                                Concept Phase
                            </td>
                            <td className="px-4 py-2">
                                <div className="bg-teal-600 text-white py-1 rounded-md w-20 mx-auto">
                                    Wk 1
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="bg-teal-600 text-white py-1 rounded-md w-20 mx-auto">
                                    Wk 2-3
                                </div>
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                        </tr>

                        <tr>
                            <td className="px-4 py-2 text-left font-semibold">
                                Planning (Sprint 0)
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2">
                                <div className="bg-indigo-600 text-white py-1 rounded-md w-20 mx-auto">
                                    Wk 1-2
                                </div>
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                        </tr>

                        <tr>
                            <td className="px-4 py-2 text-left font-semibold">
                                Development (Iterations)
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2">
                                <div className="bg-blue-600 text-white py-1 rounded-md w-20 mx-auto">
                                    Wk 1-3
                                </div>
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                        </tr>

                        <tr>
                            <td className="px-4 py-2 text-left font-semibold">
                                Testing Phase
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2">
                                <div className="bg-green-600 text-white py-1 rounded-md w-20 mx-auto">
                                    Wk 1-2
                                </div>
                            </td>
                            <td className="px-4 py-2"></td>
                        </tr>

                        <tr>
                            <td className="px-4 py-2 text-left font-semibold">
                                Review/Feedback
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2">
                                <div className="bg-purple-600 text-white py-1 rounded-md w-20 mx-auto">
                                    Wk 3
                                </div>
                            </td>
                            <td className="px-4 py-2"></td>
                        </tr>

                        <tr>
                            <td className="px-4 py-2 text-left font-semibold">
                                Delivery Phase
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2">
                                <div className="bg-orange-600 text-white py-1 rounded-md w-20 mx-auto">
                                    Wk 4
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-2 text-left font-semibold">
                                Maintenance Phase
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2">
                                <div className="bg-red-600 text-white py-1 rounded-md w-20 mx-auto">
                                    Wk 4
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
