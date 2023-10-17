"use client"
import { useRouter } from "next/navigation";
import styles from "./delete.module.css"



const Page = ({ params }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_MESSAGE_API}/${params.deletemsgId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/dashboard/userpage");
      } else {
        const errorData = await response.json();
        alert(`Failed to delete item: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred while deleting the item.");
    }
  };


 const  handleRedirect = ()=>{
  router.push("/dashboard/userpage");
 }
  return (
    <div className={styles.container}>
        <div className={styles.model}>
          <div className={styles.modelContent}>
            <h2 className={styles.modelHeading}>Confirm Deletion</h2>
            <p className={styles.modelText} >Are you sure you want to delete this item?</p>
            <div className={styles.btnContainer}>
              <button onClick={handleRedirect} className={styles.cancelBtn}>
                Cancel
              </button>
              <button onClick={handleDelete} className={styles.deleteBtn}>
                Delete
              </button>
            </div>
          </div>
        </div>
    </div>
   
  );
};

export default Page;
