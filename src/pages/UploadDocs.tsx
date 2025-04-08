import { useEffect, useState } from "react";
// import Pancard_form from "../components/Pancard_form";
import TextComponent from "../components/TextComponent";
import { useBlockchain } from "../context/BlockchainContext";
import { useAuth } from "../context/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import Profile from "../components/Profile";
import { DocumentForm } from "../components/DocumentForm";
import axios from "axios";
import toast from "react-hot-toast";

function UploadDocs() {
  const { contract, account, connectWallet } = useBlockchain();
  const [documentData, setDocumentData] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(true);
  const [schemaNotFound, setSchemaNotFound] = useState(false);
  
  const { role } = useAuth();
  const isAdmin = role === "admin";
  const navigate = useNavigate();
  const location = useLocation();
  const data = location?.state;
  const BACKEND_URL = import.meta.env.VITE_REACT_URL_BACKEND_URL;
  const document_id = data.document_id;
  const departmentId = data.department_id;
  let endpoint
  if (document_id === "CG-CG2-001") {
    endpoint = "pancard"
  }
  else if (departmentId === "Driving Licence") {
    endpoint='driving_license'  
  }else endpoint='template'

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()} ${currentDate.getHours()
            .toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

    const uploadDocument = async (formData: Record<string, any>) => {
    if (!contract) {
      toast.error("Blockchain contract not available.");
      return;
    }
  
    if (!formData) {
      toast.error("No document data found.");
      return;
    }
  
    try {
      await toast.promise(
        (async () => {
          // Step 1: Upload to backend -> Pinata
            const backendResponse = await axios.post(
            `${BACKEND_URL}/api/documents/generate/${endpoint}`,
            {
              ...formData,
              signDate: formattedDate,
              documentName:data?.document_name
            }
            );
            
          console.log("Backend response:", backendResponse.data);
          const ipfsHash = backendResponse.data?.IpfsHash;
          if (!ipfsHash) {
            throw new Error("Failed to get IPFS hash from backend.");
          }
  
          // Step 2: Upload to blockchain
          const tx = await contract?.issueDocument(formData?.userAddress,ipfsHash,departmentId,document_id );
          await tx.wait();
        })(),
        {
          loading: "Uploading document...",
          success: "Document uploaded to blockchain successfully!",
          error: (err: any) =>
            err?.response?.data?.message || err?.message || "Error uploading document.",
        }
      );
  
       // Optional: redirect after success
    } catch (error) {
      console.error("Unhandled error:", error);
      // Additional fallback error toast if needed
      toast.error("Something went wrong.");
    }
  }
  
  const fetchDocumentSchema = async () => {
    if (!data) {
      console.log("No data found in location state.");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(`${BACKEND_URL}/api/documents/docschema?documentId=${document_id}`);
      console.log("Document Schema:", response.data);
      setDocumentData(response.data);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        console.warn("Schema is not created for the particular document.");
        toast.error("Schema is not found for the particular document.");
        setSchemaNotFound(true);
      } else {
        toast.error("Error fetching document schema.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(!documentData){ fetchDocumentSchema();}
   
  }, []);

  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
      {/* Top section */}
      <div className="flex justify-between">
        <TextComponent text={"Upload Docs"} fontSize="40px" />
        <Profile />
      </div>

      {/* Document Name */}
      <div className="mt-5 flex gap-4">
      <i
          onClick={() => navigate(-1)}
          className="fa-solid fa-arrow-turn-up transform -rotate-90 text-2xl text-black font-light ml-2 cursor-pointer"
        />
        <div className="flex h-9 w-fit rounded-lg bg-bold-blue text-white justify-center items-center font-semibold px-5">
          {data?.document_name }
        </div>
      </div>

      {/* Conditional rendering */}
      <div className="mt-10">
        {loading ? (
          <p className="text-gray-500">Loading schema...</p>
        ) : schemaNotFound ? (
        <div className="flex w-full justify-center"><div className="flex items-center rounded-lg bg-light-blue p-5 w-[800px] mt-10 h-fit ">
          <div className="text-base ml-4 font-medium text-dark-blue text-lg">
            Schema is not created for the selected document. Please create a schema first.<br/>Click on the create schema button to create a custome schema for the document.
            <button className="text-white font-bold py-2 w-60 rounded-lg mt-8 bg-dark-blue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 h-[40px]" onClick={() => navigate(`${data?.document_id}`,{state:data?.document_name})}> Click here</button>
          </div></div></div>
        ) : (
          isAdmin && <DocumentForm documentSchema={documentData?.document_schema} onFormSubmit={uploadDocument}  />
        )}
      </div>
    </div>
  ); 
}

export default UploadDocs;
