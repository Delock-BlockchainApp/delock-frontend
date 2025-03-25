import { useEffect, useState } from "react";
import TextComponent from "../components/TextComponent"
import Yourdocs_card from "../components/yourdocs_card"
import Yourdocs_card2 from "../components/yourdocs_card2"
import { useBlockchain } from "../context/BlockchainContext";
import { getDepartmentName, getDocumentName } from "../utils/dataUtils";

function Yourdocs() {
  const { contract, account } = useBlockchain();

  const [documents, setDocuments] = useState<any[]>([]);

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
      alert("Error fetching documents.");
    }
  };

useEffect(() => {
    getRequestedDocuments();
    console.log("Account:", account);
  }
  , [contract,account]);

  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
      <div className="h-fit"><div className="flex justify-between">
        <TextComponent text="Your Docs" fontSize="40px" />
        <div className=" w-10 h-10 mt-2 rounded-full bg-dark-blue flex items-center justify-center" >
          <i className="fa-regular fa-user text-white text-base"></i>
        </div>

      </div>
      <div className="text-lg font-medium ">Issued Documents</div>
        <div className=" flex flex-col pt-5 ">
        {documents.map((document) => (
       <Yourdocs_card title={getDocumentName(document.docId) || "Unknown Document"} description={''} Authority={getDepartmentName(document.depId )|| 'unknown dept'} ipfs={document.ipfs} />
          ))}
          {/* <Yourdocs_card title={'Aadhaar Card'} description={'**************'} Authority={'Unique Identification Authority of India(UIDAI)'} />
          <Yourdocs_card title={'Driving License'} description={'KL05*******15'} Authority={'Motor Vechile Department,Kerala'} />
          <Yourdocs_card title={'PAN Verification'} description={'FUE******9A'} Authority={'Income Tax Department'} />
          <Yourdocs_card title={'Class X Marksheet'} description={'431******2019'} Authority={'Central Board of Secondary Education'} />
          <Yourdocs_card title={'Registraton of Vechiles'} description={'KL01*******189'} Authority={'Motor Vehicle Department, Kerala'} /> */}
        </div>

        <div className="text-lg font-medium ">Delock Drive Folders</div>

        <div className="flex justify-between">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-2/3">
            <Yourdocs_card2 Name={'Education/Certificates'} Number={7} />
            <Yourdocs_card2 Name={'Health'} Number={11} />
            <Yourdocs_card2 Name={'Revenue/Tax'} Number={2} />
            <Yourdocs_card2 Name={'Personal'} Number={4} />
          </div>
          <div className=" w-10 h-10 mt-2 rounded-full bg-dark-blue flex items-center justify-center" >
            <i className="fa-solid fa-plus text-white text-lg"></i>
          </div>

        </div>
        <div className=" flex items-center rounded-xl bg-[#EBF3FC] pt-1 w-11/12 h-12 mt-5 ">
          <div className="text-base ml-4 font-medium text-dark-blue">Documents in Delock Drive are <span className="font-semibold">NOT</span> treated as authentic original documents. You can upload your personal documents with trust</div>
        </div>
      </div>


    </div>








  )
}

export default Yourdocs
