const Overview_component1 = ({ title, maskedId, issuer }) => {
  const ipfsBaseUrl ='https://salmon-left-puffin-891.mypinata.cloud/ipfs/';
  return (
    <a href={`${ipfsBaseUrl}${maskedId}`} target="_blank" rel="" className="">
   
    <div className="w-[250px] h-[150px] border border-gray-300 rounded-lg shadow-md p-4 bg-white flex flex-col justify-between mt-5 mr-7 mb-5">
      <div className="flex items-center">
        {/* Image Box */}
        <div className="w-20 h-20 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden">
        <img src="https://cdn-icons-png.flaticon.com/512/1250/1250614.png" alt="icon" className='w-[80px] h-[80px]' />
        </div>

        {/* Text Content */}
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-800">{title}</h3>
          {/* <p className="text-sm text-gray-600">{maskedId}</p> */}
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-xs text-gray-400 mt-4">{issuer}</p>
    </div>
    </a>
  );
};

export default Overview_component1;
