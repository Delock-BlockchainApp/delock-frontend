
import TextComponent from '../components/TextComponent'
import { useBlockchain } from "../context/BlockchainContext";
import { useRecoilState } from 'recoil';
import { authState } from '../recoil';
import { useNavigate } from 'react-router-dom';
import {toast,Toaster} from 'react-hot-toast';
const Login = () => {
	const { connectWallet, account,contract } = useBlockchain();
	const [auth, setAuth] = useRecoilState(authState);
	const navigate = useNavigate();
  
	const handleConnect = () => {
		connectWallet()
		  .then(() => {
			if (account) {
			  checkUserRegistration(account)
				.then((isRegistered) => {
				  if (isRegistered) {
					setAuth({ isAuthenticated: true, account });
					console.log('Login successful! Redirecting to dashboard...');
					navigate('/dashboard');
				  } else {
					toast.error('You are not registered. Please sign up.');
				  }
				})
				.catch((error) => {
				  toast.error('Failed to check registration. Please try again.');
				  console.error('Error checking user registration:', error);
				});
			}
		  })
		  .catch((error) => {
			toast.error('Login failed. Please try again.');
			console.error('Error connecting wallet:', error);
		  });
	  };

	const checkUserRegistration = async (address: string) => {
		if (!contract) {
		  toast.error('MetaMask not connected!');
		  return false;
		}
	  
		try {
		  const isRegistered = await contract.isRegistered(address);
		  return isRegistered;
		} catch (error) {
		  console.error('Error checking user registration:', error);
		  toast.error('Failed to check registration. Please try again.');
		  return false;
		}
	  };
	  
  
	return (
	  <div>
		<Toaster/>
		{/* Header Section */}
		<div className="pl-4 pt-4 font-poppins">
		  <a  className="cursor-pointer" href="/"><TextComponent text="Delock" fontSize="30px " /></a>
		</div>
  
		{/* Login Form Section */}
		<div className="flex justify-center items-center h-[600px] font-poppins">
		  <div className="justify-center items-center">
			<div className="flex justify-center items-center">
			  <TextComponent text="Login" fontSize="75px" />
			</div>
			<p className="flex justify-center mt-5 mb-10 font-poppins">
			  Hey, connect your wallet account
			</p>
  
			{/* Connect Wallet Button */}
			<div className="flex flex-col">
			  <button
				onClick={handleConnect}
				className="text-white font-bold py-2 w-96 rounded-lg mt-8 bg-dark-blue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 h-[40px]"
			  >
				Connect Wallet
			  </button>
			</div>
  
			{/* Signup Link */}
			<div className="flex justify-center mt-5">
			  <p className="flex justify-center gap-x-2 font-poppins">
				Don&apos;t have an account?{' '}
				<a href="/signup" className="text-[#004182] font-bold">
				  Signup Now
				</a>
			  </p>
			</div>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Login;