import Card from "@/Components/Card/Card";
import PopupEffectDiv from "@/Components/Effects/PopupEffectDiv";
import Modal from "@/Components/Modal";
import ModalBody from "@/Components/Modal/ModalBody";
import ModalContent from "@/Components/Modal/ModalContent";
import ModalHeader from "@/Components/Modal/ModalHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import PsychoCard from "./FactorCards/PsychoCard";
import EduCard from "./FactorCards/EduCard";
import SocialCard from "./FactorCards/SocialCard";
import EnvironCard from "./FactorCards/EnvironCard";


export default function DocsPage1() {
    const [focusPage, setFocusPage] = useState(-1);
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12 mx-4">
            <Modal show={focusPage != -1 && !!factorCards[focusPage]?.child} onClose={() => setFocusPage(-1)}>
                {factorCards[focusPage]?.child}
            </Modal>
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Background of the Problem
            </h1>

            <h2 className="text-xl mb-6 text-primary text-center">
                Exam anxiety, driven by <strong>psychological</strong>,{" "}
                <strong>educational</strong>, <strong>social</strong>, and
                <strong>environmental factors</strong>, impacts both performance
                and mental health.
            </h2>

            {/* 2x2 Grid of Cards */}
            <div className="grid grid-cols-2 gap-4">
                {factorCards.map(({ title, src }, index) => (
                    <PopupEffectDiv key={`div-${index}`}>
                        <Card>
                            <img
                                src={src}
                                alt={`Image of ${title}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="mt-2">
                                <a
                                    className="text-2xl font-semibold text-primary cursor-pointer hover:text-opacity-75 active:text-opacity-90 transition-opacity"
                                    onClick={() => setFocusPage(index)}
                                >
                                    {title}
                                </a>
                            </div>
                        </Card>
                    </PopupEffectDiv>
                ))}
            </div>

            <footer className="mt-12 text-center">
                <p className="text-lg text-secondary">
                    Understanding these factors is crucial for developing
                    effective strategies to manage exam anxiety.
                </p>
            </footer>
        </div>
    );
}

const factorCards = [
    {
        title: "Psychological factor",
        src: "https://drive.google.com/thumbnail?id=1qAuBgxxHMVmPJQLQzBIvlu259BfpDL_G",
        child: <PsychoCard/>
    },
    {
        title: "Educational factor",
        src: "https://drive.google.com/thumbnail?id=1O6-iK1cW8nTIstNKfjwG-UxK52HfikLJ",
        child: <EduCard/>
    },
    {
        title: "Social factor",
        src: "https://drive.google.com/thumbnail?id=1c4hTJE7sFmXs4PWRiJmPTRoKD3q46BSx",
        child: <SocialCard/>
    },
    {
        title: "Environmental factor",
        src: "https://drive.google.com/thumbnail?id=1DYEh73U2HntTZ20t5IGKxFamsXZQM5WV",
        child: <EnvironCard/>
    },
];
