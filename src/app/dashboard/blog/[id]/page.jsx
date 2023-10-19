import Image from "next/image";
import styles from "./blogpost.module.css";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import Sidemenu from "@/components/sidemenu/Sidemenu";
import Comment from "@/components/comments/Comment";
import BlogContent from "@/components/blogContent/BlogContent";

async function getData(id) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}/${id}`, {
    cache: "no-store",
  });

  if (!data.ok) {
    throw new Error("Not Found");
  }

  return data.json();
}

const BlogPost = async ({ params }) => {
  const res = await getData(params.id);
  const postData = res;

  return (
    <div className={styles.container}>
      <div className={styles.customizeContainer}>
        <Link href={`/dashboard/blog/${params.id}/edit/${params.id}`} className={styles.linkE}>
          <FaEdit /> Edit
        </Link>
        <Link href={`/dashboard/blog/${params.id}/delete/${params.id}`} className={styles.linkD}>
          <FaTrash /> Delete
        </Link>
      </div>

      <div className={styles.firstContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.heading}>{postData.title}</h3>
          <div className={styles.AuthorInfo}>
            <Image
              src={postData.authorImg}
              alt={postData.author}
              className={styles.smallRoundedImg}
              width={50}
              height={50}
            />
            <h5 className={styles.AuthorName}>{postData.author}</h5>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={postData.img || "/no.jpg"}
            alt={postData.img}
            layout="responsive" // Use responsive layout
            width={800} // Set a fixed width or use a percentage
            height={400} // Set a fixed height or use a percentage
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.subContainer3}>
          <div className={styles.Blog}>
            <BlogContent content={postData.content} />
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

export function generateMetadata() {
  return {
    title: "Irfan Sir | Blog Post",
    description: "Xeven Solutions",
  };
}
