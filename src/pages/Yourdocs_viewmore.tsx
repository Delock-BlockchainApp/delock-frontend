
import YourdocsCard4 from "../components/yourdocs_card3"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Yourdocs_viewmore = () => {
  const navigate = useNavigate()
  const { folderName } = useParams<{ name: string }>();
  const folders=[
    { title: 'BTech Certificate', date:'10-01-2025' },
    { title: 'MTech Certificate', date:'10-01-2025' },
    { title: 'BCA Certificate', date:'10-01-2025' },
    { title: 'PhD Certificate', date:'10-01-2025' },
    { title: 'Integrated Course Certificate', date:'10-01-2025' },
    { title: 'X Certificate', date:'10-01-2025' },
    { title: 'XII Certificate', date:'10-01-2025' },
  ]
  return (
    <div className="ml-5">
      <div className="flex justify-between ">
        <div className=" text-5xl font-poppins font-semibold mt-2 mb-6 " style={{ color: '#004182' }}>Your Docs</div>
        <div className=" w-10 h-10 mr-4 mt-2 rounded-full bg-[#004182] flex items-center justify-center cursor-pointer " >
          <button
            onClick={() => {
              navigate(-1)
            }}
            className="w-10 h-10 rounded-full bg-[#004182] flex items-center justify-center cursor-pointer"
            aria-label="Go Back"
          >
            <i className="fa-regular fa-user text-white text-base" />
          </button>
        </div>
      </div>

      <div className="flex">
        <i className=" fa-solid fa-arrow-turn-up transform -rotate-90 text-2xl text-black font-light ml-4 cursor-pointer "/>
        <div className=" text-2xl font-poppins font-light ml-5 ">{folderName}</div>
      </div>
      <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-2/3">
        {folders.map((doc, index) => (
          <YourdocsCard4 key={index} data={doc} />
        ))}
      <AddFile/>
      </div>
      <div className=" flex items-center rounded-xl bg-[#EBF3FC] pt-1 w-11/12 h-12 mt-40 ">
        <div className="  font-poppins text-base ml-4 font-medium " style={{ color: '#004182' }}>Documents in Delock Drive are <span className="font-semibold">NOT</span> treated as authentic original documents. You can upload your personal documents with trust</div>
      </div>


    </div>
  )
}

export default Yourdocs_viewmore

export const AddFile = () => {
  return (

  <div className='flex flex-col rounded-xl bg-white p-2 w-[120px] h-[150px] mt-8 border-2 border-gray-500 cursor-pointer '>

            <div className=' w-[100px] h-[75px] rounded-[10px]  flex items-center justify-center border-2 border-gray-500 '>
                <div className=" flex w-10 h-10 rounded-full border-gray-500 border-2 justify-center items-center"><i className="fa-solid fa-plus text-2xl text-gray-500  " /></div>
            </div> 
            <div className=" relative flex flex-col mt-2">
                <span className=" text-xs font-poppins font-semibold  text-center mt-4">
                    Add File
                </span>
            </div>
            </div>
    )
}
