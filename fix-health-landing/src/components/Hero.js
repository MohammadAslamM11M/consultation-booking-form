import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.heroHeading}>Welcome to</h1>
            <h1 className={styles.heroHeading}>Fix Health</h1>
            <p className={styles.heroSubHeading}>Your path to a</p>
            <p className={styles.heroSubHeading}></p>
            <p className={styles.heroSubHeading}>Healthier Life</p>
        </div>
    );
};

export default Hero;
