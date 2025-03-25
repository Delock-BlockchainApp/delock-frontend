import React from 'react'

interface YourDocsCardProps {
    title: string;
    description: string;
    Authority: string;
    ipfs: string;
}

const yourdocs_card: React.FC<YourDocsCardProps> = ({ title, description, Authority,ipfs }) => {
    const ipfsBaseUrl ='https://salmon-left-puffin-891.mypinata.cloud/ipfs/';
    return (
       
    

    
        <div className='md:w-5/6 flex justify-between rounded-xl bg-white  xl:w-5/6 h-14 mb-5  [box-shadow:4px_4px_10px_rgba(0,0,0,0.2)]'>
            <div className=' ml-5'>
                <div className=' font-poppins ml-4  text-base mt-4 pb-0 sm:text-sm'> {title}</div>


                {/* <div className=' font-poppins ml-4 mt-0 pt-0 sm:text-sm '>{description}</div> */}
            </div>
            <div className='w-1/2 flex justify-center items-center font-poppins visible text-sm opacity-50 max-md:hidden'>
                {Authority}
            </div>
            <div className=' flex justify-center items-center font-poppins  text-sm'>
                 <a href={`${ipfsBaseUrl}${ipfs}`} target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-center '>

                    <i className="fa-solid fa-up-right-from-square text-xl text-[#022A51]"></i>
                    <div className="font-poppins text-[#022A51]">
                        Preview
                    </div>
                 </a>
                
                <div className='flex flex-col justify-center items-center ml-4 mr-8'>
                    <i className="fa-solid fa-cloud-arrow-down text-xl " style={{ color: '#022A51' }}></i>
                    <div className='font-poppins   ' style={{ color: '#022A51' }}>
                        Download
                    </div>
                </div>

            </div>

        </div>
        
        
    )
}

export default yourdocs_card
