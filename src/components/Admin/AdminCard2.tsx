import { useNavigate } from "react-router-dom";
interface Data {
    document_name: string;
    document_id: string;
}

const AdminCard2 = ({ data }: { data: Data }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('documents/upload', { state: data });
    }
    return (
        <div onClick={handleNavigate} className="flex justify-center items-center rounded-lg bg-white p-5 w-56 h-[60px] mt-5 border font-poppins text-[13px] font-semibold shadow-md border-dark-blue cursor-pointer ">
        
            <div>{data.document_name}</div>

        </div>
    )
}

export default AdminCard2