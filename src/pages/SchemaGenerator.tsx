import React, { useState } from "react";

interface Field {
  name: string;
  type: string;
}

const SchemaGenerator: React.FC<{ onSchemaChange: (schema: Record<string, string>) => void }> = ({ onSchemaChange }) => {
  const [fields, setFields] = useState<Field[]>([]);
  const [newField, setNewField] = useState<Field>({ name: "", type: "text" });

  const addField = () => {
    if (newField.name.trim()) {
      const updatedFields = [...fields, { ...newField }];
      setFields(updatedFields);
      setNewField({ name: "", type: "text" });

      // Convert to schema format
      const schema = updatedFields.reduce((acc, field) => {
        acc[field.name] = field.type;
        return acc;
      }, {} as Record<string, string>);

      onSchemaChange(schema);
    }
  };

  const removeField = (index: number) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);

    const schema = updatedFields.reduce((acc, field) => {
      acc[field.name] = field.type;
      return acc;
    }, {} as Record<string, string>);

    onSchemaChange(schema);
  };

  return (<div className="p-8 bg-inherit rounded-lg shadow-md border border-gray-400">
    <h2 className="text-2xl font-bold mb-6 text-gray-700">Document Generator</h2>
  
    {/* Input and Select Fields */}
    <div className="flex items-center gap-6 mb-6">
      <input
        type="text"
        placeholder="Field Name"
        value={newField.name}
        onChange={(e) => setNewField({ ...newField, name: e.target.value })}
        className="w-1/2 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none"
      />
      
      <select
        value={newField.type}
        onChange={(e) => setNewField({ ...newField, type: e.target.value })}
        className="w-1/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none"
      >
        <option value="text">Text</option>
        <option value="date">Date</option>
        <option value="number">Number</option>
      </select>
  
      <button
        onClick={addField}
        className="flex h-9 w-52 rounded-lg bg-bold-blue text-white justify-center items-center font-semibold cursor-pointer text-md "
      >
        Add Field
      </button>
    </div>
  
    {/* Fields Display */}
    {fields.length > 0 && (
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Current Fields:</h3>
        <ul className="space-y-4">
          {fields.map((field, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 rounded-md border-b-2 border-gray-300 bg-inherit"
            >
              <span className="text-gray-700">
                {field.name} <span className="text-gray-500">({field.type})</span>
              </span>
              
              <button
                onClick={() => removeField(index)}
                className="bg-red-700 text-white px-4 py-1 rounded-md hover:bg-red-600 transition duration-300 text-md font-semibold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  
  );
};

export default SchemaGenerator;
