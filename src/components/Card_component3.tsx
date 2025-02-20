interface Card_component3Props {
    Name: string;


}

const Card_component3 = (props: Card_component3Props) => {
    return (
        <div className="flex flex-col  items-center">
            <div className="flex justify-center items-center rounded-full bg-white pt-0 w-[80px] h-[80px] mt-4  border  shadow-md">
            </div>  
            <div className="text-xs justify-center w-[100px] mt-2 text-[13px] font-semibold font-poppins text-center">{props.Name}</div>

        </div>







    )
}

export default Card_component3
