
import axios from 'axios';
import uploading from '../assets/uploading.gif'
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useBlockchain } from '../context/BlockchainContext';

function Pancard_form() {

  const { contract} = useBlockchain();
  const [isLoading,setLoading]=useState<boolean>(false);

  const issuePanCard = async () => {
    setLoading(true);
    const pancardNumber = "ABDG7394KDL1Q";
    const name = (document.getElementById('Name') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const signDate = new Date().toLocaleString();

    const response = await axios.post('http://localhost:3000/api/documents/generate/pancard', {
      pancardNumber,
      name,
      gender,
      dob,
      signDate
    });

    setLoading(false);
    if (response.status === 200) {
		console.log('dfvdssdf',response.data.ipfsData.IpfsHash);
      issueDocument(
        (document.getElementById("userAddress") as HTMLInputElement).value,
        response.data.ipfsData.IpfsHash,
        "KE-D4", 
        "KE-D4-001" 
      );
      console.log('Document details:', response.data);
    } else {
      console.error('Failed to fetch document details');
    }
  }
const issueDocument = async (userAddress: string, ipfsHash: string, deptId: string, docId:string) => {
        if (!contract) return;
        try {
            const tx = await contract.issueDocument(userAddress, ipfsHash, deptId,docId);
            await tx.wait(); // Wait for transaction to be mined
            alert("Document issued successfully!");
        } catch (error) {
            console.error(error);
            alert("Error issuing document.");
        }
    };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-10">
          <img src={uploading} alt="Loading..." className="loader" />
        </div>
      )}
      <div className={`h-[550px] w-full shadow-md mt-4 p-5 border border-gray-300 rounded-lg ${isLoading ? 'pointer-events-none' : ''}`}>
        <p className="font-medium text-xl text-dark-blue">Enter the user details for the upload</p>
        <div className="p-14">
        <input
						type="text"
						placeholder="User Address"
						id="userAddress"
						className="block w-full p-2 border border-gray-300 rounded mb-3"
					/>
          <div className="flex items-center w-[500px] h-fit mb-10">
            <label htmlFor="Account Number" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Account Number *
            </label>
            <input
              type="text"
              id="accountNumber"
              placeholder="Enter the account number"
              className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
              required
            />
          </div>

          <div className="flex items-center w-[500px] h-fit mb-10">
            <label htmlFor="Account Number" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Name *
            </label>
            <input
              type="text"
              placeholder="Enter the name"
              id="Name"
              className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
              required
            />
          </div>

          <div className="flex items-center w-[500px] h-fit mb-10">
            <label htmlFor="Gender" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Gender *
            </label>
            <input
              type="text"
              id="gender"
              placeholder="M/F"
              className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
              required
            />
          </div>

          <div className="flex items-center w-[500px] h-fit mb-10">
            <label htmlFor="Gender" className="block text-gray-700 font-medium w-1/3 text-md font-sans">
              Date of Birth *
            </label>
            <input
              type="date"
              placeholder="Enter the DOB"
              id="dob"
              className="w-2/3 px-4 py-1 bg-inherit border-b-2 border-gray-400 focus:outline-none ml-5"
              required
            />
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <button
            className="flex h-9 w-52 rounded-lg bg-bold-blue text-white justify-center items-center font-semibold cursor-pointer"
            onClick={issuePanCard}
          >
            Get Document
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pancard_form
