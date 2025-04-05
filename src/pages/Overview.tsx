import { useAuth } from "../context/useAuth";
import AdminOverview from "./AdminOverview";
import UserOverview from "./UserOverview";
function Overview() {
  const {role} = useAuth()
  const isAdmin = role === "admin";
  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
      {isAdmin ? (<AdminOverview/>) : (<UserOverview/>)}
    </div>
  );
}

export default Overview;

