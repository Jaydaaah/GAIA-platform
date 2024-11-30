import Card from "@/Components/Card/Card";
import ModalContent from "@/Components/Modal/ModalContent";
import ModalBody from "@/Components/Modal/ModalBody";

export default function SocialCard() {
    return (
        <ModalContent>
            <ModalBody>
                <h1 className="text-3xl font-bold text-center mb-8 text-primary">
                    Social Factors
                </h1>
                <div className="h-64 w-full">
                    <h2 className="text-xl mb-6 text-primary text-center">
                        Social factors, like parental expectations, heighten
                        stress and exam anxiety, with intense family aspirations
                        amplifying pressure on students (Park & Holloway, 2017).
                    </h2>
                </div>
            </ModalBody>
        </ModalContent>
    );
}
