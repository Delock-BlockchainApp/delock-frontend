import React from 'react'

interface CardProps {
    title: string;
    description: string;
    Authority: string;
}

const Card_component4: React.FC<CardProps> = () => {
    return (
        <div className='flex flex-col  items-center rounded-xl bg-white p-2 w-[120px] h-[150px] mt-8 mr-8  [box-shadow:4px_4px_10px_rgba(0,0,0,0.2)]'>



            <div className=' bg-[#D9D9D9] w-[100px] h-[80px] rounded-[10px]   ml-1'>
                {/* <img src="https://cdn-icons-png.flaticon.com/512/1250/1250614.png" alt="icon" className='w-16 h-16' /> */}

            </div> 
            <div className="flex flex-col items-center mt-5">
                <span className="text-xs font-poppins font-semibold text-center">
                    APJ Abdul Kalam  Technical University
                </span>
                <span className="text-xs font-poppins text-gray-500 mt-1">
                    Kerala
                </span>
            </div>
           
            
           
        
           


        </div>





    )
}

export default Card_component4
