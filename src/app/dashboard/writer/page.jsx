"use client"
import { useEffect, useState, useRef } from "react";
import styles from "./writer.module.css";
import { FaPlus, FaImage} from 'react-icons/fa';
import { IoMdDocument } from 'react-icons/io';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const storage = getStorage(app);
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const { data: session } = useSession();
  const authorImg = session?.user?.image || "/irfan_sitting.png";
  const author = session?.user?.name || "Unknown";
  const role = session?.user?.role 
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const fileInputRef = useRef(null);
  const router = useRouter()

  useEffect(() => {
    const upload = () => {
      if (file) {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setText('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            console.error("Upload error: ", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImg(downloadURL);
            });
          }
        );
      }
    };

    upload();
  }, [file]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    handleImageClick();
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleTextEditorChange = (content) => {
    setContent(content);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };


  const handlePostClick = async () => {
    if (!title || !content || !category || !author || !authorImg) {
      alert("Some values are empty. Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          img,
          content,
          category,
          author,
          authorImg,
        }),
      });

      if (response.ok) {
        alert("Form submitted successfully");
        router.push("/dashboard");
        // setTitle("")
        // setImg("")
        // setContent("")
        // setCategory("")

      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      alert("An error occurred during submission: " + error.message);
    }
  };

  return (
    (role === "admin" || role  === "owner") ? (
    <div className={styles.container}>
      <p className={styles.headingTxt}>{text}</p>
      <input type="text" placeholder="Title" className={styles.input} onChange={handleTitleChange} />
      <input
        type="file"
        name="file"
        id="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />

      <div className={styles.textEditor}>
        <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
          <FaPlus />
        </button>

        {isOpen && (
          <div className={styles.add}>
            <label htmlFor="file">
              <button className={styles.addButton} onClick={handleImageClick}>
                <FaImage />
              </button>
            </label>
            <button className={styles.addButton}>
              <IoMdDocument />
            </button>
          </div>
        )}

        <label className={styles.category} htmlFor="category">Category:</label>
        <select className={styles.select} id="category" onChange={handleCategoryChange} value={category}>
          <option className={styles.options} value="">Select a category</option>
          <option className={styles.options} value="Artificial-Intelligence">Artificial-Intelligence</option>
          <option className={styles.options} value="Blockchain">Blockchain</option>
          <option className={styles.options} value="Cyber-Security">Cyber-Security</option>
          <option className={styles.options} value="IOT">IOT</option>
          <option className={styles.options} value="web-3.0">web-3.0</option>
          <option className={styles.options} value="web-2.0">web-2.0</option>
        </select>

        <ReactQuill theme="bubble" value={content} onChange={handleTextEditorChange} placeholder="Tell Your Story ......." />
      </div>
      <button className={styles.postBtn} onClick={handlePostClick}>
        Publish
      </button>
    </div>) : (<div className={styles.container}>
      <h1 className={styles.headingTxt} style={{textAlign:"center"}}>Only Admin Can Write Posts</h1>
      </div>)
  )
};

export default Page;
