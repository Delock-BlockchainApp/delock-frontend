import { useEffect, useState } from "react";
import TextComponent from "../components/TextComponent"
import Yourdocs_card from "../components/yourdocs_card"
import Yourdocs_card2 from "../components/Yourdocs_card2"
import { useBlockchain } from "../context/BlockchainContext";
import { getDepartmentName, getDocumentName } from "../utils/dataUtils";
import Profile from "../components/Profile";
import YourDocModal from "../components/YourdocModal";
import axios from "axios";
import { userState } from "../recoil";
import { useRecoilValue } from "recoil";
import toast from "react-hot-toast";

function Yourdocs() {
  const { contract, account } = useBlockchain();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documents, setDocuments] = useState<any[]>([]);
  const [folders, setFolders] = useState<any[]>([]);
  const BACKEND_URL = import.meta.env.VITE_REACT_URL_BACKEND_URL;
  const user = useRecoilValue(userState);

  // const folders = [
  //   { name: "Education&Certificates", number: 7 },
  //   { name: "Health", number: 11 },
  //   { name: "Revenue&Tax", number: 2 },
  //   { name: "Personal", number: 4 },
  // ];

  // Function: Get own documents
  const getRequestedDocuments = async () => {
    if (!contract) return;
    try {
      const docs = await contract.getRequestedDocuments();
      console.log("Own Documents:", docs);
      //  setDocuments(docs);

      // Parsing the data
      const parsedDocs = docs.map((doc: any[]) => ({
        ipfs: doc[0],  // IPFS Hash
        depId: doc[1],    // Document ID
        docId: doc[2],  // Document Name
        status: doc[3], // Boolean (Approved/Not)
        owner: doc[4]  // Wallet Address
      }));

      setDocuments(parsedDocs);
      console.log("Parsed Docs:", parsedDocs);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching documents.");
    }
  };

  const addFolder = async ({ name }: { name: string }) => {
    try {
      const folder = await axios.post(`${BACKEND_URL}/api/users/yourdoc/folder`, {
        folder_name: name,
        user_id: user.userId,
      });
  
      if (folder.status === 201) {
        toast.success("Folder added successfully.");
        setIsModalOpen(false);
         await GetFolders(); // ✅ Refresh folder list
      } else {
        toast.error("Failed to add folder.");
        console.error("Unexpected response:", folder);
      }
    } catch (error) {
      console.error("Error adding folder:", error);
      toast.error("Something went wrong while adding folder.");
    }
  };
  const GetFolders= async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/users/yourdoc/folder?userId=${user.userId}`);
      const data = response.data;
      if (response.status === 200 && data) {
        setFolders(data);
      } else {
        toast.error("Unexpected response while fetching folders.");
        console.error("Unexpected response:", response);
      }
    }
    catch (error) {
      console.error("Error fetching folders:", error);
    }
  }


useEffect(() => {
    getRequestedDocuments();
    GetFolders();
   
  }
  , [contract,account]);


  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
      <div className="h-fit">
        <div className="flex justify-between">
        <TextComponent text="Your Docs" fontSize="40px" />
        <Profile/>

      </div>
      <div className="text-lg font-medium mt-5 ">Issued Documents</div>
        <div className=" flex flex-col pt-5 min-h-36">
        {documents != null && documents.length > 0 ? (documents.map((document) => (
       <Yourdocs_card title={getDocumentName(document.docId) || "Unknown Document"} description={''} Authority={getDepartmentName(document.depId )|| 'unknown dept'} ipfs={document.ipfs} />
          ))) :(<div className="flex justify-center">
            <div className=" flex items-center rounded-xl bg-[#EBF3FC] p-4 w-[700px] h-28 mt-5 ">
            <div className="text-base ml-4 font-medium text-dark-blue">Currently there are <span className="font-semibold">NO</span> authentic original documents available.  Once you request for the Authorized Documents , it will be available here !</div>
          </div> </div>
          )}
        </div>

        <div className="text-lg font-medium ">Delock Drive Folders</div>

        <div className="flex justify-between">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-2/3 min-h-[200px]">
          {folders.map((folder, index) => (
              <Yourdocs_card2
                key={index}
                FolderId={folder?._id}
                Name={folder.folder_name}
                Number={folder.number}
                 // Navigate to the view more page with folder data
              />
            ))}
          </div>
          <div onClick={()=>{
              setIsModalOpen(true)
            }} className=" w-10 h-10 mt-2 rounded-full bg-dark-blue flex items-center justify-center cursor-pointer" >
            <i  className="fa-solid fa-plus text-white text-lg "></i>
          </div>

        </div>
        <div className=" flex items-center rounded-xl bg-[#EBF3FC] pt-1 w-11/12 h-12 mt-5 ">
          <div className="text-base ml-4 font-medium text-dark-blue">Documents in Delock Drive are <span className="font-semibold">NOT</span> treated as authentic original documents. You can upload your personal documents with trust</div>
        </div>
      </div>

      <YourDocModal
       isOpen={isModalOpen}
       onClose={() => setIsModalOpen(false)}
       onSubmit={addFolder}
      />

    </div>

  )
}

export default Yourdocs
