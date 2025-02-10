import axios from "axios";
import Card_component1 from '../components/Card_component1'
import Card_component2 from '../components/Card_component2'
import Card_component3 from '../components/Card_component3'
import Card_component4 from '../components/Card_component4'
import TextComponent2 from '../components/TextComponent2'
import DepartmentAndDocs from "../components/Department_and_Docs";

function Documents() {

  const fetchDepartmentData = async (searchKey: string | number | boolean) => {
    try {
        console.log("Fetching department data for:", searchKey);
        
        const response = await axios.get(`http://localhost:3000/api/documents/get_department?searchkey=${encodeURIComponent(searchKey)}`);
        
        if (response.status === 200) {
            const departmentData = response.data;
            console.log("Department Data:", departmentData);
            return departmentData;
        } else if (response.status === 401) {
            console.error("Unauthorized access. Please check your credentials.");
        } else {
            console.error(`Error fetching department data! HTTP Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error fetching department data:", error);
    }
};

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

      <div className='flex justify-between'>
        <Card_component1 title={'Aadhaar'} description={'***********'} Authority={'Unique Identification Authority of India'} />
        <Card_component1 title={'Driving License'} description={'KL26******776'} Authority={'Motor Vehicle Department, Kerala'} />
        <Card_component1 title={'PAN Verification'} description={'FUE8****'} Authority={'Income Tax Department'} />
        <Card_component1 title={'Class X Mark Sheet'} description={'3456****'} Authority={'Central Board of Secondary Education'} />

      </div>
      <div className=" flex items-center rounded-[10px] bg-[#EBF3FC] pt-0 w-[1200.96px] h-[52.95px] mt-8 ">
        <div className="  font-poppins  text-[20px] text-base ml-4 font-normal" style={{ color: '#004182' }}>Combines blockchain’s immutability, IPFS’s distributed storage, and smart contract-based workflows.</div>
      </div>
      <div className=" text-[16px] font-poppins font-semibold mt-3 ">Authorized Government Documents</div>
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
      <div className='flex space justify-between mt-5'>
        <div className=" text-[16px] font-poppins font-semibold    ">State Government</div>
        <div className='flex gap-x-0 mr-5'>
          <div className=" text-sm font-poppins font-semibold mr-2  ">View all</div>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-10 gap-1 w-11/12">
      <Card_component3 Name={'Kerala'} />
      <Card_component3 Name={'Kerala'} />
      <Card_component3 Name={'Kerala'} />
      <Card_component3 Name={'Kerala'} />
      <Card_component3 Name={'Kerala'} />
      <Card_component3 Name={''} />
      <Card_component3 Name={''} />
      <Card_component3 Name={''} />
      <Card_component3 Name={''} />
      <Card_component3 Name={''} />
      

      </div>

    <div className='flex space justify-between mt-5'>
      <div className=" text-[16px] font-poppins font-semibold">Departments and Documents</div>
    </div>
   
      <DepartmentAndDocs></DepartmentAndDocs>



    </div>
  )
}

export default Documents
