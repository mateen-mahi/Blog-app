import Blog from "../blogcard/page"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Sidemenu from "../sidemenu/Sidemenu"
import styles from "./Recentposts.module.css"

const Recentposts = () => {

  return (
  <div className={styles.container}>
    <h3 className={styles.heading}>Recent Posts</h3>
<div className={styles.subContainer3}>
  <div className={styles.Blog}>
<Blog/>
<div className={styles.paginationContainer}>
  <button className={`${styles.btn} ${styles.prevBtn}`}>
    <FaArrowLeft /> Previous
  </button>
  <button className={`${styles.btn} ${styles.nextBtn}`}>
    Next <FaArrowRight />
  </button>
</div>

  </div>
  <div className={styles.Sidemenu}>
<Sidemenu/>
  </div>
</div>
</div>
  )
}

export default Recentposts