import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/useAuth";
import { useRecoilState } from "recoil";
import { AdmindocumentState, AdminState } from "../recoil";
import Loader from "../components/Loader";
import Profile from "../components/Profile";
import AdminCard1 from "../components/Admin/AdminCard1";
import AdminCard2 from "../components/Admin/AdminCard2";
import overview_img from "../assets/adminoverview.png";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";


function AdminOverview() {
  const { account, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useRecoilState(AdmindocumentState);
  const [admin, setAdmin] = useRecoilState(AdminState);
  const [overviewCount, setOverviewCount] = useState<any>([]);
const navigate=useNavigate();
const hasFetched = useRef(false);
  const BACKEND_URL = import.meta.env.VITE_REACT_URL_BACKEND_URL;

  const formatLastLogin = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };
  const fetchOverviewCount = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/department/all/count`);
      if (response.status === 200) {
        console.log("Overview count fetched successfully:", response.data);
        setOverviewCount(response.data);
      } else {
        console.error("Failed to fetch overview count:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching overview count:", error);
    }
  }
  const fetchAdminDetails = async () => {
    if (!account || hasFetched.current) return;
  
    setLoading(true);
    try {
      console.log("Fetching admin details...");
  
      const response = await axios.get(`${BACKEND_URL}/api/department/admin/${account}`);
  
      if (response.status === 200 && response.data) {
        const data = response.data;
  
        const formattedTime = formatLastLogin(new Date().toISOString());
  
        setAdmin({
          department_name: data?.department_name,
          department_code: data?.department_code,
          wallet_address: data?.wallet_address,
          department_id: data?._id,
          lastLogin: formattedTime,
        });
  
        const docsResponse = await axios.get(`${BACKEND_URL}/api/documents?documentId=${data?.department_code}`);
        if (docsResponse.status === 200 && docsResponse.data) {
          setDocuments(docsResponse.data);
          hasFetched.current = true;
      } else {
        // MongoDB record not found
        toast.error("Admin not registered in database.");
        navigate("/signin"); // 🔁 Redirect to login
      }}
    } catch (error: any) {
      toast.error("Admin not found or server error.");
      console.error("Error:", error?.response || error.message);
      navigate("/signin"); // 🔁 Redirect to login
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    hasFetched.current = false; // Reset fetch flag when account changes
  }, [account]);
  
  useEffect(() => {
    if (isAuthenticated && account) {
      fetchAdminDetails();
      fetchOverviewCount(); // Fetch overview count when authenticated
    }
  }, [isAuthenticated, account,admin.department_name]);

  
  if (loading) return <Loader />;

  return (
    <>
      <div className="flex justify-between">
        <div className="h-32 w-fit bg-light-blue p-5 pr-0 flex justify-between rounded-md">
          <div>
            <div className="flex text-3xl gap-3">
              <h3 className="text-dark-blue font-semibold">Welcome</h3>
              <h3 className="font-light">
                {admin?.department_name || "Department"}
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
        <div className="w-4/5 grid grid-cols-3 gap-2 mt-20">
          <div className="text-bold-blue text-2xl font-semibold ml-6 pl-5 mt-4">
            Statics Logics
          </div>
          <AdminCard1 Name="Total Issuer" Number={overviewCount?.departmentsCount} />
          <AdminCard1 Name="Total Users" Number={overviewCount?.userCount} />
          <AdminCard1 Name="Total Department Documents" Number={overviewCount?.documentsCount} />
          <AdminCard1 Name="Department Documents" Number={documents.length} />
          <div className="text-bold-blue text-2xl font-semibold ml-6 pl-5 mt-4">
          System Summary
          </div>
        </div>
      </div>

      <div className="mt-10 pl-5">
        <p className="font-semibold">Issued Documents found</p>
        <div className="flex mt-5 gap-5 flex-wrap">
          {documents.length > 0 ? (
            documents.map((doc, index) => (
              <AdminCard2 key={index} data={doc} />
            ))
          ) : (
            <div className="text-light-blue font-light text-lg">
              No documents found
            </div>
          )}
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
