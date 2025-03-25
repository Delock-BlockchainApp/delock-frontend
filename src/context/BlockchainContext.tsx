import React, { createContext, useContext, useState,useEffect } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { authState } from '../recoil';

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
const CONTRACT_ADDRESS = "0x02AE560427eb6Da7f4A31B749EE2e617fA430834";
import { useRecoilState } from "recoil";

interface BlockchainContextType {
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.Signer | null;
  contract: ethers.Contract | null;
  account: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

// const abi = process.env.REACT_APP_CONTRACT_ABI;
// const address = process.env.REACT_APP_CONTRACT_ADDRESS;
// console.log('abi',abi);
// console.log('address',address);

const BlockchainContext = createContext<BlockchainContextType | undefined>(undefined);

export const BlockchainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [auth, setAuth] = useRecoilState(authState);

  // Function to connect MetaMask
  const connectWallet = async () => {
	if ((window as any).ethereum) {
	  try {
		const web3Provider = new ethers.providers.Web3Provider((window as any).ethereum);
		setProvider(web3Provider);
  
		await web3Provider.send("eth_requestAccounts", []);
		const signer = web3Provider.getSigner();
		setSigner(signer);
  
		const userAccount = await signer.getAddress();
		setAccount(userAccount); // Update address immediately
  
		const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
		setContract(contractInstance);
  
		toast.success("Wallet connected successfully!");
  
		// Listen for account changes
		(window as any).ethereum.on("accountsChanged", (accounts: string[]) => {
			console.log("MetaMask account changed.");
		  if (accounts.length > 0) {
			setAccount(accounts[0]);
		  } else {
			disconnectWallet();
		  }
		});
  
		// Listen for disconnection
		(window as any).ethereum.on("disconnect", () => {
		  console.log("MetaMask disconnected.");
		  disconnectWallet();
		});
  
	  } catch (error) {
		console.error("Failed to connect wallet:", error);
		toast.error("Failed to connect wallet.");
	  }
	} else {
	  toast.error("Please install MetaMask!");
	}
  };

  // Function to disconnect wallet
  const disconnectWallet = () => {
    setAccount(null);
    setProvider(null);
    setSigner(null);
    setContract(null);
	setAuth({ isAuthenticated: false, account: "" });
	console.log("Wallet disconnected.");

  };

  // Cleanup on unmount
  useEffect(() => {
    if ((window as any).ethereum) {
      (window as any).ethereum.on("connect", () => {
        console.log("Connected to MetaMask.");
		setAuth({ isAuthenticated: true, account: account || "" });
      });

      (window as any).ethereum.on("disconnect", () => {
        console.log("MetaMask disconnected.");
        disconnectWallet();
      });

      return () => {
        (window as any).ethereum.removeAllListeners("connect");
        (window as any).ethereum.removeAllListeners("disconnect");
      };
    }
  }, []);
  return (
    <BlockchainContext.Provider value={{ provider, signer, contract, account, connectWallet, disconnectWallet }}>
      {children}
    </BlockchainContext.Provider>
  );
};

// Custom Hook to use Blockchain Context
export const useBlockchain = () => {
  const context = useContext(BlockchainContext);
  if (!context) {
    throw new Error("useBlockchain must be used within a BlockchainProvider");
  }
  return context;
};
