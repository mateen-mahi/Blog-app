import styles from "./category.module.css";
import Image from "next/image";
import Link from "next/link";
import Sidemenu from "@/components/sidemenu/Sidemenu";
import BlogContent from "@/components/blogContent/BlogContent";

const getData = async () => {
  try {
    const response = await fetch("/api/posts", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Error fetching Blogs API");
    }

    return await response.json();
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    throw error;
  }
};

const page = async ({ params }) => {
  const data = await getData();

  const calculateReadingTime = (content) => {
    const words = content.split(" ");
    const wordCount = words.length;
    const readingTimeInMinutes = Math.ceil(wordCount / 200);
    return readingTimeInMinutes;
  };

  const truncateContent = (content, wordCount) => {
    const words = content.split(" ");
    if (words.length <= wordCount) {
      return content;
    }
    return words.slice(0, wordCount).join(" ") + " ......";
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.category}>{params.category}</h1>
      <div className={styles.container}>
        <h3 className={styles.heading}>Recent Posts</h3>
        <div className={styles.subContainer3}>
          <div className={styles.Blog}>
            <div className={styles.parentContainer}>
              {data
                .filter((row) => {
                  if (params.category) {
                    return row.category
                      .toLowerCase()
                      .includes(params.category.toLowerCase());
                  }
                  return true;
                })

                .map((item) => (
                  <Link
                    href={`/dashboard/blog/${item._id}`}
                    key={item._id}
                    className={styles.blogContainer}
                  >
                    <div className={styles.cardHeader}>
                      <p className={styles.pText}>
                        {calculateReadingTime(item.content)} min to read
                      </p>
                      <p className={styles.dateCategory}>
                        {item.createdAt.substr(0, 10)}-
                        <span style={{ color: "red" }}>{item.category}</span>
                      </p>
                    </div>
                    <div className={styles.subContainer}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={item.img || "/no.jpg"}
                          alt={item.img}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className={styles.textContainer}>
                        <h4 className={styles.headingText}>
                          {truncateContent(item.title, 20)}
                        </h4>
                        <BlogContent
                          content={truncateContent(item.content, 50)}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className={styles.Sidemenu}>
            <Sidemenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

export async function generateMetadata({ params }) {

  return {
    title: " Category | " + params.category,
    description: "Irfan Sir median " + params.category,
  };
}
