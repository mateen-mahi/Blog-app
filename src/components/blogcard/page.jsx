"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./blog.module.css";
import Link from "next/link";
import BlogContent from "../blogContent/BlogContent";

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

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data on the client-side using JavaScript fetch
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_BLOG_API, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Error fetching Blogs API");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item._id} className={styles.parentContainer}>
          <Link href={`/dashboard/blog/${item._id}`} className={styles.container}>
            <div className={styles.cardHeader}>
              <p className={styles.pText}>{calculateReadingTime(item.content)} min to read</p>
              <p className={styles.dateCategory}>
                {item.createdAt.substr(0, 10)}-<span style={{ color: "red" }}>{item.category}</span>
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
                <h4 className={styles.headingText}>{truncateContent(item.title, 20)}</h4>
                <BlogContent content={truncateContent(item.content, 50)} />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
