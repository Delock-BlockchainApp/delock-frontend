import axios from "axios";
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
import Card_component4 from "../components/Card_component4";
import { useNavigate } from "react-router-dom";
function Documents() {
  const navigate = useNavigate();
  interface Department {
    _id: string;
    department_name: string;
    state: string; // Added state property
    department_code: string; // Added department_code property
  }
  const { contract, account } = useBlockchain();

  const [documents, setDocuments] = useState<any[]>([]);

  const [departments, setDepartments] = useState<any[]>([]);

  // const departmentMap = new Map([
  //   ["d1", "Motor Vehicles Department"],
  //   ["d02", "Revenue Department"],
  //   ["D3", "Education Department"],
  //   ["D4", "Health Department"],
  //   ["D5", "Police Department"],
  //   ["D6", "Labour Department"],
  //   ["D7", "Fisheries Department"],
  //   ["D8", "Agriculture Department"],
  //   ["D9", "Civil Supplies Department"],
  //   ["D10", "Local Self Government Department (LSGD)"],
  // ]);

  const departmentMap=[
    {
      "state": "Kerala",
      "department_code": "KE-D1",
      "department_name": "Motor Vehicles Department",
      "department_description": "Handles vehicle registration and driving licenses.",
      "documents": [
          {
              "document_id": "KE-D1-001",
              "document_name": "Driving Licence"
          },
          {
              "document_id": "KE-D1-002",
              "document_name": "Vehicle Registration Certificate"
          },
          {
              "document_id": "KE-D1-003",
              "document_name": "Pollution Under Control Certificate"
          }
      ]
  },
  {
      "state": "Kerala",
      "department_code": "KE-D2",
      "department_name": "Revenue Department",
      "department_description": "Manages land records and tax collection.",
      "documents": [
          {
              "document_id": "KE-D2-001",
              "document_name": "Land Tax Receipt"
          },
          {
              "document_id": "KE-D2-002",
              "document_name": "Possession Certificate"
          },
          {
              "document_id": "KE-D2-003",
              "document_name": "Encumbrance Certificate"
          }
      ]
  },
  {
      "state": "Kerala",
      "department_code": "KE-D3",
      "department_name": "Education Department",
      "department_description": "Oversees schools, colleges, and academic certifications.",
      "documents": [
          {
              "document_id": "KE-D3-001",
              "document_name": "SSLC Certificate"
          },
          {
              "document_id": "KE-D3-002",
              "document_name": "Higher Secondary Certificate"
          },
          {
              "document_id": "KE-D3-003",
              "document_name": "Transfer Certificate"
          }
      ]
  },
  {
      "state": "Kerala",
      "department_code": "KE-D4",
      "department_name": "Health Department",
      "department_description": "Regulates hospitals and health-related certifications.",
      "documents": [
          {
              "document_id": "KE-D4-001",
              "document_name": "Birth Certificate"
          },
          {
              "document_id": "KE-D4-002",
              "document_name": "Death Certificate"
          },
          {
              "document_id": "KE-D4-003",
              "document_name": "Medical Fitness Certificate"
          }
      ]
  },
  {
      "state": "Kerala",
      "department_code": "KE-D5",
      "department_name": "Police Department",
      "department_description": "Handles law enforcement and public safety.",
      "documents": [
          {
              "document_id": "KE-D5-001",
              "document_name": "Police Clearance Certificate"
          },
          {
              "document_id": "KE-D5-002",
              "document_name": "Gun Licence"
          },
          {
              "document_id": "KE-D5-003",
              "document_name": "Character Certificate"
          }
      ]
  },
  {
      "state": "Kerala",
      "department_code": "KE-D6",
      "department_name": "Labour Department",
      "department_description": "Regulates employment, labor laws, and worker safety.",
      "documents": [
          {
              "document_id": "KE-D6-001",
              "document_name": "Labour Welfare Fund Registration"
          },
          {
              "document_id": "KE-D6-002",
              "document_name": "Shops and Establishment Licence"
          },
          {
              "document_id": "KE-D6-003",
              "document_name": "Trade Licence"
          }
      ]
  },
  {
      "state": "Kerala",
      "department_code": "KE-D7",
      "department_name": "Fisheries Department",
      "department_description": "Supports fishermen and regulates marine activities.",
      "documents": [
          {
              "document_id": "KE-D7-001",
              "document_name": "Fisherman Identity Card"
          },
          {
              "document_id": "KE-D7-002",
              "document_name": "Fishing Boat Registration"
          },
          {
              "document_id": "KE-D7-003",
              "document_name": "Subsidy Approval Certificate"
          }
      ]
  },
  {
    "state": "Kerala",
    "department_code": "KE-D8",
    "department_name": "Urban Development Department",
    "department_description": "Manages city planning and urban infrastructure.",
    "documents": [
        {
            "document_id": "KE-D8-001",
            "document_name": "Building Permit"
        },
        {
            "document_id": "KE-D8-002",
            "document_name": "Property Tax Receipt"
        },
        {
            "document_id": "KE-D8-003",
            "document_name": "Completion Certificate"
        }
    ]
},
 ]
  
  
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

  const fetchDepartmentData = async () => {
    try {
      // const response = await axios.get("http://localhost:3000/api/documents/get_all_department");
      // if (response.status !== 200) throw new Error(`HTTP error! Status: ${response.status}`);

      // const data = response.data;
      // setDepartments(data.departmentData);
      setDepartments(departmentMap);
      console.log("Department Data ", departments);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  useEffect(() => {
    getRequestedDocuments();
    console.log("Account:", account);
  }
    , [contract, account]);


  useEffect(() => {
    fetchDepartmentData();
  }, []);

  return (
    <div className="ml-5 h-full p-5 overflow-y-scroll scrollbar ">
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
        <section>
            <div className="mt-5">
              <TextComponent2 text="Education & Learning" />
              <div className="flex mt-5">
                {departments?.map((department, index) => (
                <Card_component4 key={index} issuer={department} />
                ))}
              </div>
            </div>
          </section>
          </div>
</div>
  )
}

export default Documents
