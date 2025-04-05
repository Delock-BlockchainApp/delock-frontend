import React, { useState } from "react";

interface FormProps {
  schema: Record<string, string>;
}

const FormGenerator: React.FC<FormProps> = ({ schema }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleChange = (key: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
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
            disabled
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
            disabled
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
            disabled
          />
        </div>
          
        );
      default:
        return <div>Unsupported field type</div>;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
      {Object.entries(schema).map(([key, type]) => (
        <div key={key} className="mb-4">
          
          {renderInput(key, type)}
        </div>
      ))}
       <div className="mt-5 flex justify-end">
          <button
            className="flex h-9 w-52 rounded-lg bg-bold-blue text-white justify-center items-center font-semibold cursor-pointer text-md "
      
          >
            Issue Document
          </button>
        </div>
    </form>
  );
};

export default FormGenerator;
