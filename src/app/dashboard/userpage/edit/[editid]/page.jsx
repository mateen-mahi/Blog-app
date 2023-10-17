"use client"
import React, { useState, useEffect } from "react";
import styles from "./edit.module.css";
import { useRouter } from "next/navigation";

const Contact = ({ params }) => {
  const route = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_USER_API}/${params.editid}`);
        if (response.ok) {
          const data = await response.json();
          setFormData({
            name: data.name || "",
            email: data.email || "",
            password: data.password || "",
            role: data.role || ""
          });
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred while fetching data: " + error.message);
      }
    };
    fetchData();

  },[params.editid])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "User Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_USER_API}/${params.editid}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          route.push("/dashboard/userpage");
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
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="User Name"
              className={styles.textInput}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.user && <div className={styles.error}>{errors.name}</div>}

            <input
              type="email"
              placeholder="Email Address"
              className={styles.textInput}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}

            <input
              type="text"
              placeholder="Password"
              className={styles.textInput}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <div className={styles.error}>{errors.password}</div>}

            <select
  className={styles.select}
  name="role"
  value={formData.role}
  onChange={handleInputChange}
>
  <option className={styles.options} value="user">User</option>
  <option className={styles.options} value="admin">Admin</option>
  <option className={styles.options} value="owner">Owner</option>
</select>
{errors.role && <div className={styles.error}>{errors.role}</div>}


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
