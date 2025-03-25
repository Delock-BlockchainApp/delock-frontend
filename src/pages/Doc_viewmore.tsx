import Profile from "../components/Profile";
import Yourdocs_card3 from "../components/yourdocs_card3";
import { useLocation, useNavigate } from "react-router-dom";

const Doc_viewmore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
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
        <div className="text-2xl font-poppins font-light ml-5">{data?.name}</div>
      </div>
      <p className="flex flex-col ml-14 mt-5">{data?.department?.department_description}</p>
      <div className="flex justify-between mt-5 font-medium ml-14">Available documents</div>
      <div className="ml-10 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-2/3">
        {data?.department?.documents?.map((doc, index) => (
          <Yourdocs_card3
            key={index}
            data={{ name: doc?.document_name, state: data?.department?.state, code: doc?.document_id, data }}
          />
        ))}
      </div>
    </div>
  );
};

export default Doc_viewmore;
