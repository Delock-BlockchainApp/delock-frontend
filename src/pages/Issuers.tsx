import { useEffect, useState } from "react";
import IssuerCard from "../components/IssuerCard"
import Profile from "../components/Profile"
import { useNavigate } from "react-router-dom";
function Issuers() {
    const [searchKey, setSearchKey] = useState('');
    const [responseData, setResponseData] = useState([]);
    const navigate = useNavigate();
    const fetchDepartmentData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/department?searchkey=${searchKey}`);
        const data = await response.json();
        
        if (Array.isArray(data)) {
          console.log('Fetched department data:', data); // Log the fetched data
          setResponseData(data); // Ensure it's an array
        } else {
          setResponseData([]);
          console.error('Expected an array, but received:', data);
        }
      } catch (error) {
        console.error('Error fetching department data:', error);
      }
    };
    
    const filterHandlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey(e.target.value);
    };
    useEffect(() => {
        fetchDepartmentData();
    }
    , [searchKey]); 
  return (
    <div className="ml-5 h-full p-5 overflow-y-scroll scrollbar ">
    <div className="flex justify-between ">
      <div className=" text-[40px] font-poppins font-semibold  mb-6 " style={{ color: '#004182' }}>Documents</div>
      
      <div className="flex gap-x-20 mt-2">
        <div className='border-2 bg-[#004182]/10 rounded-lg w-[393.47px] h-[50px] '>
          <i className="fa-solid fa-magnifying-glass mr-8 ml-4  mb-4 mt-4 text-[#004182]"></i>
          <input type="text" placeholder='Search Document' className="focus:outline-none bg-transparent focus:ring-0 w-30" onChange={filterHandlechange} />
        </div>
        </div>


      <div className="flex gap-x-20">
        <Profile />
      </div>

    </div>
    <div className="flex gap-5 items-center w-full h-12 sticky -top-5 z-20 bg-white "><i onClick={() => {
             navigate(-1);
          }}
          className="fa-solid fa-arrow-turn-up transform -rotate-90 text-2xl text-black font-light cursor-pointer"
        />
      <div className="text-md font-poppins font-medium">598 Issuers found</div></div>
        <div className="overflow-y-scroll scrollbar grid grid-cols-3 z-10 ">
            {responseData.map((issuer: any, index: number) => (
          <IssuerCard key={index} {...issuer} />
            ))}
        </div>
    </div> 
  )
}

export default Issuers
