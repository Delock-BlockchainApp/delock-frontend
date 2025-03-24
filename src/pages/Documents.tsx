import axios from "axios";
import Card_component1 from '../components/Card_component1'
import Card_component2 from '../components/Card_component2'
import Card_component3 from '../components/Card_component3'
import TextComponent2 from '../components/TextComponent2'
import DepartmentAndDocs from "../components/Department_and_Docs";
import { useEffect, useState } from "react";
import { useBlockchain } from "../context/BlockchainContext";
import YourdocsCard3 from "../components/yourdocs_card3";

function Documents() {

  interface Department {
    _id: string;
    department_name: string;
  }
  const { contract, account } = useBlockchain();

  const [documents, setDocuments] = useState<any[]>([]);

  const [departments, setDepartments] = useState<Department[]>([]);

  const departmentMap = new Map([
    ["d1", "Motor Vehicles Department"],
    ["d02", "Revenue Department"],
    ["D3", "Education Department"],
    ["D4", "Health Department"],
    ["D5", "Police Department"],
    ["D6", "Labour Department"],
    ["D7", "Fisheries Department"],
    ["D8", "Agriculture Department"],
    ["D9", "Civil Supplies Department"],
    ["D10", "Local Self Government Department (LSGD)"],
  ]);

  const stateMap = new Map([
    ["KL", "Kerala"],
    ["TN", "Tamil Nadu"],
    ["KA", "Karnataka"],
    ["AP", "Andhra Pradesh"],
    ["MH", "Maharashtra"],
    ["GJ", "Gujarat"],
    ["RJ", "Rajasthan"],
    ["UP", "Uttar Pradesh"],
    ["MP", "Madhya Pradesh"],
    ["WB", "West Bengal"],
    ["BR", "Bihar"],
    ["OR", "Odisha"],
    ["AS", "Assam"],
    ["JH", "Jharkhand"],
    ["UK", "Uttarakhand"],
    ["HP", "Himachal Pradesh"],
    ["PB", "Punjab"],
    ["HR", "Haryana"],
    ["TG", "Telangana"],
    ["CT", "Chhattisgarh"],
    ["GA", "Goa"],
    ["MN", "Manipur"],
    ["ML", "Meghalaya"],
    ["MZ", "Mizoram"],
    ["NL", "Nagaland"],
    ["SK", "Sikkim"],
    ["TR", "Tripura"],
    ["AR", "Arunachal Pradesh"]
  ])
  
  // Function to get department name
  const getDepartmentName = (deptId: string): string | undefined => {
    return departmentMap.get(deptId);
  };

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
      const response = await axios.get("http://localhost:3000/api/documents/get_all_department");
      if (response.status !== 200) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = response.data;
      setDepartments(data.departmentData);
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
    <div className="ml-5 h-full p-3 overflow-y-scroll scrollbar ">
      <div className="flex justify-between  mt-4">
        <div className=" text-[40px] font-poppins font-semibold  mb-6 " style={{ color: '#004182' }}>Documents</div>
        <div className="flex gap-x-20 mt-2">
          <div className='border-2 bg-[#004182]/10 rounded-lg w-[393.47px] h-[50px] '>
            <i className="fa-solid fa-magnifying-glass mr-8 ml-4  mb-4 mt-4 text-[#004182]"></i>
            <input type="text" placeholder='Search Document' className="focus:outline-none bg-transparent focus:ring-0 w-30" />
          </div>

          <div className=" w-10 h-10 rounded-full bg-[#004182] flex items-center justify-center" >
            <i className="fa-regular fa-user text-white text-base "></i>
          </div>
        </div>

      </div>
      <TextComponent2 text="Issued Documents" />
      {/* 
      <div className='flex justify-between'>
        {documents.map((document) => (
          <Card_component1 title={document.docId} description={document.ipfs} Authority={getDepartmentName(document.depId) || "Unknown Department"} />
        ))}
      </div> */}

      <div className='flex justify-between w-[1200px]'>
        <Card_component1 title={'Aadhaar'} description={'***********'} Authority={'Unique Identification Authority of India'} />
        <Card_component1 title={'Driving License'} description={'KL26******776'} Authority={'Motor Vehicle Department, Kerala'} />
        <Card_component1 title={'PAN Verification'} description={'FUE8****'} Authority={'Income Tax Department'} />
        <Card_component1 title={'Class X Mark Sheet'} description={'3456****'} Authority={'Central Board of Secondary Education'} />

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
              <div className="flex mt-5 gap-5">
                <YourdocsCard3 title={'BTech Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'MTech Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'BCA Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'PhD Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'Integrated Course Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'X Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'XII Certificate'} authority="Kerala" />
              </div>
            </div>

            <div className="mt-5">
              <TextComponent2 text="Central Government" />
              <div className="flex mt-5 gap-5">
                <YourdocsCard3 title={'BTech Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'MTech Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'BCA Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'PhD Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'Integrated Course Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'X Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'XII Certificate'} authority="Kerala" />
              </div>
            </div>

            <div className="mt-5">
              <TextComponent2 text="Health & Wealthness" />
              <div className="flex mt-5 gap-5">
                <YourdocsCard3 title={'BTech Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'MTech Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'BCA Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'PhD Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'Integrated Course Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'X Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'XII Certificate'} authority="Kerala" />
              </div>
            </div>

            <div className="mt-5">
              <TextComponent2 text="Transport & Infrastructure" />
              <div className="flex mt-5 gap-5">
                <YourdocsCard3 title={'BTech Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'MTech Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'BCA Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'PhD Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'Integrated Course Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'X Certificate'} authority="Kerala" />
                <YourdocsCard3 title={'XII Certificate'} authority="Kerala" />
              </div>
            </div>
          </section>
          </div>

       {/* <div className="flex overflow-x-hidden scrollbar mt-3">
         <div className="flex flex-wrap justify-start gap-4">
         {departments.slice(0, 10).map((department) => (
            <Card_component3 key={department._id} Name={department.department_name} />
          ))}
        </div>
      </div> */}
      {/* <DepartmentAndDocs></DepartmentAndDocs> */}
          
</div>
  )
}

export default Documents
