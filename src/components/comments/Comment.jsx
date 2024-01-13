"use client"
import Image from "next/image";
import styles from "./comment.module.css";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Comment = ({postid}) => {
  const { data: session } = useSession();
  const userImg = session?.user?.image || "/irfan_sitting.png";
  const user = session?.user?.name || "Unknown";
  // console.log(session.user)
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState([]);
  const postId =  postid;

  const handleSendClick = async () => {
    if (!description) {
      alert("Write a Comment .");
      return;
    }

    try {
      const response = await fetch(/api/comments, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          userImg,
          description,
          postId,
        }),
      });

      if (response.ok) {
        alert("Comment sent.");
        setDescription(""); // Clear the input field after sending the comment
        getComments(); // Fetch and refresh the comments
      } else {
        alert("Sending failed");
      }
    } catch (error) {
      alert("An error occurred during submission: " + error.message);
    }
  };

  const getComments = async () => {
    try {
      const response = await fetch(`/api/posts/${postid}/comments`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        alert("Failed to fetch comments");
      }
    } catch (error) {
      alert("An error occurred while fetching comments: " + error.message);
    }
  };

  useEffect(() => {
    getComments(); // Fetch comments when the component mounts
  }, []);

  return (
    <div className={styles.commentsContainer}>
      <h3 className={styles.comHeading}>Comments</h3>

      <div className={styles.CommentInputContainer}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.input}
          placeholder="Write a Comment....."
        />
        <button className={styles.button} onClick={handleSendClick}>
          Send
        </button>
      </div>

      {comments.map((comment) => (
        <div className={styles.userMainContainer} key={comment._id}>
          <div className={styles.userContainer}>
            <Image
              src={comment.userImg}
              alt={comment.user}
              className="small-rounded-img"
              width={50}
              height={50}
            />
            <div className={styles.userSubContainer}>
              <h4 className={styles.userName}>{comment.user}</h4>
              <p className={styles.date}>{comment.createdAt.substr(0, 10)}</p>
            </div>
          </div>
          <div className={styles.userText}>{comment.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
