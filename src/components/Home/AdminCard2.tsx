import { useNavigate } from "react-router-dom";

interface Card_component2Props {
    Name: string;

}

const AdminCard2 = (props: Card_component2Props) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('upload')
    }
    return (
        <div onClick={handleNavigate} className="flex justify-center items-center rounded-lg bg-white p-5 w-56 h-[60px] mt-5 border font-poppins text-[13px] font-semibold shadow-md border-dark-blue cursor-pointer ">
        
            <div>{props.Name}</div>

        </div>
    )
}

export default AdminCard2