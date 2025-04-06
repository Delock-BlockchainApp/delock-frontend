import { useRecoilValue } from "recoil"
import { AdminState } from "../recoil"
export const AdminSettings = () => {
   
    const admin = useRecoilValue(AdminState)
    console.log(admin)
    return (
      <div className="m-5">
      <div className="w-11/12 [box-shadow:4px_4px_8px_rgba(0,0,0,0.2)] h-44 rounded-lg border-2 border-gray-200 p-5 ">
        <p className="text-lg font-semibold ">Admin Details</p>
        <div className="mt-7 flex">
          <p className="text-md gap-2 flex text-gray-700 ">
            <span >Department:</span> 
            <span className="font-semibold">{admin?.department_name}</span>
          </p>
          <p className="text-md gap-2 flex text-gray-700 ml-64">
            <span >Wallet Address:</span> 
            <span className="font-semibold">{admin?.wallet_address}</span>
          </p>
        </div>
        <div className="flex mt-5 w-full">
        <p className="text-md gap-2 flex text-gray-700 ">
            <span >Department Id:</span> 
            <span className="font-semibold">{admin?.department_code}</span>
          </p>
          <p className="text-md gap-2 flex text-gray-700 ml-96">
            <span >Last SignedIn:</span> 
            <span className="font-semibold">{admin?.lastLogin}</span>
          </p>
        </div>
       
      </div>
      </div>
    )
  
  }