interface Card_component2Props {
    Name: string;
   

}

const Card_component2 = (props: Card_component2Props) => {
    return (
        <div className="flex justify-center items-center rounded-lg bg-white p-5 w-56 h-[60px] mt-5 border font-poppins text-[13px] font-semibold shadow-md border-dark-blue ">
        
            <div>{props.Name}</div>

        </div>
    )
}

export default Card_component2
