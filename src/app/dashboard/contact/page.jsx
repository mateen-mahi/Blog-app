"use client"
import React, { useState } from "react";
import styles from "./contact.module.css";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    number: "",
    subject: "",
    message: "",
  });
const router = useRouter()
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.senderName.trim()) {
      newErrors.senderName = "Sender Name is required";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_MESSAGE_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
router.push("/dashboard/about")
        } else {
          const errorData = await response.json();
          alert(`Form submission failed: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.inputContainer}>
          <h2 className={styles.heading}>Write Your Message Below</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className={styles.textInput}
              name="senderName"
              value={formData.senderName}
              onChange={handleInputChange}
            />
            {errors.senderName && (
              <div className={styles.error}>{errors.senderName}</div>
            )}

            <input
              type="number"
              placeholder="Number"
              className={styles.textInput}
              name="number"
              value={formData.number}
              onChange={handleInputChange}
            />
            {errors.number && <div className={styles.error}>{errors.number}</div>}

            <input
              type="text"
              placeholder="Subject"
              className={styles.textInput}
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
            {errors.subject && <div className={styles.error}>{errors.subject}</div>}

            <textarea
              placeholder="Message"
              className={styles.textArea}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              cols="30"
              rows="10"
            ></textarea>
            {errors.message && <div className={styles.error}>{errors.message}</div>}

            <div className={styles.btnContainer}>
              <button className={styles.btn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
