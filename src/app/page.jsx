import Login from "@/components/login/Login"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import styles from "./page.module.css"
import { authOptions } from "@/utils/auth";


export const metadata = {
  title: "Irfan Malik || Login",
  description: "Xeven login page",
};

const page = async () => {
  const session = await getServerSession(authOptions);
  if(session) redirect("/dashboard")
  return (
    <div className={styles.container}>
      <Login/>
    </div>
  )
}

export default page