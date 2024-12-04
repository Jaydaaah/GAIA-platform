import Card from "@/Components/Card/Card";
import PopupEffectDiv from "@/Components/Effects/PopupEffectDiv";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MembersPage() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Meet the Team
            </h1>
            <div className="flex flex-col sm:flex-row gap-8">
                {members.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <PopupEffectDiv>
                            <Card>
                                <div className="flex justify-center mb-2">
                                    <img
                                        className="w-36 h-36 object-cover object-center rounded-full"
                                        src={member.src}
                                        title={member.name}
                                        width={160}
                                        height={160}
                                    />
                                </div>
                                <h2 className="text-xl font-bold text-white mb-2">
                                    {member.name}
                                </h2>
                                <p className="text-secondary font-semibold mb-2">
                                    {member.role}
                                </p>
                                <p className="text-primary/80 text-sm text-pretty">
                                    {member.description}
                                </p>
                            </Card>
                        </PopupEffectDiv>
                    </motion.div>
                ))}
            </div>
            <footer className="mt-12 text-center">
                <p className="text-lg text-secondary">
                    Embracing collaboration fosters a more innovative research
                    environment.
                </p>
            </footer>
        </div>
    );
}

const members = [
    {
        name: "Jay Dee",
        role: "Team Lead",
        description:
            "Leads technical development, sets coding standards, and ensures high performance and reliability.",
        src: "/assets/prof-jd.jpg",
    },
    {
        name: "Gemarino, Clarence",
        role: "Team Manager",
        description:
            "Oversees the entire project, ensuring the team meets deadlines and stays aligned with project goals.",
        src: "/assets/prof-cla.jpg",
    },
    {
        name: "Sevilla, Mica",
        role: "Team Coordinator",
        description:
            "Facilitates communication between team members and manages task assignments.",
        src: "/assets/prof-mic.jpg",
    },
    {
        name: "Ollegue, Ricky",
        role: "Quality Assurance Specialist",
        description:
            "Ensures the platform functions smoothly and identifies potential issues through rigorous testing.",
        src: "/assets/prof-rick.jpg",
    },
];
