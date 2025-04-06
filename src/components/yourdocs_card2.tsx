import { useNavigate } from "react-router-dom";

interface YourDocsCard2Props {
    Name: string;
    Number:number;
    FolderId:string;

}

const Yourdocs_card2 = (props: YourDocsCard2Props) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`${props.FolderId}`,{state:props.Name})} className=' flex relative justify-center items-center rounded-xl bg-white pt-0 w-64 h-16 mt-5 mr-5 border font-poppins text-base font-semibold cursor-pointer' style={{
            borderColor: '#004182',
            borderWidth: '1px',
            boxShadow: '6px 6px 0px  #004182',
        }}>
             {/* <div className=" absolute top-1 left-56 w-5 h-5 rounded-full bg-white border-2 border-[#004182] flex items-center justify-center text-xs font-bold">
                {props.Number}
            </div> */}
            <div>{props.Name}</div>
           
        </div>
    )
}

export default Yourdocs_card2
