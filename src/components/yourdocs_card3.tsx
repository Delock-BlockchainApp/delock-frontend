import React from 'react'

interface YourDocsCard3Props {
    title: string;
    authority: string;
}

const yourdocs_card3: React.FC<YourDocsCard3Props> = ({ title,authority }) => {
    return (
        <div className='rounded-xl bg-white p-2 w-[8em] h-[10em]  mr-5 [box-shadow:4px_4px_4px_rgba(0,0,0,0.2)] cursor-pointer'>
            <div className='flex  '>
                <div className=' w-[7em] h-[5.33em] rounded-xl flex justify-center items-center border-2 border-gray-500'>
                    <img  className="h-16 w-20" src="https://cdn-icons-png.flaticon.com/512/1250/1250614.png" alt="icon" />
                </div>
            </div>
            
                <div className='font-poppins mt-2 h-9 text-sm line-clamp-2 overflow-ellipsis'>
                    {title}
                </div>
        
           
            <div className=' font-poppins  text-xs text-black/80 '>{authority}</div>
        </div>
    )
}

export default yourdocs_card3
