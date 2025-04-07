import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userIpfsCredentials, userState } from "../recoil";
import Profile from "../components/Profile";
import YourdocsCard4 from "../components/yourdocs_card3";
import DocumentUploadModal from "../components/DocumentUploadModal";
import toast from "react-hot-toast";

const Yourdocs_viewmore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const FolderName = state;
  const credentials = useRecoilValue(userIpfsCredentials);

  const { folderId } = useParams<{ folderId: string }>();
  const [documents, setDocuments] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const BACKEND_URL = import.meta.env.VITE_REACT_URL_BACKEND_URL;
  const user = useRecoilValue(userState);
  // console.log("User:", user);
  const getRequestedDocuments = async () => {
    if (!folderId) {
    console.log("Folder ID not found in URL.");
      return;
    }

    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/users/yourdoc/folder/${folderId}`
      );
      if (response.status === 200) {
        setDocuments(response.data);
        // console.log("Documents:", response.data);
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error fetching documents:", error);
      throw new Error("Error fetching documents.");
    }
  };

  const HandleUploadDoc = async ({ file, name }: { file: File | null; name: string }) => {
    if (!file || !name || !folderId || !user?.userId) {
      console.error("Missing required data to upload document.");
  
      return;
    }
    if (!credentials.domain || !credentials.jwt_token) {
      toast.error("Please set your credentials in settings before uploading a document.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("document_name", name);
    formData.append("user_id", user.userId);
    formData.append("jwt_token", credentials.jwt_token); 
    toast.promise(
      axios.post(
      `${BACKEND_URL}/api/users/yourdoc/folder/${folderId}`,
      formData,
      {
        headers: {
        "Content-Type": "multipart/form-data",
        },
      }
      ),
      {
      loading: "Uploading document...",
      success: "Document uploaded successfully!",
      error: "Failed to upload the document. Please try again.",
      }
    )
    .then((response) => {
      console.log("Upload response:", response.data);
      getRequestedDocuments(); // Refresh the document list after upload
    })
    .catch((error) => {
      console.error("Error uploading document:", error);
    });
  }
  

  useEffect(() => {
  
    getRequestedDocuments();
  }, [folderId]);

  return (
    <div className="ml-5 h-full p-5 overflow-y-scroll scrollbar">
      <div className="flex justify-between ">
        <div className=" text-5xl font-poppins font-semibold mt-2 mb-6 text-[#004182]">
          Your Docs
        </div>
        <div className=" w-10 h-10 mr-4 mt-2 rounded-full bg-[#004182] flex items-center justify-center cursor-pointer">
          <Profile />
        </div>
      </div>

      <div className="flex">
        <i
          onClick={() => navigate(-1)}
          className="fa-solid fa-arrow-turn-up transform -rotate-90 text-2xl text-black font-light ml-4 cursor-pointer"
        />
        <div className=" text-2xl font-poppins font-light ml-5">{FolderName}</div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-2/3 min-h-[500px]">
        {documents.map((doc, index) => (
          <YourdocsCard4 key={index} data={doc} />
        ))}

        <div onClick={()=>{setIsModalOpen(true)} }><AddFile /></div>
      </div>

      <div className="flex items-center rounded-xl bg-[#EBF3FC] pt-1 w-11/12 h-12 ">
        <div className="font-poppins text-base ml-4 font-medium text-[#004182]">
          Documents in Delock Drive are <span className="font-semibold">NOT</span> treated as authentic original documents. You can upload your personal documents with trust
        </div>
      </div>
      <DocumentUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={HandleUploadDoc}
        title="Upload Document"/>
    </div>
  );
};



export default Yourdocs_viewmore;
export const AddFile = () => {
  return (

  <div className='flex flex-col rounded-xl bg-white p-2 w-[120px] h-[150px] mt-5 border-2 border-gray-500 cursor-pointer '>

            <div className=' w-[100px] h-[75px] rounded-[10px]  flex items-center justify-center border-2 border-gray-500 '>
                <div className=" flex w-10 h-10 rounded-full border-gray-500 border-2 justify-center items-center"><i className="fa-solid fa-plus text-2xl text-gray-500  " /></div>
            </div> 
            <div className=" relative flex flex-col mt-2">
                <span className=" text-xs font-poppins font-semibold  text-center mt-4">
                    Add File
                </span>
            </div>
            </div>
    )
}


