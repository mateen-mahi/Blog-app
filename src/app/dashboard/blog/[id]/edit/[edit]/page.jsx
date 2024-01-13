import Editform from "@/components/Editform/Editform"


const page = ({params}) => {
  return (
    <div className="container">
        <Editform api={`/api/posts/${params.edit}`} />
    </div>
  )
}

export default page