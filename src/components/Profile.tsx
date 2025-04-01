import React, { useState } from 'react';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Mock user data - replace with your actual user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    wallet: "0x1234...5678"
  };

  return (
    <div className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-[#004182] flex items-center justify-center cursor-pointer"
      >
        <i className="fa-regular fa-user text-white text-base"></i>
      </div>

      {/* Dropdown menu */}
      <div
        className={`absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 ease-in-out border-2 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[-10px] pointer-events-none'
        }`}
      >
        <div className="p-4 border-b border-gray-100">
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
        
        <div className="p-4 border-b border-gray-100">
          <p className="text-xs text-gray-500 uppercase">Wallet Address</p>
          <p className="text-sm font-mono text-gray-700">{user.wallet}</p>
        </div>
        
        <div className="p-2">
          <button
            onClick={() => console.log('Logout clicked')}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;