import YourdocsCard3 from "../components/yourdocs_card3"

const Yourdocs_viewmore = () => {
  return (
    <div className="ml-5">
      <div className="flex justify-between ">
        <div className=" text-5xl font-poppins font-semibold mt-2 mb-6 " style={{ color: '#004182' }}>Your Docs</div>
        <div className=" w-10 h-10 mr-4 mt-2 rounded-full bg-[#004182] flex items-center justify-center" >
          <i className="fa-regular fa-user text-white text-base "></i>
        </div>
      </div>

      <div className="flex">
        <i className=" fa-solid fa-arrow-turn-up transform -rotate-90 text-2xl text-black font-light ml-4 "></i>
        <div className=" text-2xl font-poppins font-light ml-5 ">Education/Certificates</div>
      </div>
      <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-2/3">
        <YourdocsCard3 title={'BTech Certificate'} />
        <YourdocsCard3 title={'MTech Certificate'} />
        <YourdocsCard3 title={'BCA Certificate'} />
        <YourdocsCard3 title={'PhD Certificate'} />
        <YourdocsCard3 title={'Integrated Course Certificate'} />
        <YourdocsCard3 title={'X Certificate'} />
        <YourdocsCard3 title={'XII Certificate'} />
        <div className=' relative rounded-xl bg-white p-2 w-[8em] h-[10em]  ml-5  border border-black/50 '>

          <div className=' flex '>
            <div className=' relative bg-white w-[7em] h-[5.33em] rounded-xl flex justify-center items-center  border border-black/50 '>
            </div>

            {/* <div className=" absolute w-10 h-10   rounded-full bg-[#004182] flex items-center justify-center " > */}
            <div className="absolute mt-3 ml-7 mr-5 w-14 h-14 rounded-full bg-white border border-black/50 flex items-center justify-center ">
              <i className="fa-solid fa-plus text-lg text-black/50  "></i>
            </div>

          </div>
          <div className=' font-poppins  mt-4 ml-8 text-sm text-black/80 '>Add File</div>

        </div>

      </div>
      <div className=" flex items-center rounded-xl bg-[#EBF3FC] pt-1 w-11/12 h-12 mt-40 ">
        <div className="  font-poppins text-base ml-4 font-medium " style={{ color: '#004182' }}>Documents in Delock Drive are <span className="font-semibold">NOT</span> treated as authentic original documents. You can upload your personal documents with trust</div>
      </div>


    </div>
  )
}

export default Yourdocs_viewmore
