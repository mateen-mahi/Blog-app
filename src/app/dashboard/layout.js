import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import "./dashboard.css"
import { authOptions } from "@/utils/auth";

export const metadata = {
  title: "Irfan Malik || Dashboard",
  description: "Irfan sir blog ceo xeven solutions",
};

export default async function RootLayout({ children }) {

  const session = await getServerSession(authOptions);
  if(!session) redirect("/")

  return (
    <div className="mainContainer">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
