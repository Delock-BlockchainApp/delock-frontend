// import React from 'react'
import TextComponent from '../components/TextComponent'
// import '@fortawesome/fontawesome-free/css/all.min.css';


const Login = () => {
	return (

		<div >
			<div className="pl-4 pt-4 font-poppins">
				<TextComponent text="Delock" fontSize="30px " />
			</div>

			<div className='flex justify-center items-center h-[600px] font-poppins'>
				<div className="justify-center items-center">

					<div className='flex justify-center items-center '>
						<TextComponent text="Login" fontSize="75px" />
					</div>


					<p className='flex justify-center mt-5 mb-10 font-poppins'>Hey choose your wallet account</p>
					<div className='flex flex-col'>

						<div className='flex justify-center border-2 border-gray-500 rounded-lg h-[50px]'>

							{/* <i className="fas fa-user mr-4 ml-4 mt-4 mb-4 text-gray-500"></i> */}
							<input type="text" placeholder='' className="focus:outline-none focus:ring-0 w-80 mr-4 ml-4 mt-2 mb-2" />
						</div>
						{/* <div className='border-2 border-gray-500 rounded-lg mt-7 mb-2 h-[50px]'>

							<i className="fas fa-at mr-4 ml-4 mt-4 mb-4 text-gray-500"></i>
							<input type="text" placeholder='Email' className="focus:outline-none focus:ring-0 w-80" />
						</div>
						<div className='border-2 border-gray-500 rounded-lg mt-5 mb-2 h-[50px]'>

							<i className="fa-solid fa-boxes-stacked mr-4 ml-4 mt-4 mb-4 text-gray-500"></i>
							<input type="text" placeholder='Wallet account' className="focus:outline-none focus:ring-0 w-80" />
						</div>
						<button style={{ backgroundColor: '#004182' }} className="text-white font-bold py-2 w-40 rounded-lg mt-8 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 h-[40px]">
							Signup
						</button> */}
					</div>



					<div className='flex justify-center mt-5'>
					<p className='flex justify-center gap-x-2 font-poppins '>Don&apos;t have an account <a href='/Sign up' className= 'text-[#004182] font-bold '>Signup Now</a></p>
					</div>

				</div>
				
			</div>
			
		</div>

	)
}

export default Login
