const ViewMore = () => {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-gray-100 p-5">
      {/* Form Box */}
      <div
        className="p-8 bg-white rounded shadow-md mb-6"
        style={{ width: '987.8px', border: '1px solid #00000080' }}
      >
        <h2 className="text-left mb-6 text-xl text-dark-blue font-sans">Get your documents by entering the required details</h2>
        <form>
          <div className="flex items-center" style={{ width: '480.82px', height: '34.08px', marginBottom: '20px' }}>
            <label htmlFor="registerNumber" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Register Number *
            </label>
            <input
              type="text"
              id="registerNumber"
              className="w-2/3 px-4 py-1 border-b border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="flex items-center" style={{ width: '480.82px', height: '34.08px', marginBottom: '20px' }}>
            <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Date of Birth *
            </label>
            <input
              type="date"
              id="dateOfBirth"
              className="w-2/3 px-4 py-1 border-b border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="flex items-center" style={{ width: '480.82px', height: '34.08px', marginBottom: '20px' }}>
            <label htmlFor="accountNumber" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Account Number *
            </label>
            <input
              type="text"
              id="accountNumber"
              className="w-2/3 px-4 py-1 border-b border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="consent"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="consent" className="ml-2 text-gray-700 text-sm font-sans">
              I provide my consent to Delock to share my details with the Issuers for the purpose of fetching my documents.
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-4 rounded text-white bg-bold-blue hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-indigo-200 text-md font-sans"
            >
              Get Document
            </button>
          </div>
        </form>
      </div>

      {/* Information Box */}
      <div
        className="bg-light-blue shadow-md"
        style={{
          width: '987.85px',
          height: '134.67px',
          borderRadius: '10px 0px 0px 0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        <p
          className="text-center"
          style={{
            fontSize: '16px',
            color: '#004182',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          APJ Abdul Kalam Technological University (initially Kerala Technological University), a State Government
          University established by the government of Kerala (
          <a href="https://ktu.edu.in" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            https://ktu.edu.in
          </a>
          ) is issuing Degree certificates for the year 2021 through Digilocker. These can be pulled by the students
          into their Digilocker account.
        </p>
      </div>
    </div>
  );
};

export default ViewMore;
