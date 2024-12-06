import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "@/Components/Card/Card";
import ModalContent from "@/Components/Modal/ModalContent";
import ModalBody from "@/Components/Modal/ModalBody";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function PsychoCard() {
    return (
        <ModalContent>
            <ModalBody>
                <h1 className="text-3xl font-bold text-center mb-8 text-primary">
                    Psychological Factors
                </h1>
                <div className="h-full w-full">
                    <Swiper
                        id="swiper-psych"
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {cards.map(({ title, src, description }, index) => (
                            <SwiperSlide
                                key={`slide-psych-image-${index}`}
                                className="select-none"
                            >
                                <img src={src} height={500} width={700} />
                                <h1 className="mb-6 dark:text-primary text-center shadow-sm">
                                    {title}
                                </h1>
                                <h2 className="mb-6 text-center">
                                    {description}
                                </h2>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </ModalBody>
        </ModalContent>
    );
}

const cards = [
    {
        title: "Fear of Failure",
        src: "https://drive.google.com/thumbnail?id=1X-zVWOFPimYIDm4-krEH67Yeso8eOpcN",
        description:
            "Taking an important test creates intense pressure. While the desire to succeed can be motivating, the fear of failure often leads to anxiety, making students feel that a poor grade reflects their worth.",
    },
    {
        title: "Perfectionism",
        src: "https://drive.google.com/thumbnail?id=1BhT2y4G7OUeeRnm9mwysfh08DInJe29V",
        description:
            "Perfectionism is another critical factor influencing exam anxiety. Students who set unattainably high standards for themselves often experience immense pressure and fear of making mistakes.",
    },
    {
        title: "Low Self-Efficacy",
        src: "https://drive.google.com/thumbnail?id=1oAvNCp4qUk240QkyLuC1fA0yvFMc21oO",
        description:
            "Low self-efficacy also heightens exam anxiety, causing students to doubt their abilities, which leads to decreased motivation and poorer academic performance.",
    },
    {
        title: "Negative Self-Talk",
        src: "https://drive.google.com/thumbnail?id=1PyJJS1MyvJccbdMysq5r29K3_oTjOJ27",
        description:
            "Negative self-talk, characterized by self-criticism and pessimism, also plays a significant role in reinforcing feelings of inadequacy and fueling anxiety.",
    },
];
