const Overview_component1=()=> {
  return (
    <div className="w-[250px] h-[150px] border border-gray-300 rounded-lg shadow-md p-4 bg-white flex flex-col justify-between mt-5 mr-7 mb-5">
      <div className="flex items-center">
        {/* Image Box */}
        <div className="w-20 h-20 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden">
          <img
            src="/assets/photo.jpg"
            alt="PAN"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-800">PAN Verification</h3>
          <p className="text-sm text-gray-60 0">FUE*****69E</p>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-xs text-gray-400 mt-4">
        Income Tax Department
      </p>
    </div>
  )
}

export default Overview_component1
