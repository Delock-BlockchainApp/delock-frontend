import Profile from "../components/Profile"
import TextComponent from "../components/TextComponent"
import { useAuth } from "../context/useAuth";
import { UserSettings } from "../components/UserSettings";
import { AdminSettings } from "../components/AdminSettings";

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
