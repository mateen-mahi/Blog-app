import Register from "@/components/register/Register"
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"



export const metadata = {
  title: "Irfan Malik || Register",
  description: "resgiter username",
};

const page = async () => {
  const session = await getServerSession(authOptions);
  if(session) redirect("/dashboard")
  return (
  <Register/>
  )
}

export default page