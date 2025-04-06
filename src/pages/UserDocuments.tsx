
import Card_component1 from '../components/Card_component1'
import Card_component2 from '../components/Card_component2'
import Card_component3 from '../components/Card_component3'
import TextComponent2 from '../components/TextComponent2'
// import DepartmentAndDocs from "../components/Department_and_Docs";
import { useEffect, useState } from "react";
import { useBlockchain } from "../context/BlockchainContext";
// import YourdocsCard3 from "../components/yourdocs_card3";
import Profile from "../components/Profile";
import { getDepartmentName, getDocumentName, stateMap } from "../utils/dataUtils";
import { useNavigate } from "react-router-dom";
import KeywordResults from '../components/Keyword_List';

function UserDocuments() {
    const navigate = useNavigate();

  const { contract, account } = useBlockchain();

  const [documents, setDocuments] = useState<any[]>([]);

  const keywords = [
    "Vehicle",
    "Revenue",
    "Education",
    "Health",
    "Police",
    "Labour",
    "Fisheries",
    "Urban Welfare",
    "Agriculture"
  ];
  

  
  // Function to get department name
  // const getDepartmentName = (deptId: string): string | undefined => {
  //   return departmentMap.get(deptId);
  // };

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
    , [contract, account]);



  return (
    <div>
      
      <div className="flex justify-between ">
        <div className=" text-[40px] font-poppins font-semibold  mb-6 text-dark-blue">Documents</div>
        
        <div className="flex gap-x-20 mt-2">
          <div className='border-2 bg-[#004182]/10 rounded-lg w-[393.47px] h-[50px] '>
            <i className="fa-solid fa-magnifying-glass mr-8 ml-4  mb-4 mt-4 text-[#004182]"></i>
            <input type="text" placeholder='Search Document' onClick={()=>{
              navigate('issuers')
            }} className="focus:outline-none bg-transparent focus:ring-0 w-30" />
          </div>
          </div>


        <div className="flex gap-x-20">
          <Profile />
        </div>

      </div>


      <TextComponent2 text="Issued Documents" />
      
       <div className='flex justify-between'>
        {documents.slice(0, 4).map((document) => (
          <Card_component1 title={getDocumentName(document.docId) || "Unknown Document"} description={''} Authority={getDepartmentName(document.depId) || "Unknown Department"} />
        ))}

      </div>

      <div className=" flex items-center rounded-[10px] bg-[#EBF3FC] pt-0 w-[1200px] h-[53px] mt-8 ">
        <div className="  font-poppins  text-[20px] text-base ml-4 font-normal" style={{ color: '#004182' }}>Combines blockchain’s immutability, IPFS’s distributed storage, and smart contract-based workflows.</div>
      </div>
      <div className=" text-[16px] font-poppins font-medium mt-3 ">Authorized Government Documents</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-10 w-11/12">
        <Card_component2 Name={'E-Aadhar'} />
        <Card_component2 Name={'Residence Certificate'} />
        <Card_component2 Name={'Voter ID'} />
        <Card_component2 Name={'Driving License'} />
        <Card_component2 Name={'Pan Card'} />
        <Card_component2 Name={'XII Certificate'} />
        <Card_component2 Name={'X Certificate'} />
        <Card_component2 Name={'Life Insurance'} />
        <Card_component2 Name={'Ration Card'} />
        <Card_component2 Name={'Caste Certifiacte'} />

      </div>
      <div className=" text-[16px] font-poppins font-medium mt-5">State Government</div>
      <div className="mt-5 w-[1200px]">
        <div className="flex justify-between overflow-y-hidden scrollbar">
          {[...stateMap.values()].map((value) => (
            <Card_component3 Name={value} />
          ))}
        </div>



        <KeywordResults keywords={keywords}>
    
        </KeywordResults>


          </div>
    </div>
  )
}

export default UserDocuments
