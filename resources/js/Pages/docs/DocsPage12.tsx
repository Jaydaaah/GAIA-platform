import Card from "@/Components/Card/Card";
import PopupEffectDiv from "@/Components/Effects/PopupEffectDiv";

export default function DocsPage12() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Chat Interface Design
            </h1>

            <p className="text-xl text-gray-300 mb-6 text-center">
                The chat interface is designed to mimic popular messaging
                applications, making it intuitive for students. The following
                design principles are applied:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardData.map(({ title, description }, i) => (
                    <PopupEffectDiv key={`design-${title}`}>
                        <Card>
                            <h3 className="text-2xl font-semibold text-primary mb-4">
                                {title}
                            </h3>
                            <p className="text-lg text-gray-300">
                                {description}
                            </p>
                        </Card>
                    </PopupEffectDiv>
                ))}
            </div>
        </div>
    );
}

const cardData = [
    {
        title: "Real-time interaction",
        description:
            "Ensure seamless, live communication between students and the system, providing an interactive experience.",
    },
    {
        title: "Conversation logs",
        description:
            "Retain a detailed record of all interactions for review, feedback, and analysis.",
    },
    {
        title: "User-friendly UI",
        description:
            "Ensure an easy-to-use interface with clear navigation and intuitive design elements.",
    },
];
