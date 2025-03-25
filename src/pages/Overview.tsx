import { useNavigate } from "react-router-dom"
import overview_img from "../assets/overview_pic1.svg"
import Card_component2 from "../components/Card_component2"
import Overview_component1 from "../components/Overview_component1"
import Profile from "../components/Profile"
import TextComponent2 from "../components/TextComponent2"
function Overview() {

  const navigate = useNavigate();

  const handleNavigate = (doc: { name: string; departmentId: string; documentId: string }) => {
    navigate(`documents/${doc.departmentId}/${doc.documentId}`, { state: doc });
  };
  const documents = [
    { name: "Aadhaar Card", departmentId: "AN-D2", documentId: "AN-D2-001" },
    { name: "Driving License", departmentId: "AN-D3", documentId: "AN-D3-002" },
    { name: "PAN Verification", departmentId: "AN-D4", documentId: "AN-D4-003" },
    { name: "Class X Marksheet", departmentId: "AN-D5", documentId: "AN-D5-004" },
    { name: "Registration of Vehicles", departmentId: "AN-D6", documentId: "AN-D6-005" },
    { name: "Voter ID", departmentId: "AN-D7", documentId: "AN-D7-006" },
    { name: "Life Insurance", departmentId: "AN-D8", documentId: "AN-D8-007" },
    { name: "Ration Card", departmentId: "AN-D9", documentId: "AN-D9-008" },
    { name: "Caste Certificate", departmentId: "AN-D10", documentId: "AN-D10-009" },
    { name: "Residence Certificate", departmentId: "AN-D11", documentId: "AN-D11-010" },
  ];
  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
      <div className="flex justify-between">
      <div className="h-32 w-[655px] bg-light-blue p-3 flex justify-between rounded-md">
        <div>
              <div className="flex text-3xl gap-3"><h3 className="text-dark-blue font-semibold">Welcome</h3><h3 className="font-light">Nandkishor R ,</h3></div>
              <p className="font-light font-lg">Great to have you back in the Delock are ready to go! </p>
        </div>
        <img src={overview_img} alt="secure_img" />
      </div>
      <Profile />
      </div>
     
      <div className="mt-5">
        <TextComponent2 text="Your latest searches"/>
        <div className="flex"> 
        <Overview_component1 />
        <Overview_component1 />
        <Overview_component1 />
        <Overview_component1 />
        </div>
        <div className=" flex items-center rounded-lg bg-light-blue pt-1 w-11/12 mt-2 h-12 mb-10 ">
          <div className="text-base ml-4 font-light text-dark-blue text-xl">Enhances security, reduces fraud risk,  streamlines document management for government and citizens.</div>
        </div>
        <TextComponent2 text="Documents you might need"/>
        <div className="w-full grid grid-cols-4 ">
        {documents.map((doc, index) => (
        <div key={index} onClick={() => handleNavigate(doc)}>
          <Card_component2 Name={doc.name} />
        </div>
      ))}
        </div>
        <div className=" flex items-center rounded-lg bg-light-blue pt-1 w-11/12 mt-10 h-10 mb-10 ">
          <div className="text-base ml-4 font-light text-dark-blue text-lg">Securely upload and personalize your documents in the cloud, tailored just for you. Upload personal documents with Delock in Your Docs</div>
        </div>
       
      </div >
     
    </div>
  )
}

export default Overview
