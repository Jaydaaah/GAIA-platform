import { useCallback, useState } from "react";

export default function DocsPage13() {
    const [focusChild, setFocus] = useState(agilePhases.map(() => false));

    const evaluateShouldHide = useCallback(
        (childIndex: number) => {
            if (focusChild.some((val) => val)) {
                return !focusChild[childIndex];
            }
            return false;
        },
        [focusChild]
    );

    const setFocusHandler = useCallback((state: boolean, index: number) => {
        return () =>
            setFocus((prev) =>
                prev.map((val, i) => {
                    if (index == i) {
                        return state;
                    }
                    return val;
                })
            );
    }, []);

    return (
        <div className="relative flex min-h-screen flex-col bg-background py-12 sm:py-16">
            <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative bg-neutral px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-6xl sm:rounded-lg sm:px-10">
                <h1 className="text-4xl font-bold text-center text-primary mb-8">
                    Agile Phases and Objectives Addressed
                </h1>

                <table className="min-w-full shadow-md rounded-lg">
                    <thead
                        className={`bg-primary text-background ${
                            focusChild.some((val) => val) &&
                            "bg-opacity-60 blur-xxs"
                        } transition-all duration-1000`}
                    >
                        <tr>
                            <th className="py-3 px-4 text-left text-xl font-semibold">
                                Agile Phase
                            </th>
                            <th className="py-3 px-4 text-left text-xl font-semibold">
                                GAIA General Objectives Addressed
                            </th>
                            <th className="py-3 px-4 text-left text-xl font-semibold">
                                GAIA Specific Objectives Addressed
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" text-gray-300">
                        {agilePhases.map((phase, index) => (
                            <tr
                                key={index}
                                tabIndex={0}
                                className={`focus:bg-primary focus:text-background focus:scale-110 cursor-pointer focus:cursor-default transition-all duration-1000 ${
                                    evaluateShouldHide(index) &&
                                    "bg-opacity-50 blur-xxs"
                                } ${index % 2 == 0 ? "bg-background/50" : "bg-background/30"}`}
                                onFocus={setFocusHandler(true, index)}
                                onBlur={setFocusHandler(false, index)}
                            >
                                <td className="py-4 px-4 font-semibold">
                                    {phase.phase}
                                </td>
                                <td className="py-4 px-4 whitespace-pre-line">
                                    {phase.generalObjectives}
                                </td>
                                <td className="py-4 px-4 whitespace-pre-line">
                                    {phase.specificObjectives}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const agilePhases = [
    {
        phase: "Concept Phase",
        generalObjectives:
            "Define the vision for an interactive, user-friendly platform.\n- Identify core needs: reducing exam anxiety and enhancing assessment.",
        specificObjectives:
            "Outline key features like formative feedback mechanisms.\n- Establish the framework for dynamic dialogues and supportive assessment tools.",
    },
    {
        phase: "Planning (Sprint 0)",
        generalObjectives:
            "Plan the structure for personalized assessments and feedback delivery.\n- Determine integration with educational frameworks.",
        specificObjectives:
            "Develop the roadmap for creating modules that simulate low-stakes assessments.\n- Plan dashboards for performance insights.",
    },
    {
        phase: "Development (Iterations)",
        generalObjectives:
            "Build and refine the platform through continuous iterations to meet educational standards.\n- Ensure interactive features are engaging.",
        specificObjectives:
            "Develop AI models for personalized feedback and hints.",
    },
    {
        phase: "Testing Phase",
        generalObjectives:
            "Validate GAIA's accuracy in assessing understanding and reducing anxiety.\n- Ensure the system meets user needs.",
        specificObjectives:
            "Conduct user acceptance tests for dynamic dialogues and feedback accuracy.\n- Test anxiety-reducing features with students and educators.",
    },
    {
        phase: "Review/Feedback",
        generalObjectives:
            "Analyze effectiveness in enhancing performance and reducing exam stress.\n- Gather feedback from stakeholders.",
        specificObjectives:
            "Refine features based on pilot data and feedback.\n- Assess impact on student confidence and performance trends.",
    },
    {
        phase: "Delivery Phase",
        generalObjectives:
            "Deploy GAIA to educational environments with training support.\n- Ensure seamless integration with lesson plans.",
        specificObjectives:
            "Implement training for educators.\n- Launch fully functional modules and dashboards.\n- Provide guidelines for use in real classrooms.",
    },
    {
        phase: "Maintenance Phase",
        generalObjectives:
            "Continuously monitor and update GAIA for evolving educational needs.\n- Ensure sustained effectiveness and support.",
        specificObjectives:
            "Release updates to enhance AI accuracy and expand features.\n- Collect ongoing feedback to address new challenges and improve performance.",
    },
];
