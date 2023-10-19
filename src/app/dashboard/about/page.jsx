import React from "react";
import Button from "@/components/Button/CommonBtn";
import styles from "./about.module.css";
import Image from "next/image";


export const metadata = {
  title: "Irfan Malik || About Us",
  description: "Irfan sir blog ceo xeven solutions",
};


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.imageOverlay}>
          <a href="#" className={styles.imageTextContainer}>
          <span className={styles.imageText1}>Emerging technologies</span>
          <span className={styles.imageText2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
          </a>
        </div>
        <Image
          src="https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="about cover "
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.subContainer}>
        <div className={styles.textContainer1}>
          <h4 className={styles.heading4}>Who we are?</h4>
          <p className={styles.pText1}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium doloribus odio assumenda fugiat ea, rerum distinctio
            voluptatem autem. Tenetur, culpa?
          </p>
          <p className={styles.pText1}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium doloribus odio assumenda fugiat ea, rerum distinctio
            voluptatem autem. Tenetur, culpa?
          </p>
          <p className={styles.pText1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tempora rem possimus voluptatem aliquid similique repudiandae sint
            omnis dolore temporibus! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Praesentium doloribus odio assumenda fugiat ea,
            rerum distinctio voluptatem autem. Tenetur, culpa?
          </p>
        </div>

        <div className={styles.textContainer2}>
          <h4 className={styles.heading4}>What we do?</h4>
          <p className={styles.pText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            dicta, quod quia veniam quibusdam pariatur a laudantium recusandae
            unde inventore!
          </p>
          <div className={styles.servicesList}>
            <span className={styles.span} >Web Development</span>
            <span className={styles.span} >Mobile App Development</span>
            <span className={styles.span} >UI/UX Design</span>
            <span className={styles.span} >Digital Marketing</span>
            <span className={styles.span} >Data Analytics</span>
          </div>
          <div className={styles.btnContainer}>
            <Button text="Contact" url="/dashboard/contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
