import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import overview_img from "../assets/adminoverview.png";
import AdminCard1 from "../components/Home/AdminCard1";
import AdminCard2 from "../components/Home/AdminCard2";
import axios from "axios";
import { useAuth } from "../context/useAuth";
import Loader from "../components/Loader";
import { useRecoilState } from "recoil";
import { AdminState } from "../recoil";
function AdminOverview() {
  const { account } = useAuth();
  // Use local loading state instead of global Recoil state
  const [loading, setLoading] = useState(false);
  const[Admin, setAdmin] = useRecoilState(AdminState)
  const BACKEND_URL = import.meta.env.VITE_REACT_URL_BACKEND_URL;

  const formatLastLogin = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short", // This gives time like 4:15 PM
    });
  };
  
  useEffect(() => {
    // Track if the component is mounted
    let isMounted = true;
    
    const fetchDepartmentDetails = async () => {
      if (!account) return;
      
      setLoading(true);
      try {
        const response = await axios.get(`${BACKEND_URL}/api/department/admin?address=${account}`);
        console.log("Department Details:", response.data);
        if(response.status===200 && response.data){
          const admin = response.data;
          const currentTime = new Date().toISOString();
          const formattedTime = formatLastLogin(currentTime);
        // Only update state if component is still mounted
        if (isMounted) {
          setAdmin({
            department_name: admin?.department_name,
            department_code: admin?.department_code,
            wallet_address: admin?.wallet_address,
            department_id: admin?._id,
            lastLogin: formattedTime,
          });
          // toast.success("Department details fetched successfully.");
          setLoading(false);
        }}
      } catch (error) {
        if (isMounted) {
          if (error instanceof Error) {
            console.error("Error fetching department details:", error.message);
          } else {
            console.error("Error fetching department details:", error);
          }
          setLoading(false);
        }
      }
    };
    if(Admin?.wallet_address!==account){
      fetchDepartmentDetails();
    }
    
    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, [account,setAdmin]);

  // Show your own loading indicator if needed
  if (loading) {
    return (<Loader/>)
  }


  return (
    <>
      <div className="flex justify-between">
        <div className="h-32 w-fit bg-light-blue p-5 pr-0 flex justify-between rounded-md">
          <div>
            <div className="flex text-3xl gap-3">
              <h3 className="text-dark-blue font-semibold">Welcome</h3>
              <h3 className="font-light">
                {Admin.department_name}
              </h3>
            </div>
            <p className="font-light text-lg">
              "Great to have you back in the Delock and ready to go!"
            </p>
          </div>
          <img className="h-[170px] ml-4 -mt-5" src={overview_img} alt="secure_img" />
        </div>
        <Profile />
      </div>

      <div className="mt-5">
        <div className="w-4/5 grid grid-cols-3 gap-2 mt-20 ">
          <div className="text-bold-blue text-2xl font-semibold ml-6 pl-5 mt-4">Statics Logics</div>
          <AdminCard1 Name="Total Issuer" Number={280} />
          <AdminCard1 Name="Total Users" Number={300} />
          <AdminCard1 Name="Total Department Documents" Number={840} />
          <AdminCard1 Name="Department Documents" Number={3} />
          <AdminCard1 Name="Documents Issued" Number={300} />
        </div>
      </div>

      <div className="mt-10 pl-5">
        <p className="font-semibold">Issued Documents found</p>
        <div className="flex mt-5 gap-5">
          <AdminCard2 Name="PanCard" />
          <AdminCard2 Name="Aadhaar Card" />
          <AdminCard2 Name="Voter ID" />
        </div>
      </div>

      <div className="flex items-center rounded-lg bg-light-blue pt-1 w-11/12 mt-10 h-20">
        <div className="text-base ml-4 font-light text-dark-blue text-lg">
          Verify user-uploaded documents by cross-checking user details and ensuring compliance with ethical guidelines.
          Approve accurate and appropriate content before publishing.
        </div>
      </div>
    </>
  );
}

export default AdminOverview;
