import { useNavigate } from "react-router-dom";
interface Card_component3Props {
    Name: string;


}

const Card_component3 = (props: Card_component3Props) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('issuers', { state: props.Name });
    };
    return (
        <div  onClick={handleNavigate} className="flex flex-col  items-center cursor-pointer">
            <div className="flex justify-center items-center rounded-full bg-white pt-0 w-[80px] h-[80px] mt-4  border  shadow-md">
            </div>  
            <div className="text-xs justify-center w-[100px] mt-2 text-[13px] font-semibold font-poppins text-center">{props.Name}</div>

        </div>







    )
}

export default Card_component3
