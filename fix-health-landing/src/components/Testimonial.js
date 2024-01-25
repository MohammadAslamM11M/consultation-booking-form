import React, { useState } from "react";
import styles from "../styles/Testimonial.module.css";

const testimonialData = [
    {
        id: 1,
        name: "Nishith Patel",
        description: "Your assessment method is so good & patient support resolves issues promptly.",
        image: require("../assets/Patel_xOznYxGIr5.png"),
    },
    {
        id: 2,
        name: "Rashmi",
        description: "Quality, pocket friendly & consistent care is what Fix Health stands for.",
        image: require("../assets/Rashmi_KEXRN9maT.png"),
    },
    {
        id: 3,
        name: "Pranjal Deep",
        description: "They worked around time zone variations to accommodate my schedule.",
        image: require("../assets/Deep_P-vGzCQ88.png"),
    },
    {
        id: 4,
        name: "Dr. Nasir kamal",
        description: "6 month with Fix Health was less than 1 month of my insurance co-pay.",
        image: require("../assets/Nasir_kCpBt8epvL.png"),
    },
    {
        id: 5,
        name: "Rajesh Chainani",
        description: "Loved the personal touch of the Physio's, Doctors and care manager..",
        image: require("../assets/Rajesh_SUeQmKzaY.png"),
    },
    {
        id: 6,
        name: "Neil Pinherio",
        description: "I realized treatment could be done remotely, eliminating need for in-person visits..",
        image: require("../assets/Neil_glNgiERto.png"),
    },
    {
        id: 7,
        name: "Aniket Dhawad",
        description: "Best self referral physiotherapy near me - skipped NHS queue. Got appointment same day..",
        image: require("../assets/WhatsApp_Image_2023-07-14_at_18.png"),
    },
    {
        id: 8,
        name: "Neil Pinherio",
        description: "6 month with Fix Health was less than 1 month of my insurance co-pay.",
        image: require("../assets/Neil_glNgiERto.png"),
    },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
    };

    const getTransformValue = () => {
        const cardWidth = 100;
        return `translateX(${-currentIndex * cardWidth}px)`;
    };

    return (
        <div className={styles.carouselContainer}>
            <div>
                <button onClick={handlePrevClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
            <div className={styles.carousel} style={{ transform: getTransformValue() }}>
                {testimonialData.map((testimonial) => (
                    <div key={testimonial.id} className={styles.card}>
                        <img src={testimonial.image} alt={testimonial.name} />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
