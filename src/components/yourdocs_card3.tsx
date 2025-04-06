import React from 'react'
import { useNavigate } from 'react-router-dom';
import { userIpfsCredentials } from '../recoil';
import { useRecoilValue } from 'recoil';
import toast from 'react-hot-toast';

interface CardProps {
    data: Record<string, any>;
}

const YourdocsCard4: React.FC<CardProps> = ({ data }) => {
     const credentials = useRecoilValue(userIpfsCredentials);
  const HandleFileView= () => {
    if(!credentials?.domain ){
        toast.error("Please set your IPFS credentials in the settings page.");
        return;
    }
    window.open(`https://${credentials?.domain}/ipfs/${data?.document_hash}`, '_blank');
    
  }
    return (
        <div onClick={HandleFileView} className='flex flex-col rounded-xl bg-white p-2 w-[120px] h-[150px] mt-5 mr-8  [box-shadow:4px_4px_10px_rgba(0,0,0,0.2)] cursor-pointer '>



            <div className=' w-[100px] h-[75px] rounded-[10px]  flex items-center justify-center border-2 border-gray-500'>
                <img src="https://cdn-icons-png.flaticon.com/512/1250/1250614.png" alt="icon" className='w-16 h-14' />

            </div> 
            <div className=" relative flex flex-col mt-2">
                <span className="absolute text-xs font-poppins font-semibold ">
                    {data?.document_name}
                </span>
                <span className=" absolute text-xs font-poppins text-gray-500 mt-9">
                    {data?.created_at}
                </span>
            </div>
           
        </div>

    )
}

export default YourdocsCard4
