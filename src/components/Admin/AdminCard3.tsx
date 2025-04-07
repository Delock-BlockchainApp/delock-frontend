
import { useNavigate } from "react-router-dom";
interface Data {
  document_description: string
  document_id: string
  document_name: string
  state: string
}
  

export const AdminCard3=({ data }: { data: Data })=>{
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`upload`, {
      state:  {document_id:data.document_id,document_name:data.document_name} ,
    });
    // console.log("Data in AdminCard3:", data);
  };
  return (
    <div className="relative bg-white border-2 rounded-lg w-[350px] h-[250px] mt-5 shadow-md flex p-3 flex-col">
        <div className="flex">
            <div className="flex h-24 w-24 border-2 border-gray-500 rounded-lg justify-center items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/1250/1250614.png" alt="icon" className='w-[80px] h-[80px]' />
            </div>
            <div className="ml-4 flex flex-col">
                <div className='font-poppins text-sm  text-gray-500'>{data?.state}</div>
                <div className='font-poppins text-sm font-medium w-52 mt-2 line-clamp-2 '>{data?.document_name}</div>
              
            </div>
        </div>
        <div className="flex mt-5 flex-col gap-y-2">
        <div className='font-poppins text-sm line-clamp-3 h-14 '>{data?.document_description}</div>
        </div>
        <div className="flex justify-between mt-2">
        <div className="flex w-44 h-7 border-2  border-dark-blue rounded-2xl justify-center items-center text-sm text-dark-blue">
          {data?.state === "All State" ? "Central Government" : "State Government"}
        </div>
        <div onClick={handleClick} className=" flex w-7 border-2 rounded-full border-dark-blue items-center justify-center cursor-pointer text-dark-blue hover:bg-dark-blue hover:text-white"><i className="fa-solid fa-arrow-right -rotate-45"></i></div>
        </div>
        </div>
  )
}

export default AdminCard3
