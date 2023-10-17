'use Client'
import Link from "next/link"
import styles from "./Btn.module.css"
const Button = ({text,url}) => {
  return (
    <Link href={url}>
    <button className={styles.button}>{text}</button>
    </Link>
  )
}

export default Button