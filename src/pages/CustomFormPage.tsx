import React, { useState } from "react";
import SchemaGenerator from "./SchemaGenerator";
import FormGenerator from "./form_generator";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CustomFormPage = () => {
  const location=useLocation();
  const document_name=location?.state
  console.log("Document Name:",document_name);
  const document_id=useParams().documentCode
  const BACKEND_URL = import.meta.env.VITE_REACT_URL_BACKEND_URL;
  const navigate=useNavigate()

  const [formSchema, setFormSchema] = useState<Record<string, string>>({});
  const [jsonOutput, setJsonOutput] = useState<string>("");

  const handleSchemaChange = (schema: Record<string, string>) => {
    setFormSchema(schema);
    setJsonOutput(JSON.stringify(schema, null, 2));
    // console.log("Generated JSON Schema:", schema);
    // console.log("Generated JSON Output:", jsonOutput);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput).then(() => {
      toast.success("Copied to clipboard!");
    });
  };
  const handleFormSubmit = async () => {
    if (!formSchema || Object.keys(formSchema).length === 0) {
      toast.error("Please generate a form schema before submitting.");
      return;
    }
    const payload = {
      document_schema: formSchema,
      document_id,
      document_name,
    };

    toast.promise(
      axios.post(`${BACKEND_URL}/api/documents/docschema`, payload),
      {
        loading: "Saving document schema...",
        success: "Document schema saved successfully.",
        error: "Error while saving document schema.",
      }
    )
    .then((response) => {
      if (response.status === 201) {
        console.log("Saved:", response.data);
        navigate(-1);
      } else {
        toast.error("Failed to save document schema.");
        console.error("Unexpected response:", response);
      }
    })
    .catch((error) => {
      console.error("Save error:", error instanceof Error ? error.message : error);
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
          <div onClick={handleFormSubmit} className="h-9 flex bg-green-500 text-white px-4 py-2 rounded-md font-semibold text-md cursor-pointer hover:bg-green-600">Save Document</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CustomFormPage;
