import Card from "@/Components/Card/Card";
import ModalContent from "@/Components/Modal/ModalContent";
import ModalBody from "@/Components/Modal/ModalBody";

export default function EduCard() {
    return (
        <ModalContent>
            <ModalBody>
                <h1 className="text-3xl font-bold text-center mb-8 text-primary">
                    Educational Factors
                </h1>
                <div className="h-64 w-full">
                    <div className="flex justify-center mb-2">
                        <img src="https://drive.google.com/thumbnail?id=1O6-iK1cW8nTIstNKfjwG-UxK52HfikLJ"></img>
                    </div>
                    <h2 className="text-xl mb-6 text-center">
                        Examination anxiety stems from educational pressures,
                        especially high-stakes tests that stress future
                        opportunities, with test-based accountability
                        intensifying this issue (Rienties et al., 2016).
                    </h2>
                </div>
            </ModalBody>
        </ModalContent>
    );
}
