import Image from "next/image";
import styles from "./sidemenu.module.css";
import Link from "next/link";


const Sidemenu = () => {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer1}>
<div className={styles.cardHeader}>
<p className={styles.smTxt}>What's hot?</p>
        <h3 className={styles.heading}>Most Popular</h3>
</div>
          <div className={styles.popularCard}>
            <div className={`${styles.category} ai`}>Culture</div>
            <div className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita!</div>
            <div className={styles.authorInfo}>Joan Doe 10.02.2023</div>
          </div>
       

          <div className={styles.popularCard}>
            <div className={`${styles.category} b-ch`}>Culture</div>
            <div className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita!</div>
            <div className={styles.authorInfo}>Joan Doe 10.02.2023</div>
          </div>


          <div className={styles.popularCard}>
            <div className={`${styles.category} cyber`}>Culture</div>
            <div className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita!</div>
            <div className={styles.authorInfo}>Joan Doe 10.02.2023</div>
          </div>


          <div className={styles.popularCard}>
            <div className={`${styles.category} iot`}>Culture</div>
            <div className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita!</div>
            <div className={styles.authorInfo}>Joan Doe 10.02.2023</div>
          </div>

      </div>
      <div className={styles.subContainer2}>
      <div className={styles.cardHeader}>
<p className={styles.smTxt}>Discover by topic</p>
        <h3 className={styles.heading}>Categories</h3>
</div>
<div className={styles.categories}>
  <Link href={"/dashboard/category/Artificial-Intelligence"} className={`${styles.category} ai`}>Artificial Intelligence</Link>
  <Link href={"/dashboard/category/Blockchain"}className={`${styles.category} b-ch`}>Blockchain</Link>
  <Link href={"/dashboard/category/Cyber-Security"}className={`${styles.category} cyber`}>Cyber Security</Link>
  <Link href={"/dashboard/category/IOT"} className={`${styles.category} iot`}>IOT</Link>
  <Link href={"/dashboard/category/Web-3.0"}className={`${styles.category} web3`}>Web 3.0</Link>
  <Link href={"/dashboard/category/Web-2.0"} className={`${styles.category} web2`}>Web 2.0</Link>
</div>
      </div>


      <div className={styles.subContainer3}>
      <div className={styles.cardHeader}>
<p className={styles.smTxt}>Chosen by editors</p>
        <h3 className={styles.heading}>Most Popular</h3>
</div>
<div className={styles.editorCard}>
<Image className={`${styles.image}  small-rounded-img`}  src={"/irfan_sitting.png"} alt={"editor image"} width={50} height={50} />
      <div className={styles.textContainer}>
            <div className={`${styles.category} ai`}>Culture</div>
            <div className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita!</div>
            <div className={styles.authorInfo}>Joan Doe 10.02.2023</div>
          </div>
          </div>


          <div className={styles.editorCard}>
<Image  className={`${styles.image}  small-rounded-img`} src={"/irfan_sitting.png"} alt={"editor image"} width={50} height={50} />
      <div className={styles.textContainer}>
            <div className={`${styles.category} b-ch`}>Culture</div>
            <div className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita!</div>
            <div className={styles.authorInfo}>Joan Doe 10.02.2023</div>
          </div>
          </div>




          <div className={styles.editorCard}>
<Image className={`${styles.image}  small-rounded-img`}  src={"/irfan_sitting.png"} alt={"editor image"} width={50} height={50} />
      <div className={styles.textContainer}>
            <div className={`${styles.category} cyber`}>Culture</div>
            <div className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita!</div>
            <div className={styles.authorInfo}>Joan Doe 10.02.2023</div>
          </div>
          </div>







          <div className={styles.editorCard}>
<Image className={`${styles.image}  small-rounded-img`}  src={"/irfan_sitting.png"} alt={"editor image"} width={50} height={50} />
      <div className={styles.textContainer}>
            <div className={`${styles.category} iot`}>Culture</div>
            <div className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, expedita!</div>
            <div className={styles.authorInfo}>Joan Doe 10.02.2023</div>
          </div>
          </div>


      </div>
    </div>
  )
}

export default Sidemenu
