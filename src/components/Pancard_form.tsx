
function Pancard_form() {
  return (
    <div className='h-[550px] w-full shadow-md mt-4 p-5 border border-gray-300 rounded-lg'>
        <p className="font-medium text-xl text-dark-blue">Enter the user details for the upload</p>
        <div className="p-14  ">
       
        <div className="flex items-center w-[500px] h-fit mb-10 ">
            <label htmlFor="Account Number" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Account Number *
            </label>
            <input
              type="text"
              id="accountNumber"
              placeholder="Enter the account number"
              className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
              required
            />
          </div>

          <div className="flex items-center w-[500px] h-fit mb-10">
            <label htmlFor="Account Number" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Name *
            </label>
            <input
              type="text"
              placeholder="Enter the name"
              id="Name"
              className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
              required
            />
          </div>

          <div className="flex items-center w-[500px] h-fit mb-10">
            <label htmlFor="Gender" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Gender *
            </label>
            <input
              type="text"
              id="gender"
              placeholder="M/F"
              className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
              required
            />
          </div>

          <div className="flex items-center w-[500px] h-fit mb-10">
            <label htmlFor="Gender" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Date of Birth *
            </label>
            <input
              type="date"
              placeholder="Enter the DOB"
              id="dob"
              className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
              required
            />
          </div>

        </div>
        {/* /////////////////////////////////////// */}
        <div className="mt-5 flex justify-end"> 
        <div className="flex h-9 w-52 rounded-lg bg-bold-blue text-white justify-center items-center font-semibold cursor-pointer">Get Document</div>
        </div>
      
    </div>
  )
}

export default Pancard_form
