import React, { useState } from 'react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentDomain: string;
  currentApiKey: string;
  onSave: (domain: string, apiKey: string) => void;
}

const SettingModal: React.FC<PremiumModalProps> = ({
  isOpen,
  onClose,
  currentDomain,
  currentApiKey,
  onSave,
}) => {
  const [domain, setDomain] = useState(currentDomain);
  const [apiKey, setApiKey] = useState(currentApiKey);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(domain, apiKey);
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
        
        <h2 className="text-2xl font-semibold mb-6">Edit Delock Drive Settings</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Domain
              </label>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                placeholder="Enter domain"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                API Key
              </label>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                placeholder="Enter API key"
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
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingModal;