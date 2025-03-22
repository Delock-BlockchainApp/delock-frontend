// import React from 'react'
import TextComponent from '../components/TextComponent'
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { useBlockchain } from "../context/BlockchainContext";


const Login = () => {

	const { connectWallet, account } = useBlockchain();

  const handleConnect = async () => {
    await connectWallet();
  };
	return (

		<div>
			<div className="pl-4 pt-4 font-poppins">
				<TextComponent text="Delock" fontSize="30px " />
			</div>

			<div className='flex justify-center items-center h-[600px] font-poppins'>
				<div className="justify-center items-center">

					<div className='flex justify-center items-center '>
						<TextComponent text="Login" fontSize="75px" />
					</div>


					<p className='flex justify-center mt-5 mb-10 font-poppins'>Hey connect your wallet account</p>
					<div className='flex flex-col'>

					
						<button onClick={handleConnect}  className="text-white font-bold py-2 w-96 rounded-lg mt-8 bg-dark-blue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 h-[40px]">
							Connect Wallet
						</button>
					</div>
				



					<div className='flex justify-center mt-5'>
					<p className='flex justify-center gap-x-2 font-poppins '>Don&apos;t have an account <a href='/signup' className= 'text-[#004182] font-bold '>Signup Now</a></p>
					</div>

				</div>
				
			</div>
			
		</div>
	
		

	)
}

export default Login
