import Profile from "../components/Profile"
import TextComponent from "../components/TextComponent"
import SettingModal from "../components/SettingModal"
import { useState } from "react";
import { useAuth } from "../context/useAuth";

function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [domain, setDomain] = useState("");
  const [apiKey, setApiKey] = useState("");
  const { role } = useAuth()
  const isAdmin = role === "admin";

  const handleSaveSettings = (newDomain: string, newApiKey: string) => {
    setDomain(newDomain);
    setApiKey(newApiKey);
    // Here you would typically make an API call to update the settings
  };
  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
       <div className="flex justify-between">
              <TextComponent text="Settings" fontSize="40px" />
              <Profile/>
       
        </div>
        {isAdmin ?  (AdminSettings(apiKey, domain)) : (UserSettings(apiKey, domain, setIsModalOpen)) }
        
        <SettingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentDomain={domain}
        currentApiKey={apiKey}
        onSave={handleSaveSettings}
      />
    </div>
  )
}

export default Settings

const UserSettings = (apiKey: string, domain: string, setIsModalOpen: (value: boolean) => void) => {
  return (
    <div className="m-5">
          <div className="w-11/12 [box-shadow:4px_4px_8px_rgba(0,0,0,0.2)] h-44 rounded-lg border-2 border-gray-200 p-5 ">
            <p className="text-lg font-semibold ">User Details</p>
            <div className="mt-7 flex">
              <p className="text-md gap-2 flex text-gray-700 ">
                <span >Name:</span> 
                <span className="font-semibold">Nandkishor R</span>
              </p>
              <p className="text-md gap-2 flex text-gray-700 ml-64">
                <span >Wallet Address:</span> 
                <span className="font-semibold">0xa52dDA4962CF0A7b4DFd3894F2DDFAe716852C72</span>
              </p>
            </div>
            <div className="flex mt-5">
            <p className="text-md gap-2 flex text-gray-700 ">
                <span >Email:</span> 
                <span className="font-semibold">iamnandkishorr@gmail.com</span>
              </p>
              <p className="text-md gap-2 flex text-gray-700 ml-36">
                <span >Last SignedIn:</span> 
                <span className="font-semibold">22-01-2025 4:30 pm</span>
              </p>
            </div>
           
          </div>
          <div className="mt-10 w-11/12 [box-shadow:4px_4px_8px_rgba(0,0,0,0.2)] h-32 rounded-lg border-2 border-gray-200 p-5 ">
          
          <div className="flex justify-between">
            <p className="text-lg font-semibold ">Delock Drive</p>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="text-gray-900 hover:text-gray-700"
              title={domain && apiKey ? "Edit settings" : "Add settings"}
            >
              {domain && apiKey ? (
                <i className="fa-solid fa-pen-to-square text-gray-900"></i>
              ) : (
                <i className="fa-solid fa-plus text-gray-900"></i>
              )}
            </button>
          </div>
          {domain && apiKey ? (
            <div className="mt-7 flex">
              <p className="text-md gap-2 flex text-gray-700 ">
                <span>Domain:</span> 
                <span className="font-semibold">{domain}</span>
              </p>
              <p className="text-md gap-2 flex text-gray-700 ml-44">
                <span>API Key:</span> 
                <span className="font-semibold">{apiKey}</span>
              </p>
            </div>
          ) : (
            <div className="mt-7 text-gray-500 text-center font-semibold">
              No Delock Drive settings configured. Click the add button to set up.
            </div>
          )}
        </div>

        </div>
  )
}

const AdminSettings = (apiKey: string, domain: string) => {
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