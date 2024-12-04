import { p } from "framer-motion/client";

export default function DocsPage10() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-10 text-primary">
                Research Design
            </h1>
            <ul className="space-y-8">
                {points.map(({ title, description }, index) => (
                    <li key={index} tabIndex={0} className="flex items-start space-x-4 px-2 transition-all duration-1000 rounded focus:bg-primary focus:text-background focus:scale-105">
                        <span className="text-3xl font-bold">
                            {index + 1}.
                        </span>
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                {title}
                            </h2>
                            <p className="text-lg">
                                {description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            <footer className="mt-12 text-center">
                <p className="text-xl font-medium text-secondary">
                    GAIA's iterative approach drives innovation in assessments
                    and fosters better educational outcomes.
                </p>
            </footer>
        </div>
    );
}
const points = [
    {
        title: "Design-Based Research (DBR)",
        description:
            "An iterative process involving design, testing, and refinement in real-world educational environments.",
    },
    {
        title: "Development Process",
        description:
            "Ongoing testing and feedback ensure alignment with the needs of students and educators.",
    },
    {
        title: "Classroom Testing",
        description:
            "Measures impacts on student engagement, academic performance, and exam anxiety.",
    },
    {
        title: "Practical & Theoretical Outcomes",
        description:
            "Addresses real-world challenges while advancing educational theory.",
    },
];
p;
