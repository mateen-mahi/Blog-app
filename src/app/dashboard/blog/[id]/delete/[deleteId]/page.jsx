"use client"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import styles from "./delete.module.css"



const Page = ({ params }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const email = session?.user?.email;
  const handleDelete = async () => {
    try {
      const response = await fetch(`${"/api/posts"}/${params.deleteId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Item deleted successfully");
        router.push("/dashboard");
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
  router.push(`/dashboard/blog/${params.deleteId}`);
 }
  return (
    (role === "admin" || role  === "owner") ? (
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
    ) : (
      <div className={styles.container}>
        <div className={styles.model}>
          <div className={styles.modelContent}>
            <h2 className={styles.modelHeading}>You are Not An Admin</h2>
            <p className={styles.modelText}>Only Admin Can Delete This Post</p>
            <div className={styles.okayContainer}>
              <button onClick={handleRedirect} className={styles.okayBtn}>
Okay 
              </button>
            </div>
          </div>
        </div>
    </div>
    )
  );
};

export default Page;
