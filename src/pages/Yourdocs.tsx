import Yourdocs_card from "../components/yourdocs_card"
import Yourdocs_card2 from "../components/yourdocs_card2"

function Yourdocs() {
  return (
    <div className="h-screen overflow-y-scroll">
    
      <div className=" text-5xl font-poppins font-semibold mt-2 mb-6 ml-3" style={{ color: '#004182' }}>Your Docs</div>
      <div className=" text-sm font-poppins font-bold  ml-5 ">12 Issued documents Found</div>
      <div className=" flex flex-col align">
      <Yourdocs_card title={'Aadhaar Card' } description={'**************'} Authority={'Unique Identification Authority of India(UIDAI)'}/>
      <Yourdocs_card title={'Driving License' } description={'KL05*******15'} Authority={'Motor Vechile Department,Kerala'}/>
      <Yourdocs_card title={'PAN Verification' } description={'FUE******9A'} Authority={'Income Tax Department'}/>
      <Yourdocs_card title={'Class X Marksheet' } description={'431******2019'} Authority={'Central Board of Secondary Education'}/>
      <Yourdocs_card title={'Registraton of Vechiles' } description={'KL01*******189'} Authority={'Motor Vehicle Department, Kerala'}/>
      </div>
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-2/3">
        <Yourdocs_card2 Name={'Education/Certificates'} Number={7} />
        <Yourdocs_card2 Name={'Health'} Number={11} />
        <Yourdocs_card2 Name={'Revenue/Tax'} Number={2} />
        <Yourdocs_card2 Name={'Personal'} Number={4} />
      </div>
      <div className=" flex   items-center rounded-xl bg-[#EBF3FC] pt-1 w-11/12 h-12 mt-5 ml-5 ">
        <div className="  font-poppins text-base ml-4 font-medium " style={{ color: '#004182' }}>Documents in Delock Drive are <span className="font-semibold">NOT</span> treated as authentic original documents. You can upload your personal documents with trust</div>
      </div>
    </div>
  
      
      

      
    
      
    
  )
}

export default Yourdocs
