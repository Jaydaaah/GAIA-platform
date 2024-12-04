import Card from "@/Components/Card/Card";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DocsPage2() {
    return (
        <div className="relative px-8 pt-12 pb-15 sm:mx-auto sm:max-w-6xl sm:px-12">
            <h1 className="text-5xl font-bold text-center mb-8 text-primary">
                Overview of Current State of Technology
            </h1>

            {/* Section 1: Rise of Technology in Education */}
            <div className="mb-10 flex items-center justify-between gap-10">
                <div className="w-full md:w-1/2 pr-4 text-justify">
                    <p className="text-xl text-gray-300 mb-6">
                        Technology is transforming education, especially for
                        students facing exam anxiety, by providing innovative
                        solutions that improve learning experiences and reduce
                        stress during assessments.
                    </p>
                    <p className="text-xl text-gray-300 mb-6">
                        AI-powered tools like online proctoring, adaptive
                        assessments, and platforms such as ChatGPT, Socratic AI,
                        and Gradescope offer real-time, personalized feedback,
                        creating a less intimidating environment for students
                        during exams.
                    </p>
                    <p className="text-xl text-gray-300 mb-6">
                        Integrating emotional support features within AI-driven
                        tools balances academic integrity with student
                        well-being, helping reduce anxiety while fostering a
                        more supportive learning atmosphere.
                    </p>
                </div>

                <Card className="max-w-md">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {cards.map(({ title, src }) => (
                            <SwiperSlide key={`slide-${title}`}>
                                <div className="flex flex-col items-center bg-cover">
                                    <img
                                        className="object-cover w-60 h-52"
                                        src={src}
                                        title={title}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Card>
            </div>

            <footer className="mt-12 text-center">
                <p className="text-lg text-secondary">
                    Embracing these technologies fosters a more supportive
                    learning environment for students.
                </p>
            </footer>
        </div>
    );
}

const cards = [
    {
        title: "Gradescope",
        src: "https://blogs.swarthmore.edu/its/wp-content/uploads/2021/09/gradescope_logo.jpeg",
    },
    {
        title: "Socratic AI",
        src: "https://res.cloudinary.com/apideck/image/upload/v1674760716/marketplaces/ckhg56iu1mkpc0b66vj7fsj3o/listings/unnamed_2_y2ctin.png",
    },
    {
        title: "ChatGPT",
        src: "https://www.unimedia.tech/wp-content/uploads/2023/12/openAI-chat-gpt-1-4.jpg",
    },
];
