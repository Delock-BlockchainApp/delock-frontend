// src/App.tsx
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";


// ABI of the DeLock contract
const CONTRACT_ABI =[
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



const App: React.FC = () => {
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
    const [signer, setSigner] = useState<ethers.Signer | null>(null);
    const [contract, setContract] = useState<ethers.Contract | null>(null);
    const [account, setAccount] = useState<string | null>(null);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [documents, setDocuments] = useState<any[]>([]);
	const [departmentAndAdmin, setDepartmentAndAdmin] = useState<any[]>([]);
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


useEffect(() => {
    if (contract) {
        getAllAdminsAndDepartmentId();
    }
}, [contract]); // Dependency added to ensure contract is ready


    useEffect(() => {
     
          (window as any).ethereum.on("accountsChanged", (accounts: string | any[]) => {
            if (accounts.length > 0) {
              setAccount(accounts[0]);
            } else {
             
            }
          });
        
      }, []);
    // Function: Register a user
    const registerUser = async () => {
        if (!contract) return;
        try {
            const tx = await contract.registerUser(name, email);
            await tx.wait(); // Wait for transaction to be mined
            alert("User registered successfully!");
        } catch (error) {
            console.error(error);
            alert("Error during registration.");
        }
    };

    // Function: Get own documents
    const getRequestedDocuments = async () => {
        if (!contract) return;
        try {
            const docs = await contract.getRequestedDocuments();
            console.log("Own Documents:", docs);
          //  setDocuments(docs);

            // Parsing the data
            const parsedDocs = docs.map((doc: any[]) => ({
                ipfs: doc[0],  // IPFS Hash
                id: doc[1],    // Document ID
                name: doc[2],  // Document Name
                status: doc[3], // Boolean (Approved/Not)
                owner: doc[4]  // Wallet Address
            }));

            setDocuments(parsedDocs);
        } catch (error) {
            console.error(error);
            alert("Error fetching documents.");
        }
    };



    // Function: Issue a document
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

	const requestDocument =async( deptId: string, docId:string) => {
		if (!contract) return;
		try {
			const tx = await contract.requestDocument(deptId,docId);
			await tx.wait(); // Wait for transaction to be mined
			alert("Document requested successfully!");
		} catch (error) {
			console.error(error);
			alert("Error requesting document.");
		}
	}

    const createDepartment = async (deptId: number) => {
        if (!contract) return;
        try {
            const tx = await contract.createDepartment(deptId);
            await tx.wait();
            alert("Department created successfully!");
        } catch (error) {
            console.error("Error creating department:", error);
            alert("Error creating department.");
        }
    };

    const assignAdmin = async (deptId: number, adminAddress: string) => {
        if (!contract) return;
        try {
            const tx = await contract.assignAdmin(deptId, adminAddress);
            await tx.wait();
            alert("Admin assigned successfully!");
        } catch (error) {
            console.error("Error assigning admin:", error);
            alert("Error assigning admin.");
        }
    };


    const revokeAdmin = async (deptId: number, adminAddress: string) => {
        if (!contract) return;
        try {
            const tx = await contract.revokeAdmin(deptId, adminAddress);
            await tx.wait();
            alert("Admin revoked successfully!");
        } catch (error) {
            console.error("Error revoking admin:", error);
            alert("Error revoking admin.");
        }
    };


    const getUserDocumentsWithAddress = async (userAddress: string) => {
        if (!contract) return;
        try {
            const docs = await contract.getUserDocuments(userAddress);
            console.log("User Documents:", docs);
            return docs;
        } catch (error) {
            console.error("Error fetching user documents:", error);
            alert("Error fetching user documents.");
        }
    };


    const getAllRegisteredUsers = async () => {
        if (!contract) return;
        try {
            const users = await contract.getAllRegisteredUsers();
            console.log("All Registered Users:", users);
            return users;
        } catch (error) {
            console.error("Error fetching registered users:", error);
            alert("Error fetching registered users.");
        }
    };



const getAllAdminsAndDepartmentId = async () => {
    console.log("Getting all admins and department id");
    if (!contract) return;

    try {
        const users = await contract.getAllAdminsAndDepartmentId();
        console.log("All Admins and Department Id:", users);

        // Parse returned data
        const admins = users[0]; // Address array
        const departments = users[1]; // Department string array

        const parsedData = admins.map((admin: string, index: number) => ({
            admin,
            department: departments[index]
        }));

        setDepartmentAndAdmin(parsedData);
        return parsedData;
    } catch (error) {
        console.error("Error fetching all admins and department id:", error);
        alert("Error fetching all admins and department id.");
    }
};



    const getOwnDepartmentDocs = async () => {
        if (!contract) return;
        try {
            const docs = await contract.getOwnDepartmentDocs();
            console.log("Department Documents:", docs);
            return docs;
        } catch (error) {
            console.error("Error fetching department documents:", error);
            alert("Error fetching department documents.");
        }
    };


    return (
        <div className="min-h-screen bg-gray-100 p-5">
          <header className="container mx-auto text-center py-10 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">DeLock - Blockchain Document Manager</h1>
            {account ? (
              <p className="text-green-500 mb-6">Connected Account: {account}</p>
            ) : (
              <p className="text-red-500 mb-6">Please connect to MetaMask</p>
            )}
{departmentAndAdmin && departmentAndAdmin.length > 0 ? (
  <div>
    <h3 className="text-green-500 mb-4">Admins and Departments:</h3>
    <ul className="list-disc pl-5">
      {departmentAndAdmin.map((item, index) => (
        <li key={index} className="text-blue-500">
          <strong>Admin:</strong> {item.admin} <br />
          <strong>Department:</strong> {item.department}
        </li>
      ))}
    </ul>
  </div>
) : (
  <p className="text-red-500 mb-6">Please connect to MetaMask</p>
)}

            {/* Register User Section */}
            <div className="bg-gray-50 p-5 rounded-lg shadow mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Register User</h2>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded mb-3"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button
                onClick={registerUser}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Register
              </button>
            </div>
    
            {/* Fetch Own Documents Section */}
            <div className="bg-gray-50 p-5 rounded-lg shadow mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Get Own Documents</h2>
              <button
                onClick={getRequestedDocuments}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Fetch Documents
              </button>
			  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {documents.map((doc, index) => (
                <div key={index} className="p-4 border rounded-lg shadow">
                    <h3 className="text-lg font-bold">{doc.name}</h3>
                    <p><strong>ID:</strong> {doc.id}</p>
                    <p><strong>Status:</strong> {doc.status ? "Approved" : "Pending"}</p>
                    <p><strong>Owner:</strong> {doc.owner}</p>
                    <p><strong>IPFS:</strong> <span className="text-blue-600 break-all">{doc.ipfs}</span></p>
                </div>
            ))}
        </div>
            
            </div>
    
            {/* Issue Document Section */}
            <div className="bg-gray-50 p-5 rounded-lg shadow mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Issue Document</h2>
              <input
                type="text"
                placeholder="User Address"
                id="userAddress"
                className="block w-full p-2 border border-gray-300 rounded mb-3"
              />
              <input
                type="text"
                placeholder="IPFS Hash"
                id="ipfsHash"
                className="block w-full p-2 border border-gray-300 rounded mb-3"
              />
              <input
                type="text"
                placeholder="Department ID"
                id="deptId"
                className="block w-full p-2 border border-gray-300 rounded mb-4"
              />
			   <input
                type="text"
                placeholder="Doc ID"
                id="docId"
                className="block w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button
                onClick={() =>
                  issueDocument(
                    (document.getElementById("userAddress") as HTMLInputElement).value,
                    (document.getElementById("ipfsHash") as HTMLInputElement).value,
                    
                      (document.getElementById("deptId") as HTMLInputElement).value,
					  (document.getElementById("docId") as HTMLInputElement).value,
                    
                  )
                }
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Issue Document
              </button>
            </div>
    
			<div className="bg-gray-50 p-5 rounded-lg shadow mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Request Document</h2>
             
              <input
                type="text"
                placeholder="Department ID"
                id="deptIdr"
                className="block w-full p-2 border border-gray-300 rounded mb-4"
              />
			   <input
                type="text"
                placeholder="Doc ID"
                id="docIdr"
                className="block w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button
                onClick={() =>
                  requestDocument(
                 
                      (document.getElementById("deptIdr") as HTMLInputElement).value,
					  (document.getElementById("docIdr") as HTMLInputElement).value,
                    
                  )
                }
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Request Document
              </button>
            </div>
    
			

	        {/* Admin Controls */}
            <div className="bg-gray-50 p-5 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Admin Controls</h2>
              <button
                onClick={() => createDepartment(1)}
                className="bg-green-600 text-white py-2 px-4 rounded mr-2 hover:bg-green-700"
              >
                Create Department
              </button>
              <button
                onClick={() => assignAdmin(1, "0xAdminAddressHere")}
                className="bg-yellow-600 text-white py-2 px-4 rounded mr-2 hover:bg-yellow-700"
              >
                Assign Admin
              </button>
              <button
                onClick={() => revokeAdmin(1, "0xAdminAddressHere")}
                className="bg-red-600 text-white py-2 px-4 rounded mr-2 hover:bg-red-700"
              >
                Revoke Admin
              </button>
              <button
                onClick={() => getUserDocumentsWithAddress("0xUserAddressHere")}
                className="bg-blue-600 text-white py-2 px-4 rounded mr-2 hover:bg-blue-700"
              >
                Get User Documents
              </button>
              <button
                onClick={() => getAllRegisteredUsers()}
                className="bg-purple-600 text-white py-2 px-4 rounded mr-2 hover:bg-purple-700"
              >
                Get All Registered Users
              </button>
              <button
                onClick={() => getOwnDepartmentDocs()}
                className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
              >
                Get Own Department Docs
              </button>
            </div>
          </header>
        </div>
      );
    };

export default App;
