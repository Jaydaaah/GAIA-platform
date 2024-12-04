import AgileFlowChart from "./AgileFlowChart/AgileFlowChart";

export default function DocsPage12() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Agile Development Process
            </h1>
            <p className="text-xl text-gray-300 mb-6 text-center">
                This flow chart outlines the stages of the Agile development
                process for the GAIA platform:
            </p>

            <div className="w-full h-[40vh]">
                <AgileFlowChart/>
            </div>
        </div>
    );
}

