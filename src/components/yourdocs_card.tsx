import React from 'react'

interface YourDocsCardProps {
    title: string;
    description: string;
    Authority: string;
}

const yourdocs_card: React.FC<YourDocsCardProps> = ({ title, description, Authority }) => {
    return (
       
    

    
        <div className='md:w-5/6 flex justify-between rounded-xl bg-white pt-1 xl:w-2/3 h-14 mt-5 ml-5 [box-shadow:4px_4px_10px_rgba(0,0,0,0.2)]'>
            <div className=' ml-5'>
                <div className=' font-poppins ml-4  text-base mt-1 pb-0 sm:text-sm'> {title}</div>


                <div className=' font-poppins ml-4 mt-0 pt-0 sm:text-sm '>{description}</div>
            </div>
            <div className='w-1/2 flex justify-center items-center font-poppins visible text-sm opacity-50 max-md:hidden'>
                {Authority}
            </div>
            <div className=' flex justify-center items-center font-poppins  text-sm'>
                <div className='flex flex-col justify-center items-center '>

                    <i className="fa-solid fa-up-right-from-square text-xl " style={{ color: '#022A51' }}></i>
                    <div className='font-poppins   ' style={{ color: '#022A51' }}>
                        Preview
                    </div>
                </div>
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
