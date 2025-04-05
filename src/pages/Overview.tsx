import { useAuth } from "../context/useAuth";
import AdminOverview from "./AdminOverview";
import UserOverview from "./UserOverview";
import {useRecoilValue} from "recoil";
import Loader from "../components/Loader"; // Ensure Loader is imported
import { isLoadingState } from "../recoil";
function Overview() {

  const {role} = useAuth()
  const isAdmin = role === "admin"; // Check if the user is an admin
  const isLoading = useRecoilValue(isLoadingState); // Define isLoading
  console.log("isLoading", isLoading)

  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
      {isLoading ? (
        <Loader /> // Show loader if loading
      ) : (
        isAdmin ? <AdminOverview /> : <UserOverview />
      )}
    </div>
  );
}

export default Overview;

