import { useState, useEffect } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Check if MetaMask is installed
  const checkMetaMaskInstalled = () => {
    return typeof (window as any).ethereum !== "undefined";
  };

  // Connect to MetaMask
  const connectWallet = async () => {
    if (!checkMetaMaskInstalled()) {
      toast.error("MetaMask is not installed. Please install it to use this dApp!");
      return;
    }

    try {
      // Request account access
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]); // Set wallet address
      setIsConnected(true); // Set connection status
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      toast.error("Could not connect to MetaMask!");
    }
  };

  // Disconnect Wallet
  const disconnectWallet = () => {
    setWalletAddress(null);
    setIsConnected(false);
  };

  // Detect account change
  useEffect(() => {
    if (checkMetaMaskInstalled()) {
      (window as any).ethereum.on("accountsChanged", (accounts: string | any[]) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          disconnectWallet();
        }
      });
    }
  }, []);

  return (
    <div className="App" style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Document Manager DApp</h1>
      {!isConnected ? (
        <button
          onClick={connectWallet}
          style={{
            padding: "1rem 2rem",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p>Connected Wallet: {walletAddress}</p>
          <button
            onClick={disconnectWallet}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
