"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./register.module.css";

const Register = () => {
  const router = useRouter();
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setErr("All Inputs Must be filled");
      return; 
    }

    try {
const resExist = await fetch("/api/userExist",{
  method: "POST",
  headers: {
    "content-type":"application/json"
  },
  body: JSON.stringify({email})
})
const {user} = await resExist.json();

if(user){
  setErr("User already exists");
  return;
}


      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User added successfully!");
        router.push("/");
      } else {
        setErr("Couldn't Register User");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Register</h1>
        <input
          type="text"
          placeholder="Name"
          className={styles.input}
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          name="email"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        
        <p className={styles.errTxt}>{err}</p>
        <input type="submit" value="Submit" className={styles.btn} />
      <Link href={"/"} className={styles.link}>already have an account? <span className={styles.span}>Login</span></Link>
      </form>
    </div>
  );
};

export default Register;
