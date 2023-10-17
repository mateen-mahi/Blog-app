import Editform from "@/components/Editform/Editform"


const page = ({params}) => {
  return (
    <div className="container">
        <Editform api={`${process.env.NEXT_PUBLIC_BLOG_API}/${params.edit}`} />
    </div>
  )
}

export default page