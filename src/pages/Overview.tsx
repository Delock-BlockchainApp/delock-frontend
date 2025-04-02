import { useNavigate } from "react-router-dom"
import overview_img from "../assets/overview_pic1.svg"
import Card_component2 from "../components/Card_component2"
import Overview_component1 from "../components/Overview_component1"
import Profile from "../components/Profile"
import TextComponent2 from "../components/TextComponent2"
function Overview() {
  const navigate = useNavigate();

  const documents = [
    { document_id: 'CG-001-001', name: 'Aadhaar Card' },
    { document_id: 'CG-001-002', name: 'Voter ID' },
    { document_id: 'CG-001-003', name: 'PAN Verification' },
    { document_id: 'CG-001-004', name: 'Ration Card' },
    { document_id: 'CG-001-005', name: 'Driving License' },
    { document_id: 'CG-001-006', name: 'Vehicle Registration' },
    { document_id: 'CG-001-007', name: 'Caste Certificate' },
    { document_id: 'CG-001-008', name: 'Residence Certificate' },
    { document_id: 'CG-001-009', name: 'Life Insurance' },
    { document_id: 'CG-001-010', name: 'Class X Marksheet' },
  ];

  const department = {
    state: 'Central Government',
    department_code: 'CG-001',
    department_name: 'Ministry of Home Affairs',
    department_description: 'Responsible for internal security and citizen identification.',
  };

  const handleNavigate = (doc: { document_id: string; name: string }) => {
    navigate(`documents/issuers/${department.department_code}/${doc.document_id}`, {
      state: {
        ...department,
        document_name: doc.name,
      },
    });
  };

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
        <TextComponent2 text="Your latest searches" />
        <div className="flex">
          <Overview_component1 />
          <Overview_component1 />
          <Overview_component1 />
          <Overview_component1 />
        </div>
        <div className="flex items-center rounded-lg bg-light-blue pt-1 w-11/12 mt-2 h-12 mb-10">
          <div className="text-base ml-4 font-light text-dark-blue text-xl">
            Enhances security, reduces fraud risk, streamlines document management for government and citizens.
          </div>
        </div>

        <TextComponent2 text="Documents you might need" />
        <div className="w-full grid grid-cols-4 gap-4">
          {documents.map((doc, index) => (
            <div key={index} onClick={() => handleNavigate(doc)} className="cursor-pointer">
              <Card_component2 Name={doc.name} />
            </div>
          ))}
        </div>

        <div className="flex items-center rounded-lg bg-light-blue pt-1 w-11/12 mt-10 h-10 mb-10">
          <div className="text-base ml-4 font-light text-dark-blue text-lg">
            Securely upload and personalize your documents in the cloud, tailored just for you. Upload personal documents with Delock in Your Docs.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;

