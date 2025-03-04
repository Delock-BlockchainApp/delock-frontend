// import React from 'react'
import TextComponent from '../components/TextComponent'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useBlockchain } from '../context/BlockchainContext';


const Signup = () => {
  const { contract } = useBlockchain();

  const registerUser = async (name: string, email: string) => {
        if (!contract) return;
        try {
                const tx = await contract.registerUser( name, email);
                await tx.wait(); // Wait for transaction to be mined
                alert("User registered successfully!");
        } catch (error) {
                console.error(error);
                alert("Error during registration.");
        }
};


        return (

                <div >
                        <div className="pl-4 pt-4 font-poppins">
                                <TextComponent text="Delock" fontSize="30px " />
                        </div>

                        <div className='flex justify-center items-center h-[600px] font-poppins'>
                                <div className="justify-center items-center">

                                        <div className='flex justify-center items-center '>
                                                <TextComponent text="Signup" fontSize="75px" />
                                        </div>


                                        <p className='flex justify-center mt-5 mb-10 font-poppins'>Hey enter your details to sign in to your account </p>
                                        <div className='flex flex-col'>

                                                <div className='border-2 border-gray-500 rounded-lg h-[50px]'>

                                                        <i className="fas fa-user mr-4 ml-4 mt-4 mb-4 text-gray-500"></i>
                                                        <input type="text" placeholder='Full name' className="focus:outline-none focus:ring-0 w-80" />
                                                </div>
                                                <div className='border-2 border-gray-500 rounded-lg mt-7 mb-2 h-[50px]'>

                                                        <i className="fas fa-at mr-4 ml-4 mt-4 mb-4 text-gray-500"></i>
                                                        <input type="text" placeholder='Email' className="focus:outline-none focus:ring-0 w-80" />
                                                </div>
                                                {/* <div className='border-2 border-gray-500 rounded-lg mt-5 mb-2 h-[50px]'>

                                                        <i className="fa-solid fa-boxes-stacked mr-4 ml-4 mt-4 mb-4 text-gray-500"></i>
                                                        <input type="text" placeholder='Wallet account' className="focus:outline-none focus:ring-0 w-80" />
                                                </div> */}
                                                <button style={{ backgroundColor: '#004182' }}
                                                onClick={() => {
                                                        const nameInput = document.querySelector('input[placeholder="Full name"]') as HTMLInputElement;
                                                        const emailInput = document.querySelector('input[placeholder="Email"]') as HTMLInputElement;
                                                        const name = nameInput.value.trim();
                                                        const email = emailInput.value.trim();
                                                        
                                                        if (!name || !email) {
                                                                alert("Please fill in both fields.");
                                                                return;
                                                        }
                                                        
                                                        registerUser(name, email);
                                                }}
                                                className="text-white font-bold py-2 w-40 rounded-lg mt-8 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 h-[40px]">
                                                                Signup
                                                </button>
                                        </div>






                                </div>
                        </div>
                        <div >
                                <p className='flex justify-center gap-x-2 font-poppins'>Go back to the <a href='/home page' className='text-blue-500'>home page</a></p>
                        </div>
                </div>

        )
}

export default Signup