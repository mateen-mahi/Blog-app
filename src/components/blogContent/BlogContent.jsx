"use client"
import styles from "./blogContent.module.css";

const BlogContent = ({ content }) => {
  if (typeof window !== 'undefined') {
    return (
      <div
        className={styles.pText}
        dangerouslySetInnerHTML={{ __html: content }}
        suppressHydrationWarning={true}
      ></div>
    );
  }
};

export default BlogContent;
