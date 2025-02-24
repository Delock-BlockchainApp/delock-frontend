import { useEffect, useState } from "react";
import Drivinglicense_form from "../components/Drivinglicense_form"
import Pancard_form from "../components/Pancard_form"
// import Pancard_form from "../components/Pancard_form"
import TextComponent from "../components/TextComponent"
import { useBlockchain } from "../context/BlockchainContext";

function UploadDocs() {
const { contract, account } = useBlockchain();
  const [isAdmin, setIsAdmin] = useState(false);
  const [department, setDepartment] = useState("");
  useEffect(() => {
    const checkAdmin = async () => {
      if (contract) {
        const isAdmin = await contract.isAdmin();
        setIsAdmin(isAdmin);
        if (isAdmin) {
          const department= await contract.adminToDepartment(account);
          setDepartment(department);
        }
      }
    };
    checkAdmin();
  }, [ contract, account]);

  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
      {/* Top section */}
      <div className="flex justify-between">
      <TextComponent text={`Upload Docs - ${department}`} fontSize="40px" />
        <div className=" w-10 h-10 rounded-full bg-[#004182] flex items-center justify-center" >
            <i className="fa-regular fa-user text-white text-base "></i>
          </div>
      </div>
      {/* button area */}
      <div className="mt-5 flex gap-4"> 
      <div className="flex h-9 w-52 rounded-lg bg-bold-blue text-white justify-center items-center font-semibold">Pan Card</div>
        <div className="flex h-9 w-52 rounded-lg bg-bold-blue text-white justify-center items-center font-semibold">Driving License</div>
      </div>
      {/* form area */}
      {/* <Pancard_form /> */}
      {isAdmin?<Drivinglicense_form />:<div className="justify-center items-center mt-20">Not an admin</div>}
      
    </div>
  )
}

export default UploadDocs
