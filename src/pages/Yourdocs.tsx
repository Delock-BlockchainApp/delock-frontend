import TextComponent from "../components/TextComponent"
import TextComponent2 from "../components/TextComponent2"
import Yourdocs_card from "../components/yourdocs_card"
import Yourdocs_card2 from "../components/yourdocs_card2"

function Yourdocs() {
  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
      <div className="h-fit"><div className="flex justify-between">
      <TextComponent text="Your Docs" fontSize="40px" />
        <div className=" w-10 h-10 mt-2 rounded-full bg-dark-blue flex items-center justify-center" >
          <i className="fa-regular fa-user text-white text-base"></i>
        </div>

      </div>
      <TextComponent2 text="Issued Documents" />
        <div className=" flex flex-col pt-5 ">
          <Yourdocs_card title={'Aadhaar Card'} description={'**************'} Authority={'Unique Identification Authority of India(UIDAI)'} />
          <Yourdocs_card title={'Driving License'} description={'KL05*******15'} Authority={'Motor Vechile Department,Kerala'} />
          <Yourdocs_card title={'PAN Verification'} description={'FUE******9A'} Authority={'Income Tax Department'} />
          <Yourdocs_card title={'Class X Marksheet'} description={'431******2019'} Authority={'Central Board of Secondary Education'} />
          <Yourdocs_card title={'Registraton of Vechiles'} description={'KL01*******189'} Authority={'Motor Vehicle Department, Kerala'} />
        </div>



        <TextComponent2 text="Delock Drive Folders" />

        <div className="flex justify-between">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-2/3">
            <Yourdocs_card2 Name={'Education/Certificates'} Number={7} />
            <Yourdocs_card2 Name={'Health'} Number={11} />
            <Yourdocs_card2 Name={'Revenue/Tax'} Number={2} />
            <Yourdocs_card2 Name={'Personal'} Number={4} />
          </div>
          <div className=" w-10 h-10 mt-2 rounded-full bg-dark-blue flex items-center justify-center" >
            <i className="fa-solid fa-plus text-white text-lg"></i>
          </div>

        </div>
        <div className=" flex items-center rounded-xl bg-[#EBF3FC] pt-1 w-11/12 h-12 mt-5 ml-5">
          <div className="text-base ml-4 font-medium text-dark-blue">Documents in Delock Drive are <span className="font-semibold">NOT</span> treated as authentic original documents. You can upload your personal documents with trust</div>
        </div>
      </div>
      

    </div>








  )
}

export default Yourdocs
