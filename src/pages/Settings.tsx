import Profile from "../components/Profile"
import TextComponent from "../components/TextComponent"
import { useAuth } from "../context/useAuth";
import { UserSettings } from "../components/UserSettings";

function Settings() {


 
  const { role } = useAuth()
  const isAdmin = role === "admin";

  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
       <div className="flex justify-between">
              <TextComponent text="Settings" fontSize="40px" />
              <Profile/>
       
        </div>
        {isAdmin ?  (<AdminSettings/>) : (<UserSettings/>) }
        
       
    </div>
  )
}

export default Settings



const AdminSettings = () => {
  return (
    <div className="m-5">
    <div className="w-11/12 [box-shadow:4px_4px_8px_rgba(0,0,0,0.2)] h-44 rounded-lg border-2 border-gray-200 p-5 ">
      <p className="text-lg font-semibold ">Admin Details</p>
      <div className="mt-7 flex">
        <p className="text-md gap-2 flex text-gray-700 ">
          <span >Department:</span> 
          <span className="font-semibold">Nandkishor R</span>
        </p>
        <p className="text-md gap-2 flex text-gray-700 ml-64">
          <span >Wallet Address:</span> 
          <span className="font-semibold">0xa52dDA4962CF0A7b4DFd3894F2DDFAe716852C72</span>
        </p>
      </div>
      <div className="flex mt-5 w-full">
      <p className="text-md gap-2 flex text-gray-700 ">
          <span >Department Id:</span> 
          <span className="font-semibold">KE-D1</span>
        </p>
        <p className="text-md gap-2 flex text-gray-700 ml-72">
          <span >Last SignedIn:</span> 
          <span className="font-semibold">22-01-2025 4:30 pm</span>
        </p>
      </div>
     
    </div>
    </div>
  )

}