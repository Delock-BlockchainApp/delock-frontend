
import Card_component5 from "../components/Card_component5";
import Profile from "../components/Profile";
import { useLocation, useNavigate } from "react-router-dom";

const Doc_viewmore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.issuer;
  console.log(data);

  if (!data) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold text-red-600">No Data Available</h1>
        <p className="text-lg text-gray-700">We couldn't retrieve the document data. Please try again.</p>
        <button 
          onClick={() => navigate(-1)} 
          className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-[40px] font-poppins font-semibold mb-6" style={{ color: "#004182" }}>
          Documents
        </div>
        <Profile />
      </div>

      <div className="flex">
        <i
          onClick={() => {
            navigate(-1);
          }}
          className="fa-solid fa-arrow-turn-up transform -rotate-90 text-2xl text-black font-light ml-2 cursor-pointer"
        />
        <div className="text-2xl font-poppins font-light ml-5">{data?.department_name} , {data?.state}</div>
      </div>
      <p className="flex flex-col ml-14 mt-5 text-md">{data?.department_description}</p>
      <div className="flex justify-between mt-5 font-medium ml-14">Available documents</div>
      <div className="ml-10 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-2/3">
        {data?.documents?.map((doc, index) => (
          <Card_component5
            key={index}
            data={{ dep_name: data?.department_name, dep_code:data?.department_code,state: data?.state, doc_code: doc?.document_id, title: doc?.document_name, }}
          />
        ))}
      </div>
    </div>
  );
};

export default Doc_viewmore;
