
function IssuerCard() {
  return (
    <div className="relative bg-white border-2 rounded-lg w-[350px] h-[250px] mt-5 shadow-md flex p-3 flex-col">
        <div className="flex">
            <div className="flex h-24 w-24 border-2 border-gray-500 rounded-lg justify-center items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/1250/1250614.png" alt="icon" className='w-[80px] h-[80px]' />
            </div>
            <div className="ml-4 flex flex-col">
                <div className='font-poppins text-sm  text-gray-500'>Kerala</div>
                <div className='font-poppins text-sm font-medium w-52 mt-2 line-clamp-2 '>Directory of Food and Civil Supplies, Kerala</div>
                <div className='font-poppins text-xs text-zinc-500 mt-2'> 3 Documents</div>
            </div>
        </div>
        <div className="flex mt-5 flex-col gap-y-2">
        <div className='font-poppins text-sm line-clamp-3 h-14 '>Ration Card details of Food , Civil Supplies and Consumer Affairs Departments.
        </div>
        <div className="flex justify-between mt-2">
        <div className="flex w-44 h-7 border-2  border-dark-blue rounded-2xl justify-center items-center text-sm text-dark-blue">State Government</div>
        <div className=" flex w-7 border-2 rounded-full border-dark-blue items-center justify-center cursor-pointer text-dark-blue hover:bg-dark-blue hover:text-white"><i className="fa-solid fa-arrow-right -rotate-45"></i></div>
        </div>
        </div>
       
        
      
    </div>
  )
}

export default IssuerCard
