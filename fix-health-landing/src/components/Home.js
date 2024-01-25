import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./Hero";
import ConsultationForm from "./ConsultationForm";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
import styles from "../styles/Home.module.css";

const mockDoctors = [
    {
        name: "Dr. Kshama Mangal",
        expertise: "Physiotherapist",
        city: "Mumbai",
        expertiseLevel: 13,
        image: require("../assets/no_bg_kshama.png"),
    },
    {
        name: "Dr. Ritika Saxena",
        expertise: "Neuro Rehabitilation",
        city: "Mumbai",
        expertiseLevel: 15,
        image: require("../assets/no_bg_ritika.png"),
    },
    {
        name: "Dr. Namita Singh",
        expertise: "Musculoskeletal",
        city: "Kolkata",
        expertiseLevel: 8,
        image: require("../assets/no_bg_namita.png"),
    },
    {
        name: "Dr. Radhika Kaple",
        expertise: "Musculoskeletal",
        city: "Pune",
        expertiseLevel: 9,
        image: require("../assets/Untitled_design__10_.png"),
    },
    {
        name: "Dr. Sheetal Lelani",
        expertise: "Physiotherapist",
        city: "Mangaluru",
        expertiseLevel: 10,
        image: require("../assets/Untitled_design__14_.png"),
    },
    {
        name: "Dr. Manasi Bane",
        expertise: "Neuro Sciences",
        city: "Mumbai",
        expertiseLevel: 18,
        image: require("../assets/Untitled_design__16_.png"),
    },
];

const testimonialsData = [
    { title: "Testimonial 1", content: "Content for Testimonial 1..." },
    { title: "Testimonial 2", content: "Content for Testimonial 2..." },
];

const Home = () => {
    const location = useLocation();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDoctors(mockDoctors);
        }, 1000);
    }, [location.search]);

    const handleFormSubmit = (formData) => {
        setTimeout(() => {
            const doctorsInCity = mockDoctors.filter(
                (doctor) => doctor.city.toLowerCase() === formData.city.toLowerCase()
            );

            setFilteredDoctors(doctorsInCity);
            setFormSubmitted(true);
            console.log("Filtered doctors based on city:", doctorsInCity);
        }, 1000);
    };

    return (
        <div className={styles.homeContainer}>
            <Navbar />
            <div className={styles.combinedContainer}>
                <div className={styles.heroContainer}>
                    <Hero />
                    <div className={styles.formContainer}>
                        <ConsultationForm onFormSubmit={handleFormSubmit} />
                    </div>
                </div>
            </div>

            {formSubmitted && filteredDoctors.length > 0 && (
                <div className={styles.bestDoctorsContainer}>
                    <h2>Doctors in {filteredDoctors[0].city}</h2>
                    <div className={styles.docCardLayout}>
                        {filteredDoctors.map((doctor) => (
                            <div className={styles.docCard} key={doctor.name}>
                                <div>
                                    <p>{doctor.name}</p>
                                    <p>{doctor.expertise}</p>
                                    <p>{doctor.city}</p>
                                    <p>Expertise Level: {doctor.expertiseLevel}</p>
                                </div>
                                <div>
                                    {doctor.image && (
                                        <img className={styles.docPic} src={doctor.image} alt={doctor.name} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <Testimonial testimonials={testimonialsData} />
        </div>
    );
};

export default Home;
