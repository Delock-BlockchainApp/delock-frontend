import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil'; // Adjust the import path as necessary
import { useBlockchain } from '../context/BlockchainContext';
function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useRecoilValue(userState); // Get user data from Recoil state
    const { disconnectWallet } = useBlockchain();

  const formatWallet = (address: string) => {
    if (!address) return "";
    const match = address.match(/^(.{4,5}).+(.{7})$/);
    return match ? `${match[1]}................${match[2]}` : address;
  };
  const Wallet = formatWallet(user.wallet);
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
          <p className="text-sm font-semibold
           text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
        
        <div className="p-4 border-b border-gray-100">
          <p className="text-xs text-gray-500 uppercase">Wallet Address</p>
          <p className="text-sm font-mono text-gray-700 line-clamp-1">{Wallet}</p>
        </div>
        
        <div className="p-2">
          <button
            onClick={disconnectWallet}
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