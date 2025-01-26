

function Drivinglicense_form() {
    const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  return (
    <div className='h-[550px] w-full shadow-md mt-4 p-5 border border-gray-300 rounded-lg'>
    <p className="font-medium text-xl text-dark-blue">Enter the user details for the upload</p>
    <div className="p-14 grid grid-cols-2 gap-4">
   
    <div className="flex items-center w-[500px] h-fit mb-5 ">
        <label htmlFor="IssuingAuthority" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
        Issuing Authority *
        </label>
        <input
          type="text"
          id="IssuingAuthority"
          placeholder="Enter the issuing authority"
          className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
          required
        />
      </div>

      <div className="flex items-center w-[500px] h-fit mb-5">
        <label htmlFor="doi" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
          Date of Issue *
        </label>
        <input
          type="date"
          placeholder="Date of Issue"
          id="doi"
          className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
          required
        />
      </div>

      <div className="flex items-center w-[500px] h-fit mb-5">
        <label htmlFor="licenseNo" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
        License No *
        </label>
        <input
          type="text"
          id="licenseNo"
          placeholder="Enter the License Number"
          className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
          required
        />
      </div>

      <div className="flex items-center w-[500px] h-fit mb-5">
        <label htmlFor="doe" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
          Date of Expiry *
        </label>
        <input
          type="date"
          placeholder="Enter the Date of Expiry"
          id="doe"
          className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
          required
        />
      </div>

      <div className="flex items-center w-[500px] h-fit mb-5">
        <label htmlFor="AuthorizeVehicle" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
        Authorize Vehicle *
        </label>
        <input
          type="text"
          id="AuthorizeVehicle"
          placeholder="LMV,MCWG"
          className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
          required
        />
      </div>
      <div className="flex items-center w-[500px] h-fit mb-5">
        <label htmlFor="dob" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
          Date of Birth *
        </label>
        <input
          type="date"
          placeholder="Enter the Date of Birth"
          id="dob"
          className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
          required
        />
      </div>
      <div className="flex items-center w-[500px] h-fit mb-5">
        <label htmlFor="name" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
        Name *
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter the name"
          className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
          required
        />
      </div>
      <div className="flex items-center w-[500px] h-fit mb-5">
        <label htmlFor="bloodGroup" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
        Blood Group *
        </label>
        <select name="bloodGroup" id="bloodGroup" className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5 ">
            {bloodGroup.map((bg, index) => (
                <option key={index} value={bg}  >
                {bg}
                </option>
            ))}
        </select>
      </div>
      <div className="flex items-center w-[500px] h-fit mb-5">
        <label htmlFor="guardian" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
        Address *
        </label>
        <textarea name="address" id="address" placeholder="Enter the name of address"
          className="w-2/3 h-16 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5 resize-none"
          required>
        </textarea>
      </div>
      <div className="flex items-center w-[500px] h-fit mb-5">
        <label htmlFor="guardian" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
        S/W/D *
        </label>
        <input
          type="text"
          id="guardian" 
          placeholder="Enter the name of guardian"
          className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
          required
        />
      </div>

    </div>
    {/* /////////////////////////////////////// */}
    <div className="flex justify-end -mt-10"> 
    <div className="flex h-9 w-52 rounded-lg bg-bold-blue text-white justify-center items-center font-semibold cursor-pointer">Get Document</div>
    </div>
  
</div>
  )
}

export default Drivinglicense_form
