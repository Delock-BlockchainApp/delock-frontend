import Yourdocs_card from "../components/yourdocs_card"

function Yourdocs() {
  return (
    <div>
    
      <div className=" text-5xl font-poppins font-semibold mt-2 mb-6" style={{ color: '#004182' }}>Your Docs</div>
      <div className=" text-sm font-poppins font-bold  ml-5 ">12 Issued documents Found</div>
      <div className=" flex flex-col align">
      <Yourdocs_card title={'Aadhaar Card' } description={'**************'} Authority={'Unique Identification Authority of India(UIDAI)'}/>
      <Yourdocs_card title={'Driving License' } description={'KL05*******15'} Authority={'Motor Vechile Department,Kerala'}/>
      <Yourdocs_card title={'PAN Verification' } description={'FUE******9A'} Authority={'Income Tax Department'}/>
      <Yourdocs_card title={'Class X Marksheet' } description={'431******2019'} Authority={'Central Board of Secondary Education'}/>
      <Yourdocs_card title={'Registraton of Vechiles' } description={'KL01*******189'} Authority={'Motor Vehicle Department, Kerala'}/>
      </div>
    </div>
      
      

      
    
      
    
  )
}

export default Yourdocs
