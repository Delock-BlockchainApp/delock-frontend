import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState, AdminState } from '../recoil';
import { useBlockchain } from '../context/BlockchainContext';
import { useAuth } from '../context/useAuth';

// Helper function to format wallet address
const formatWallet = (address: string) => {
  if (!address) return "";
  const match = address.match(/^(.{4,5}).+(.{7})$/);
  return match ? `${match[1]}................${match[2]}` : address;
};

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const { role } = useAuth(); // Get user role from auth context
  const isAdmin = role === "admin";
  
  // Get state based on role
  const user = useRecoilValue(userState);
  const admin = useRecoilValue(AdminState);
  
  const { disconnectWallet } = useBlockchain();
  
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
        className={`absolute right-0 mt-2 w-72 z-50 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 ease-in-out border-2 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[-10px] pointer-events-none'
        }`}
      >
        {isAdmin ? (
          <>
            <div className="p-4 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-900">{admin.department_name}</p>
              <p className="text-sm text-gray-500">{admin.department_code}</p>
            </div>
            
            <div className="p-4 border-b border-gray-100">
              <p className="text-xs text-gray-500 uppercase">Wallet Address</p>
              <p className="text-sm font-mono text-gray-700 line-clamp-1">{formatWallet(admin.wallet_address || '')}</p>
            </div>
            
            <div className="p-4 border-b border-gray-100">
              <p className="text-xs text-gray-500 uppercase">Department ID</p>
              <p className="text-sm text-gray-700">{admin.department_id || 'Not specified'}</p>
            </div>
          </>
        ) : (
          <>
            <div className="p-4 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            
            <div className="p-4 border-b border-gray-100">
              <p className="text-xs text-gray-500 uppercase">Wallet Address</p>
              <p className="text-sm font-mono text-gray-700 line-clamp-1">{formatWallet(user.wallet)}</p>
            </div>
          </>
        )}
        
        <div className="p-2"> <button onClick={disconnectWallet} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer">  Logout  </button> </div> 
      </div>
      
    </div>
  );
}

export default Profile;