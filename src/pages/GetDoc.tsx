import { useLocation, useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import toast from "react-hot-toast";
import { useBlockchain } from "../context/BlockchainContext";
import { useState } from "react";

const IssueData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log("Data from location:", data);
  const { contract } = useBlockchain();
  const [consentGiven, setConsentGiven] = useState(false);

  const fetchData = async () => {
    if (!consentGiven) {
      toast.error("Please provide your consent before proceeding.");
      return;
    }

    if (!contract) {
      toast.error("Blockchain contract not available.");
      return;
    }

    try {
      const response = await contract.requestDocument(data?.dep_code, data?.doc_code);
      if (response) {
        toast.success("Document fetched successfully.");
        console.log("Fetched Data:", response);
      } 
    } catch (error) {
      console.error(error);
      const errorMessage = (error as any)?.data?.data?.reason;
      toast.error(errorMessage);
    }
  };

  return (
    <div className="p-5">
      <div className="flex justify-end">
        <Profile />
      </div>
      <div className="font-medium text-4xl -mt-10">{data?.dep_name}, {data?.state}</div>
      <div className="flex my-2">
        <i
          onClick={() => navigate(-1)}
          className="fa-solid fa-arrow-turn-up transform -rotate-90 text-2xl text-black font-light ml-2 cursor-pointer"
        />
        <div className="text-xl font-poppins font-light ml-5">{data?.title}</div>
      </div>

      {/* Form Box */}
      <div className="p-8 bg-white rounded shadow-md m-5" style={{ width: '987.8px', border: '1px solid #00000080' }}>
        <h2 className="text-left mb-6 text-xl text-dark-blue font-sans">Get your documents by entering the required details</h2>

        <div className="flex items-center" style={{ width: '480.82px', marginBottom: '20px' }}>
          <label className="block text-gray-700 font-medium w-1/3 text-md font-sans">Department Id *</label>
          <p className="text-gray-700 font-medium">{data?.dep_code}</p>
        </div>

        <div className="flex items-center" style={{ width: '480.82px', marginBottom: '20px' }}>
          <label className="block text-gray-700 font-medium w-1/3 text-md font-sans">Document Id *</label>
          <p className="text-gray-700 font-medium">{data?.doc_code}</p>
        </div>

        <div className="flex items-center mb-6">
          <input 
            type="checkbox" 
            id="consent" 
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" 
            onChange={(e) => setConsentGiven(e.target.checked)} 
          />
          <label htmlFor="consent" className="ml-2 text-gray-700 text-sm font-sans">
            I provide my consent to Delock to share my details with the Issuers for the purpose of fetching my documents.
          </label>
        </div>

        <div className="flex justify-end">
          <button
            onClick={fetchData}
            className="py-2 px-4 rounded text-white bg-bold-blue hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-indigo-200 text-md font-sans"
          >
            Get Document
          </button>
        </div>
      </div>

      {/* Information Box */}
      <div className="bg-light-blue shadow-md" style={{ width: '987.85px', height: '134.67px', borderRadius: '10px 0px 0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
        <p className="text-center" style={{ fontSize: '16px', color: '#004182', fontFamily: 'Poppins, sans-serif' }}>
          {data?.data?.title}, {data?.state}: {data?.data?.department?.department_description}
        </p>
      </div>
    </div>
  );
};

export default IssueData;
