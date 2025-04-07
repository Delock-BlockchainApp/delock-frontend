import { useState } from "react";

interface DocumentFormProps {
    documentSchema: Record<string, string>;
  }
  
export const DocumentForm: React.FC<DocumentFormProps> = ({ documentSchema }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
  
    const handleChange = (key: string, value: string | number) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    };
    const handleChangeAddress = (value: string) => {
      setFormData((prev) => ({ ...prev, userAddress: value })); 
    }
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Document Data:", formData);
    };
  
    const renderInput = (key: string, type: string) => {
      switch (type) {
        case "text":
          return (
            <div className="flex items-center w-[500px] h-fit mb-10">
              <label htmlFor={key} className="block text-gray-700 font-medium w-1/3 text-md font-sans">
                {key.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase())} *
              </label>
              <input
                type="text"
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
                placeholder={`Enter ${key.replace(/_/g, " ")}`}
                required
              />
            </div>
          );
        case "date":
          return (
            <div className="flex items-center w-[500px] h-fit mb-10">
              <label htmlFor={key} className="block text-gray-700 font-medium w-1/3 text-md font-sans">
                {key.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase())} *
              </label>
              <input
                type="date"
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
                placeholder={`Enter ${key.replace(/_/g, " ")}`}
                required
              />
            </div>
          );
        case "number":
          return (
            <div className="flex items-center w-[500px] h-fit mb-10">
              <label htmlFor={key} className="block text-gray-700 font-medium w-1/3 text-md font-sans">
                {key.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase())} *
              </label>
              <input
                type="number"
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
                placeholder={`Enter ${key.replace(/_/g, " ")}`}
                required
              />
            </div>
          );
        default:
          return <div>Unsupported field type</div>;
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-medium mb-6">Document Details</h2>
        <div className="flex items-center w-[500px] h-fit mb-10 mt-10">
              <label  className="block text-gray-700 font-medium w-1/3 text-md font-sans">
                User Wallet Address *
              </label>
              <input
                type="text"
                id="userAddress"
                placeholder="Enter the user wallet address"
                className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
                required
                onChange={(e) => handleChangeAddress(e.target.value)}
               
              
              />
            </div>
       <div className="flex grid grid-cols-2  gap-4 ">
        {Object.entries(documentSchema).map(([key, type]) => (
          <div key={key}>
            {renderInput(key, type)}
          </div>
        ))}</div> 
        
        <div className="mt-5 flex justify-end">
          <button
            type="submit"
            className="flex h-9 w-52 rounded-lg bg-bold-blue text-white justify-center items-center font-semibold cursor-pointer text-md"
          >
            Issue Document
          </button>
        </div>
      </form>
    );
  };