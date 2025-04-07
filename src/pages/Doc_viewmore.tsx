
import axios from "axios";
import Card_component5 from "../components/Card_component5";
import Profile from "../components/Profile";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
const BACKEND = import.meta.env.VITE_REACT_URL_BACKEND_URL;
const Doc_viewmore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.issuer;
  // console.log("doc viewmore",data);
  const department_id=data?.department_id;
  

  const [documents, setDocuments] = useState<any[]>([]);
  const fetchDepartmentDocuments = async () => {
    try {
      const response = await axios.get(`${BACKEND}/api/documents?documentId=${department_id}`);
      if (response.status === 200) {
        const docdata = response.data; // Corrected to use response.data instead of response.json()
        console.log("Fetched department documents:", data); // Log the fetched data
        setDocuments(docdata); // Ensure it's an array
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          console.error("Document not found (404).");
          toast.error("There are no documents available for this department.");
        } else {
          console.error("Axios error fetching department documents:", error.message);
        }
      } else {
        console.error("Unexpected error fetching department documents:", error);
      }
    }
  };
  useEffect(() => {
    if (department_id) {
      fetchDepartmentDocuments();
    }
  }, [department_id]);


  if (!data) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold text-red-600">No Data Available</h1>
        <p className="text-lg text-gray-700">We couldn't retrieve the document data. Please try again.</p>
        <button 
          onClick={() => navigate(-1)} 
          className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-[40px] font-poppins font-semibold mb-6" style={{ color: "#004182" }}>
          Documents
        </div>
        <Profile />
      </div>

      <div className="flex">
        <i
          onClick={() => {
            navigate(-1);
          }}
          className="fa-solid fa-arrow-turn-up transform -rotate-90 text-2xl text-black font-light ml-2 cursor-pointer"
        />
        <div className="text-2xl font-poppins font-light ml-5">{data?.department_name} , {data?.state}</div>
      </div>
      <p className="flex flex-col ml-14 mt-5 text-md w-[1000px]">{data?.department_description}</p>
      <div className="flex justify-between mt-5 font-medium ml-14">Available documents</div>
      {documents?.length === 0 ? (
       <div className=" flex w-full justify-center ">
       <div className="flex justify-center items-center rounded-lg bg-light-blue pt-1 w-8/12 mt-10 h-28">
         <div className="text-base ml-4 font-light text-dark-blue text-lg font-medium">
           No Data Available , there are no documents available for this department.
         </div>
       </div>
       </div>
      ) : (
       <div className="ml-10 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-2/3">
        {documents?.map((doc, index) => (
          <Card_component5
            key={index}
            data={{ dep_name: data?.department_name, dep_code:data?.department_id,state: data?.state, doc_code: doc?.document_id, title: doc?.document_name,doc_description: doc?.document_description }}
          />
        ))}
      </div>)}
      
    </div>
  );
};

export default Doc_viewmore;
