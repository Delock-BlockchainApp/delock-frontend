import { useState } from "react";
import TextComponent from "../components/TextComponent";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useBlockchain } from "../context/BlockchainContext";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
const navigate = useNavigate();
  const { contract, connectWallet,account } = useBlockchain();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleConnect = async () => {
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in both fields.");
      return;
    }

    try {
      await connectWallet();
      await registerUser(name, email);
    } catch (error) {
      console.error(error);
      toast.error("Error connecting wallet.");
    }
  };

  const registerUser = async (name: string, email: string) => {
    if (!contract) {
      toast.error("MetaMask not connected!.");
      return;
    }

    try {
      const tx = await contract.registerUser(name, email);
      await tx.wait();
    } catch (error) {
      console.error(error);
      if (error && (error as any).data?.data) {
        toast.custom((t) => (
                <div
                  className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                  } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                  <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          You already have an account!
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Click <span 
                            onClick={() => {
                              toast.dismiss(t.id);
                              navigate('/signin');
                            }}
                            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
                          >
                            here
                          </span> to login.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-l border-gray-200">
                    <button
                      onClick={() => toast.dismiss(t.id)}
                      className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ));
        } else {
        console.error(error);
        toast.error("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <Toaster  position="top-right"/>
      <div className="pl-4 pt-4 font-poppins">
        <TextComponent text="Delock" fontSize="30px " />
      </div>
      <div className="flex justify-center items-center h-[600px] font-poppins">
        <div className="justify-center items-center">
          <div className="flex justify-center items-center ">
            <TextComponent text="Signup" fontSize="75px" />
          </div>
          <p className="flex justify-center mt-5 mb-10">
            Hey enter your details to sign up to your account{" "}
          </p>
          <div className="flex flex-col">
            {/* Name Input */}
            <div className="border-2 border-gray-500 rounded-lg h-[50px] flex items-center">
              <i className="fas fa-user ml-4 text-gray-500"></i>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="focus:outline-none focus:ring-0 w-80 ml-2"
              />
            </div>
            {/* Email Input */}
            <div className="border-2 border-gray-500 rounded-lg mt-7 h-[50px] flex items-center">
              <i className="fas fa-at ml-4 text-gray-500"></i>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:outline-none focus:ring-0 w-80 ml-2"
              />
            </div>
            {/* Signup Button */}
            <button
              onClick={handleConnect}
              className="bg-dark-blue text-white font-bold py-2 w-40 rounded-lg mt-8 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 h-[40px]"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
      <p className="flex justify-center gap-x-2 font-poppins">
        Go back to the{" "}
        <a href="/" className="text-blue-500">
          home page
        </a>
      </p>
    </div>
  );
};

export default Signup;
