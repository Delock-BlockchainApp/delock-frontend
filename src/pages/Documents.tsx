import { useAuth } from "../context/useAuth";
import AdminDocuments from "./AdminDocuments";
import UserDocuments from "./UserDocuments";
function Documents() {
  const { role } = useAuth()
  const isAdmin = role === "admin";
  return (
    <div className="ml-5 h-full p-5 overflow-y-scroll scrollbar ">
      {isAdmin ? (<AdminDocuments/>) : (<UserDocuments/>)}
</div>
  )
}

export default Documents
