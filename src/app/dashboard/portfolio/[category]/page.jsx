import Image from "next/image";
import styles from "./category.module.css";

const getData = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_PORTFOLIO_API}/${id}`);
  return await response.json();
}

const Category = async ({ params }) => {
  const res = await getData(params.category);

  return (
    <div>
        <div className={styles.container} key={res._id}>
          <h3 className={styles.categoryText}>{res.field}</h3>
          <h2 className={styles.title}>{res.title}</h2>
          <div className={styles.imageContainer}>
            <Image src={res.img1} alt={res.img1} layout="fill" objectFit="cover" />
          </div>
          <p className={styles.textContent}>{res.content}</p>
          <div className={styles.imageContainer}>
            <Image src={res.img2} alt={res.img2} layout="fill" objectFit="cover" />
          </div>
        </div>
    </div>
  );
};

export default Category;



export async function generateMetadata({ params }) {
  const res = await getData(params.category);
  return {
    title: " Portfolio | " + res.field ,
    description: res.title,
  };
}