import React, { useEffect, useState } from 'react';

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string }) => void;
  title?: string;
}

const YourDocModal: React.FC<CreateModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = 'Create New Folder'
}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name });
    onClose();
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
                Folder Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                placeholder="Enter name"
                required
              />
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
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default YourDocModal;