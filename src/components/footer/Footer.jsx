import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.userInfoContainer}>
          <div className={styles.userID}>
            <div className={styles.userImage}>
              <Image
                className={styles.userImg}
                width={50}
                height={50}
                src="/irfan_sitting.png"
                alt="footer user img"
              />
            </div>
            <span className={styles.userName}>Irfan Sir</span>
          </div>
          <div className={styles.userInfo}>
            <p className={styles.userDes}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, praesentium? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tempore, adipisci?
            </p>
          </div>
        </div>
        <div className={styles.listContainer}>
          <div className={styles.list}>
            <h3 className={styles.listHeading}>Pages</h3>
            <ul className={styles.footerList}>
              <li>
                <Link href="/dashboard">Home</Link>
              </li>
              <li>
                <Link href="/dashboard/portfolio">Portfolio</Link>
              </li>
              {/* <li>
                <Link href="/dashboard/blog">Blog</Link>
              </li> */}
              <li>
                <Link href="/dashboard/about">About</Link>
              </li>
              <li>
                <Link href="/dashboard/writer">Writer</Link>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3 className={styles.listHeading}>More</h3>
            <ul className={styles.footerList}>
              <li>
                <Link href="/dashboard/services">Services</Link>
              </li>
              <li>
                <Link href="/dashboard/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="/dashboard/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.socialIconsContainer}>
        <a
          href="facebook.com/iamirfansaeedmalik"
          className={`${styles.socialIcon} ${styles.facebook}`}
        >
          <FaFacebook />
        </a>
        <a
          href="twitter.com/irfan_malikx"
          className={`${styles.socialIcon} ${styles.twitter}`}
        >
          <FaTwitter />
        </a>
        <a
          href="instagram.com/iamirfanmalikofficial"
          className={`${styles.socialIcon} ${styles.instagram}`}
        >
          <FaInstagram />
        </a>
        <a
          href="linkedin.com/in/muhammadirfanmalik"
          className={`${styles.socialIcon} ${styles.linkedin}`}
        >
          <FaLinkedin />
        </a>
        <a
          href="tiktok.com/@irfansaeedmalikofficial"
          className={`${styles.socialIcon} ${styles.tiktok}`}
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.youtube.com/@muhammadirfanmalik"
          className={`${styles.socialIcon} ${styles.youtube}`}
        >
          <FaYoutube />
        </a>
      </div>
      <div className={styles.footerCopyright}>
        &copy; 2023 Your Website Name. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
