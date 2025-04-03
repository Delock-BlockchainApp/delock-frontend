import React, { useState } from "react";
import SchemaGenerator from "./SchemaGenerator";
import FormGenerator from "./form_generator";
import toast from "react-hot-toast";

const CustomFormPage = () => {
  const [formSchema, setFormSchema] = useState<Record<string, string>>({});
  const [jsonOutput, setJsonOutput] = useState<string>("");

  const handleSchemaChange = (schema: Record<string, string>) => {
    setFormSchema(schema);
    setJsonOutput(JSON.stringify(schema, null, 2));
    console.log("Generated JSON Schema:", schema);
    console.log("Generated JSON Output:", jsonOutput);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="ml-5 h-full p-5 overflow-y-scroll scrollbar">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Schema Generator */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <SchemaGenerator onSchemaChange={handleSchemaChange} />
          {jsonOutput && (
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2">Generated JSON Schema:</h3>
              <pre className="bg-gray-100 p-4 rounded-md whitespace-pre-wrap overflow-auto">{jsonOutput}</pre>
              <div
                onClick={copyToClipboard}
                className="mt-2 h-9 w-48 bg-green-500 text-white px-4 py-2 rounded-md text-md font-semibold hover:bg-green-600"
              >
                Copy to Clipboard
              </div>
            </div>
          )}
        </div>

        {/* Form Renderer */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {Object.keys(formSchema).length > 0 ? (
            <>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Generated Form Preview:</h2>
              <FormGenerator schema={formSchema} />
              
            </>
          ) : (
            <p className="text-gray-600">No form schema generated yet.</p>
          )}
          <div className="mt-4 flex justify-end">
          <div onClick={()=>{
            toast.success("Document saved successfully");
          }} className="h-9 flex bg-green-500 text-white px-4 py-2 rounded-md font-semibold text-md  hover:bg-green-600">Save Document</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CustomFormPage;
