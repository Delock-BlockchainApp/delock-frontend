
import axios from 'axios';
import uploading from '../assets/uploading.gif'
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function Pancard_form() {
// ABI of the DeLock contract
const CONTRACT_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "departmentCode",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "admin",
				"type": "address"
			}
		],
		"name": "AdminAssigned",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "departmentCode",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "admin",
				"type": "address"
			}
		],
		"name": "AdminRevoked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "deptCode",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "assignAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "admin",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "deptCode",
				"type": "string"
			}
		],
		"name": "createDepartment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "departmentId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "admin",
				"type": "address"
			}
		],
		"name": "DepartmentCreated",
		"type": "event"
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
			},
			{
				"internalType": "string",
				"name": "deptCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "docCode",
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
		"inputs": [
			{
				"internalType": "string",
				"name": "deptCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "docCode",
				"type": "string"
			}
		],
		"name": "requestDocument",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "deptCode",
				"type": "string"
			}
		],
		"name": "revokeAdmin",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "admins",
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
		"name": "adminToDepartment",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "departmentCount",
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
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "departmentDocs",
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
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "departments",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "admin",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
				"internalType": "string",
				"name": "deptCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "docCode",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isRequested",
				"type": "bool"
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
		"inputs": [],
		"name": "getAllAdminsAndDepartmentId",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
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
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOwnDepartmentDocs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "ipfsHash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deptCode",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "docCode",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isRequested",
						"type": "bool"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"internalType": "struct DeLock.Document[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRequestedDocuments",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "ipfsHash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deptCode",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "docCode",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isRequested",
						"type": "bool"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"internalType": "struct DeLock.Document[]",
				"name": "",
				"type": "tuple[]"
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
		"inputs": [],
		"name": "isAdmin",
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

const CONTRACT_ADDRESS = "0xeDAf6a14d0E33F2351A7acA4527611530E730c1e";

  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [account, setAccount] = useState<string | null>(null);


  const [isLoading,setLoading]=useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      if ((window as any).ethereum) {
        const web3Provider = new ethers.providers.Web3Provider((window as any).ethereum);
        setProvider(web3Provider);

        await web3Provider.send("eth_requestAccounts", []);
        const signer = web3Provider.getSigner();
        setSigner(signer);

        const userAccount = await signer.getAddress();
        setAccount(userAccount);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        setContract(contract);

      } else {
        alert("Please install MetaMask!");
      }
    };

    init();
  }, []);



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
      issueDocument(
        (document.getElementById("userAddress") as HTMLInputElement).value,
        response.data.IpfsHash,
        "itd", 
        "pan" 
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
