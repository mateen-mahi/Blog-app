"use client"
import React, { useContext, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { FaCheckCircle, FaBars, FaTimes } from "react-icons/fa";
import { AppContext } from "@/contextapi/ContextProvider";

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const {toggle,theme} = useContext(AppContext)

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["navbar-sub-container"]}>
        <Link href="/" className={styles.brand}>
          <FaCheckCircle style={{ marginRight: "8px" }} /> Irfan Malik
        </Link>

        <div className={styles["hamburger-icon"]} onClick={toggleNavLinks}>
          
        <div className={showNavLinks ? styles.cross : styles.hamburger}>
        <div className={`${styles.bar} ${styles.bar1}`}></div>
<div className={`${styles.bar} ${styles.bar2}`}></div>
<div className={`${styles.bar} ${styles.bar3}`}></div>

    </div>
        </div>

        <ul
          className={`${styles["nav-links"]} ${
            showNavLinks ? styles["active"] : ""
          }`}
        >
          <li className={styles.listItem} >
            <Link className={styles.link} href="/dashboard">Home</Link>
          </li>
          <li className={styles.listItem} >
            <Link className={styles.link} href="/dashboard/portfolio">Portfolio</Link>
          </li>

          <li className={styles.listItem} >
            <Link className={styles.link} href="/dashboard/about">About</Link>
          </li>
          <li className={styles.listItem} >
            <Link className={styles.link} href="/dashboard/writer">Writer</Link>
          </li>
          <li className={styles.listItem} >
            <Link className={styles.link} href="/dashboard/userpage">Account</Link>
          </li>
          <li className={styles.listItem} >
          </li>
        </ul>
      </div>
      <div className={styles.switchContainer} style={theme === "dark" ? {background:"white"}:{background:"black"}} onClick={toggle}>
 <div className={styles.moon}>🌙</div>
 <div style={theme === "dark" ? {left:"0px",background:"black"}:{right:"0px",background:"white"}} className={styles.ball} ></div>
 <div className={styles.sun}>☀️</div>
    </div>
    </div>
  );
};

export default Navbar;
