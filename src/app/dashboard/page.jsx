import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./home.module.css";
import Button1 from "@/components/Button/CommonBtn";
import Link from "next/link";
import Recentposts from "@/components/recentPosts/Recentposts";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
          <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.headingText}>
          <span className={styles.gradientText}>
            <span className={styles.icon}>
            <FaCheckCircle  />
            </span> Irfan Malik

          </span>
        </h1>
        <h2 className={styles.subHeading}>
          Founder and CEO Of Xeven Solutions
        </h2>
        <p className={styles.quote}>
  <span className={styles.quotationMark}>"</span>
  It's better to produce one <strong className={styles.emphasis}>leader</strong> than making thousands of <em className={styles.emphasis}>slaves</em>.
  <span className={styles.quotationMark}>"</span>
</p>
<p className={styles.mainText}>
  Learning is an ongoing process, which should never stop. Whether you are a millionaire or running a successful business, learning must be the one constant that must stay with you. My personal story highlights the importance of these words. Due to my financial situation, I faced a lot of hurdles in my studies, but I never gave up. My journey began as a computer typist, and with time, I ventured into freelancing.
  Today, I am the CEO of a leading multinational tech company that generates millions of dollars every year, but my curiosity to learn more is still there. 
  "<span className={styles.mottoHighlight}>Rise & Re-focus</span>" is my life motto, which keeps me motivated to stay on track with my learning journey.
  The focus of this channel is to deliver quality content to inspire youth to keep pushing forward, guide them on the right career path, and keep them informed about emerging technologies.
</p>
<div className={styles.btnContainer}>
  <Button1 text="See Our Work" url="/dashboard/portfolio"/>
</div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/main.jpg"
          alt="Smile"
          width={400}
          height={400}
          className={`${styles.animatedImage} ${styles.moveAnimation}`}
        />
      </div>
</div>
<div className={styles.subContainer2}>
      <div className={styles.cardHeader}>
        <h3 className={styles.heading}>Categories</h3>
</div>
<div className={styles.categories}>
  <Link href={"/dashboard/category/Artificial-Intelligence"} className={`${styles.category} ai`}>Artificial Intelligence</Link>
  <Link href={"/dashboard/category/Blockchain"} className={`${styles.category} b-ch`}>Blockchain</Link>
  <Link href={"/dashboard/category/Cyber-Security"} className={`${styles.category} cyber`}>Cyber Security</Link>
  <Link href={"/dashboard/category/IOT"} className={`${styles.category} iot`}>IOT</Link>
  <Link href={"/dashboard/category/Web-3.0"} className={`${styles.category} web3`}>Web 3.0</Link>
  <Link href={"/dashboard/category/Web-2.0"} className={`${styles.category} web2`}>Web 2.0</Link>
      </div>
</div>
<Recentposts/>
    </div>
  );
}
