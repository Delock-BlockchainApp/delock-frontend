
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import { ethers } from "ethers"
import { get } from 'http';
import toast from 'react-hot-toast';


function Pdf() {

  const contractAddress ='0x05fea84b196cf471b5f2ec2e0c43a18ea655fa91'; //'0x05310f8a9b7650609ed3f782bade8244146b56a8';// '0x9fff151c3efb029f4c4d3424d08e252eade085ba';
  const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "docId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "name": "DocumentIssued",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "DocumentRequested",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_ipfsHash",
          "type": "string"
        }
      ],
      "name": "issueDocument",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        }
      ],
      "name": "registerUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "email",
          "type": "string"
        }
      ],
      "name": "UserRegistered",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "documentCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "documents",
      "outputs": [
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_docIds",
          "type": "uint256[]"
        }
      ],
      "name": "getAccessibleDocuments",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllRegisteredUsers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_docId",
          "type": "uint256"
        }
      ],
      "name": "getDocumentDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOwnUserDocuments",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUserDocuments",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isRegistered",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "registeredUsers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "superAdmin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  // const contractABI = [
  //   {
  //     "inputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "constructor"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "uint256",
  //         "name": "docId",
  //         "type": "uint256"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "user",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "string",
  //         "name": "ipfsHash",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "DocumentIssued",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "user",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "DocumentRequested",
  //     "type": "event"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "_user",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "_ipfsHash",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "issueDocument",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "string",
  //         "name": "_name",
  //         "type": "string"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "_email",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "registerUser",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "user",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "string",
  //         "name": "name",
  //         "type": "string"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "string",
  //         "name": "email",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "UserRegistered",
  //     "type": "event"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "documentCount",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "documents",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "ipfsHash",
  //         "type": "string"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "owner",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256[]",
  //         "name": "_docIds",
  //         "type": "uint256[]"
  //       }
  //     ],
  //     "name": "getAccessibleDocuments",
  //     "outputs": [
  //       {
  //         "internalType": "string[]",
  //         "name": "",
  //         "type": "string[]"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "getAllRegisteredUsers",
  //     "outputs": [
  //       {
  //         "internalType": "address[]",
  //         "name": "",
  //         "type": "address[]"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_docId",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "getDocumentDetails",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "_user",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "getUserDocuments",
  //     "outputs": [
  //       {
  //         "internalType": "uint256[]",
  //         "name": "",
  //         "type": "uint256[]"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "isRegistered",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "registeredUsers",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "superAdmin",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "users",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "name",
  //         "type": "string"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "email",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   }
  // ];

  const [account, setAccount] = useState('0x3737f81B2C14Bb40f8a46b74d2a89B5a459471C0');
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  function connectBlockchain() {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner();
      const deployedContract = new ethers.Contract(contractAddress, contractABI, signer);
       setContract(deployedContract);
      console.log('Contract connected:', deployedContract);

    }
  



 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div id="card" className="bg-red-500 shadow-md rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">ID Card</h2>
        <p className="mb-2"><span className="font-semibold">Name:</span> John Doe</p>
        <p className="mb-2"><span className="font-semibold">Date of Birth:</span> 1995-01-01</p>
        <p className="mb-2"><span className="font-semibold">Address:</span> 123 Main Street</p>
        <p className="mb-2"><span className="font-semibold">Father's Name:</span> Richard Doe</p>
      </div>
      <input
        type='text'
        onChange={(e) => setAccount(e.target.value)}
        placeholder='Enter your Ethereum address'
        className="mt-6 border border-gray-300 rounded p-2"
      />
      <button
      onClick={getOwnUserDocumentsByAccount()}
      className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Get User Documents
    </button>
      <button
        onClick={async () => {
          await connectBlockchain();
           registerUser();
        }}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        connectBlockchain
      </button>
      <button
        onClick={async () => {
          console.log('Registering user...');
          await generatePdfAndGetIpfsHash();
        }}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Generate PDF & Upload
      </button>
    </div>
  )

  async function generatePdfAndGetIpfsHash() {
    console.log('Generating PDF and uploading to IPFS...');
    const card = document.getElementById('card');
    if (card) {
      try {
        // Convert card to canvas
        const canvas = await html2canvas(card);
        const imgData = canvas.toDataURL('image/png');

        // Generate PDF
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10);
        const pdfBlob = pdf.output('blob'); // Get PDF as a Blob

        // Create FormData for upload
        const formData = new FormData();
        formData.append('file', pdfBlob, 'id_card1.pdf');

        // Pinata API URL
        const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

        // API Key, Secret Key, and JWT (use one for authentication)
        const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0NTg2ZmI3OC02OTgzLTRhODQtODNmMC00ZDZhY2JhMTMzZmEiLCJlbWFpbCI6ImNobjIxY3MwMjFAY2Vjb25saW5lLmVkdSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5Zjk3NjI4NGYyZDVlN2E3YzJiYSIsInNjb3BlZEtleVNlY3JldCI6ImEyYTNkMjA1MWFiMjY4NTIxOThjZWMzNGY5YjZhZTU3MTBlZWNmZmZlNTBhNWZjODQ4NzUwNzcwM2MwNWIxMWMiLCJleHAiOjE3NjY0MDEwMDR9.ai9QwNnoLmQVWapRBfgf63yKxXxgQqmEZuWq-TWNiCQ'; // Replace with your JWT token

        // Upload to Pinata
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${jwtToken}`, // Add your JWT token here
          },
        });

        const result = await response.json();
        if (response.ok) {
          console.log('PDF pinned to IPFS:', result);
          toast.success(`Upload successful! IPFS Hash: ${result.IpfsHash}`);
        } else {
          console.error('Pinata API error:', result);
          toast.error('Failed to upload to Pinata. Check console for details.');
        }
      } catch (error) {
        console.error('Error generating PDF or uploading to Pinata:', error);
        toast.error('An error occurred. Please check the console for details.');
      }
    } else {
      console.error('Card element not found!');
      toast.error('Card element not found!');
    }
  }

  function registerUser() {
    return async () => {
      if (contract) {
        try {
          const tx = await contract.registerUser('John Doe', 'john@gmail.com');
          await tx.wait();
          console.log('User registered:', tx);
        } catch (error) {
          console.error('Error registering user:', error);
        }
      }
      else {
        console.error('Contract not connected!');
        toast.error('Contract not connected!');
      }
    }
  }

  function issueDocuments() {
    return async () => {
      if (contract) {
        try {
          const tx = await contract.issueDocument(account, 'ipfsHash');
          await tx.wait();
          console.log('Document issued:', tx);
        } catch (error) {
          console.error('Error issuing document:', error);
        }
      }
      else {

      }
    }}
    function getUserDocumentsByAccount(user: string) {
      return async () => {
        console.log('Getting user documents...');
        if (contract) {
          console.log('Contract connected:');
          try {
            const docs = await contract.getUserDocuments(user);
            console.log('User documents:', docs);
            getAccessibleDocuments(docs);
          } catch (error) {
            console.error('Error getting user documents:', error);
          }
        }
        else {
          console.error('Contract not connected!');
          toast.error('Contract not connected!');
        }
      };
    }
    function getOwnUserDocumentsByAccount() {
      return async () => {
        console.log('Getting user documents...');
        if (contract) {
          console.log('Contract connected:');
          try {
            const docs = await contract.getOwnUserDocuments();
            console.log('User documents:', docs);
            getAccessibleDocuments(docs);
          } catch (error) {
            console.error('Error getting user documents:', error);
          }
        }
        else {
          console.error('Contract not connected!');
          toast.error('Contract not connected!');
        }
      };
    }
    function getAccessibleDocuments( docIds: number[]) {
      return async () => {
        console.log('Getting accessible documents...');
        if (contract) {
          console.log('Contract connected:');
          try {
            const docs = await contract.getAccessibleDocuments([1]);
            console.log('Accessible documents:', docs);
          } catch (error) {
            console.error('Error getting accessible documents:', error);
          }
        }
        else {
          console.error('Contract not connected!');
          toast.error('Contract not connected!');
        }
      };
    }
  
}





export default Pdf



