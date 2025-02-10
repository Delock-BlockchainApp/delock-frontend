import React from 'react'

interface CardProps {
    title: string;
    description: string;
    Authority: string;
}

const Card_component1: React.FC<CardProps> = ({ title, description, Authority }) => {
    return (
        <div className='flex  items-center rounded-xl bg-white p-2 w-[250px] h-[100px] mt-8 shadow-md'>



            <div className=' bg-[#D9D9D9] w-[80px] h-[80px] rounded-[10px] flex justify-center items-center'>
                {/* <img src="https://cdn-icons-png.flaticon.com/512/1250/1250614.png" alt="icon" className='w-16 h-16' /> */}

            </div>
            <div className='ml-2'>
                <div className=' font-poppins text-[12px] '> {title}</div>
                <div className=' font-poppins text-[12px] w-7 bg'>{description}</div>
                <div className=' font-poppins  mt-2 text-sm w-28 '>{Authority}</div>
            </div>



        </div>





    )
}

export default Card_component1
