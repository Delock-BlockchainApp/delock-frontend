interface Card_component2Props {
    Name: string;
   

}

const Card_component2 = (props: Card_component2Props) => {
    return (
        <div className="flex justify-center items-center rounded-xl bg-white pt-0 w-[169.57px] h-[60px] mt-4  border font-poppins text-[13px] font-semibold shadow-md"
        style={{
          borderColor: '#004182',
          borderWidth: '1px',
          boxShadow: '4px 4px 10px rgba(0,0,0,0.4), 1px 1px 4px rgba(128,128,128,0.5)',
        }}>
        

            <div>{props.Name}</div>
            {/* <div className="relative top-[-14px] right-[-20px] w-5 h-5 rounded-full bg-white border-2 border-[#004182] flex items-center justify-center text-xs font-bold">
                {props.Number}
            </div> */}

        </div>
    )
}

export default Card_component2
