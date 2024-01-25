import React, { useState } from "react";
import styles from "../styles/ConsultationForm.module.css";

const ConsultationForm = ({ city, onFormSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        age: "",
        city: "",
        company: "",
        chiefComplaints: "",
        experience: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isAgeLessThan40 = parseInt(formData.age, 10) < 40;
        const updatedFormData = isAgeLessThan40 ? { ...formData, experience: "" } : formData;

        onFormSubmit(updatedFormData);
    };

    return (
        <div>
            <h2 className={styles.consultationForm}>Consultation Booking Form</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formLayout}>
                        <input
                            className={styles.formFields}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className={styles.formFields}
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formLayout}>
                        <input
                            className={styles.formFields}
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className={styles.formFields}
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city || city}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className={styles.formFields}
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formLayout}>
                        <textarea
                            className={styles.chiefComplaintsFields}
                            name="chiefComplaints"
                            placeholder="Cheif Complaints"
                            value={formData.chiefComplaints}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {parseInt(formData.age, 10) >= 40 && (
                        <div className={styles.formLayout}>
                            <textarea
                                className={styles.chiefComplaintsFields}
                                name="experience"
                                placeholder="Experience"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <button className={styles.submitBtn} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConsultationForm;
