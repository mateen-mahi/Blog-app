"use client"
import React, { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const [err, setErr] = useState("");
  const { data, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(data, status);

  if(status === "loading"){
    return <div className={styles.loading}>Loading.......</div>
  }

  if(status === "authenticated"){
    router.push("/dashboard");
  }
if("status" === "unauthenticated"){
  setErr("Plz Log in");
}

  


  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErr("Values Must be Filled ");
      return;
    }

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response.error) {
        setErr("Login failed. Check your credentials.");
      }
      router.push("/dashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Login</h1>
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
        <p className={styles.errMsg}>{err}</p>
        <input type="submit" value="Submit" className={styles.btn} />
        <Link href="/register" className={styles.link}>
          Doesn&apos;t have an account? <span className={styles.span}>Register</span>
        </Link>
      </form>
      <p>.............. or ..............</p>
      <div className={styles.providerContainer}>
        <div
          className={styles.googleProvider}
          onClick={() => signIn("google")}
        >
          <FaGoogle /> Sign in with Google
        </div>
        <div
          className={styles.githubProvider}
          onClick={() => signIn("github")}
        >
          <FaGithub /> Sign in with Github
        </div>
      </div>
    </div>
  );
};

export default Login;
