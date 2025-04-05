import Profile from "../components/Profile"
import overview_img from "../assets/adminoverview.png"
import AdminCard1 from "../components/Home/AdminCard1"
import AdminCard2 from "../components/Home/AdminCard2"
function AdminOverview() {
  return (
    <>
      <div className="flex justify-between">
        <div className="h-32 w-fit bg-light-blue p-5 pr-0 flex justify-between rounded-md">
          <div>
            <div className="flex text-3xl gap-3">
              <h3 className="text-dark-blue font-semibold">Welcome</h3>
              <h3 className="font-light">Urban Development Department, Kerala</h3>
            </div>
            <p className="font-light text-lg">Great to have you back in the Delock and ready to go!</p>
          </div>
          <img  className="h-[170px] ml-4 -mt-5" src={overview_img} alt="secure_img" />
        </div>
        <Profile />
      </div>
      <div className="mt-5">
            <div className="w-4/5 grid grid-cols-3 gap-2 mt-20 ">
                <div className="text-bold-blue text-2xl font-semibold ml-6 pl-5 mt-4">Statics Logics</div>
                <AdminCard1 Name="Document Issuer" Number={300} />
                <AdminCard1 Name="Document Issuer" Number={300} />
                <AdminCard1 Name="Document Issuer" Number={300} />
                <AdminCard1 Name="Document Issuer" Number={300} />
                <AdminCard1 Name="Document Issuer" Number={300} />
            </div>


      </div>
      <div className="mt-10 pl-5">
        <p className="font-semibold">3 Issued Documents found</p>
        <div className="flex mt-5 gap-5">
          <AdminCard2 Name="PanCard" />
          <AdminCard2 Name="Aadhaar Card" />
          <AdminCard2 Name="Voter ID" />
        </div>

      </div>

      <div className="flex items-center rounded-lg bg-light-blue pt-1 w-11/12 mt-10 h-20">
          <div className="text-base ml-4 font-light text-dark-blue text-lg">
          Verify user-uploaded documents by cross-checking user details and ensuring compliance with ethical guidelines. 
          Approve accurate and appropriate content before publishing.
          </div>
        </div>
      


    </>
  )
}

export default AdminOverview
