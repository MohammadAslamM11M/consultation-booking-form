import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}></div>

            <div className={`${styles.menuIcon} ${isMobileMenuOpen && styles.open}`} onClick={toggleMobileMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            <ul className={`${styles.navList} ${isMobileMenuOpen && styles.show}`}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>About</li>
                <li className={styles.navItem}>Services</li>
                <li className={styles.navItem}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
