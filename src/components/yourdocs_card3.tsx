import React from 'react'

interface YourDocsCard3Props {
    title: string;
}

const yourdocs_card3: React.FC<YourDocsCard3Props> = ({ title }) => {
    return (
        <div className='rounded-xl bg-white p-2 w-[8em] h-[10em]  mr-5  [box-shadow:4px_4px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex  '>
                <div className=' bg-[#D9D9D9] w-[7em] h-[5.33em] rounded-xl flex justify-center items-center'>
                </div>
            </div>
            
                <div className='font-poppins mt-2 h-9 text-sm line-clamp-2 overflow-ellipsis'>
                    {title}
                </div>
        
           
            <div className=' font-poppins  text-xs text-black/80 '>Kerala</div>
        </div>
    )
}

export default yourdocs_card3
