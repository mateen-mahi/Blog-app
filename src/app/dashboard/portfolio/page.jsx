import Link from "next/link";
import styles from "./portfolio.module.css";



export const metadata = {
  title: "Irfan Malik || Portfolio",
  description: "Irfan sir blog ceo xeven solutions",
};


const getData = async()=>{
 
    const response = await fetch(process.env.NEXT_PUBLIC_PORTFOLIO_API)
    return  await response.json();

}

const Portfolio =async () => {
const res = await getData()

  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Select a field</h1>
      <div className={styles.fieldContainer}>
        {res.map((card) => (
          <Link key={card._id} href={`/dashboard/portfolio/${card._id}`} className={`${styles.fieldCard}`} style={{ backgroundImage: `url(${card.img1})` }}>
            <span className={styles.fieldName}>{card.field}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
