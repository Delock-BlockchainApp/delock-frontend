import React, { useEffect, useState } from 'react';

interface UploadDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string, file: File | null }) => void;
  title?: string;
}

const DocumentUploadModal: React.FC<UploadDocumentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = 'Upload Document'
}) => {
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setName('');
      setFile(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, file });
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // If no name is set yet, use the file name (without extension)
      if (!name) {
        const fileName = selectedFile.name.split('.').slice(0, -1).join('.');
        setName(fileName);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      
      // If no name is set yet, use the file name (without extension)
      if (!name) {
        const fileName = droppedFile.name.split('.').slice(0, -1).join('.');
        setName(fileName);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[600px] relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
        
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-1">
                Document Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter document name"
                required
              />
            </div>
            
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-1">
                Upload Document
              </label>
              <div
                className={`border-2 border-dashed rounded-md p-6 text-center ${
                  isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  onChange={handleFileChange}
                />
                
                {file ? (
                  <div className="flex flex-col items-center">
                    <div className="text-green-600 mb-2">
                      <i className="fa-solid fa-file-lines text-2xl"></i>
                    </div>
                    <p className="text-gray-800 font-medium">{file.name}</p>
                    <p className="text-gray-500 text-sm">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    <button
                      type="button"
                      className="mt-2 text-sm text-red-600 hover:text-red-800"
                      onClick={() => setFile(null)}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-gray-400 mb-2">
                      <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
                    </div>
                    <p className="text-gray-600 mb-1">
                      Drag and drop your file here, or
                    </p>
                    <label
                      htmlFor="fileUpload"
                      className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 cursor-pointer inline-block"
                    >
                      Browse File
                    </label>
                  </div>
                )}
              </div>
              {!file && (
                <p className="mt-1 text-sm text-gray-500">
                  Supported formats: PDF, DOCX, TXT, etc.
                </p>
              )}
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold text-white bg-dark-blue rounded-md hover:bg-blue-800"
              disabled={!file || !name}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentUploadModal;