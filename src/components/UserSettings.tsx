import { useEffect, useState } from "react";
import { useRecoilState,useRecoilValue } from "recoil";
import { userState,userIpfsCredentials } from "../recoil";
import SettingModal from "./SettingModal";
import axios from "axios";
import toast from "react-hot-toast";

export const UserSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const BACKEND_URL = import.meta.env.VITE_REACT_URL_BACKEND_URL;
  const user = useRecoilValue(userState);
  const[credentials, setCredentials] = useRecoilState(userIpfsCredentials)
   
  // Fetch saved settings
  const fetchCredentials = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/users/credential?userId=${user.userId}`);
      const data = response.data;
        if (response.status === 200 && data) {
           if (data.domain && data.api_key) {
                setCredentials({ domain: data?.domain, apiKey: data?.api_key });
        } else {
            toast.error("Unexpected response while fetching settings.");
            console.error("Unexpected response:", response);
        }
      
    } }catch (error) {
      console.error("Error fetching settings:", error);
    }
  };
  useEffect(() => {
    fetchCredentials();
  }, []);

  const handleSaveSettings = async (newDomain: string, newApiKey: string) => {
    try {
      const SaveCredentials =await axios.post(`${BACKEND_URL}/api/users/credential`, {
        domain: newDomain,
        api_key: newApiKey,
        user_id: user.userId,
      });
      if (SaveCredentials.status !== 200) {

      setCredentials({ domain: newDomain, apiKey: newApiKey });
      setIsModalOpen(false);
      toast.success("Credentials saved successfully.");

    }} catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  return (
    <>
      <div className="m-5">
        <div className="w-11/12 shadow-md h-44 rounded-lg border-2 border-gray-200 p-5">
          <p className="text-lg font-semibold">User Details</p>
          <div className="mt-7 flex">
            <p className="text-md gap-2 flex text-gray-700">
              <span>Name:</span>
              <span className="font-semibold">{user?.name}</span>
            </p>
            <p className="text-md gap-2 flex text-gray-700 ml-64">
              <span>Wallet Address:</span>
              <span className="font-semibold">{user?.wallet}</span>
            </p>
          </div>
          <div className="flex mt-5">
            <p className="text-md gap-2 flex text-gray-700">
              <span>Email:</span>
              <span className="font-semibold">{user?.email}</span>
            </p>
            <p className="text-md gap-2 flex text-gray-700 ml-36">
              <span>Last SignedIn:</span>
              <span className="font-semibold">{user?.lastLogin}</span>
            </p>
          </div>
        </div>

        <div className="mt-10 w-11/12 shadow-md h-32 rounded-lg border-2 border-gray-200 p-5">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Delock Drive</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-gray-900 hover:text-gray-700"
              title={credentials?.domain && credentials?.apiKey ? "Edit settings" : "Add settings"}
            >
              {credentials?.domain && credentials?.apiKey ? (
                <i className="fa-solid fa-pen-to-square text-gray-900"></i>
              ) : (
                <i className="fa-solid fa-plus text-gray-900"></i>
              )}
            </button>
          </div>
          {credentials?.domain && credentials?.apiKey ? (
            <div className="mt-7 flex">
              <p className="text-md gap-2 flex text-gray-700">
                <span>Domain:</span>
                <span className="font-semibold">{credentials?.domain}</span>
              </p>
              <p className="text-md gap-2 flex text-gray-700 ml-44">
                <span>API Key:</span>
                <span className="font-semibold">{credentials?.apiKey}</span>
              </p>
            </div>
          ) : (
            <div className="mt-7 text-gray-500 text-center font-semibold">
              No Delock Drive settings configured. Click the add button to set up.
            </div>
          )}
        </div>
      </div>

      <SettingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentDomain={credentials?.domain}
        currentApiKey={credentials?.apiKey}
        onSave={handleSaveSettings}
      />
    </>
  );
};
