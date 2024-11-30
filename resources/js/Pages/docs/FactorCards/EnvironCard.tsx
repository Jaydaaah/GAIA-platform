import Card from "@/Components/Card/Card";
import ModalContent from "@/Components/Modal/ModalContent";
import ModalBody from "@/Components/Modal/ModalBody";

export default function EnvironCard() {
    return (
        <ModalContent>
            <ModalBody>
                <h1 className="text-3xl font-bold text-center mb-8 text-primary">
                    Environmental Factors
                </h1>
                <div className="h-64 w-full">
                    <h2 className="text-xl mb-6 text-primary text-center">
                        Environmental factors, such as strict deadlines and
                        heavy workloads, significantly contribute to exam
                        anxiety. Agustí et al. (2018) emphasize that academic
                        stressors like exams and assignments often elevate
                        anxiety levels in students.
                    </h2>
                </div>
            </ModalBody>
        </ModalContent>
    );
}
