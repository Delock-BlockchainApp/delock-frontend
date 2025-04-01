import Profile from "../components/Profile"
import TextComponent from "../components/TextComponent"

function Settings() {
  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
       <div className="flex justify-between">
              <TextComponent text="Settings" fontSize="40px" />
              <Profile/>
      
        </div>
        <div className="m-5">
          <div className="w-11/12 [box-shadow:4px_4px_8px_rgba(0,0,0,0.2)] h-44 rounded-lg border-2 border-gray-200 p-5 ">
            <p className="text-lg font-semibold ">User Details</p>
            <div className="mt-7 flex">
              <p className="text-md gap-2 flex text-gray-700 ">
                <span >Name:</span> 
                <span className="font-semibold">Nandkishor R</span>
              </p>
              <p className="text-md gap-2 flex text-gray-700 ml-64">
                <span >Wallet Address:</span> 
                <span className="font-semibold">0xa52dDA4962CF0A7b4DFd3894F2DDFAe716852C72</span>
              </p>
            </div>
            <div className="flex mt-5">
            <p className="text-md gap-2 flex text-gray-700 ">
                <span >Email:</span> 
                <span className="font-semibold">iamnandkishorr@gmail.com</span>
              </p>
              <p className="text-md gap-2 flex text-gray-700 ml-36">
                <span >Last SignedIn:</span> 
                <span className="font-semibold">22-01-2025 4:30 pm</span>
              </p>
            </div>
           
          </div>
          <div className="mt-10 w-11/12 [box-shadow:4px_4px_8px_rgba(0,0,0,0.2)] h-32 rounded-lg border-2 border-gray-200 p-5 ">
          
          <div className="flex justify-between"><p className="text-lg font-semibold ">Delock Drive</p>
          <i className="bi bi-pencil-square text-gray-900 cursor-pointer"></i></div>
          <div className="mt-7 flex">
              <p className="text-md gap-2 flex text-gray-700 ">
                <span >Domain:</span> 
                <span className="font-semibold">salmon-left-puffin-891.mypinata.cloud</span>
              </p>
              <p className="text-md gap-2 flex text-gray-700 ml-44">
                <span >API Key:</span> 
                <span className="font-semibold ">0xa52dDA4962CF0A7b4DFd3894F2DDFAe716852C72</span>
              </p>
            </div>

          </div>

        </div>
    </div>
  )
}

export default Settings
