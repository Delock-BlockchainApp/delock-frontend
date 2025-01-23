interface Card_component2Props {
    Name: string;
   

}

const Card_component2 = (props: Card_component2Props) => {
    return (
        <div className="flex justify-center items-center rounded-lg bg-white p-5 w-56 h-[60px] mt-5  border font-poppins text-[13px] font-semibold shadow-md"
        style={{
          borderColor: '#004182',
          borderWidth: '1px',
          boxShadow: '4px 4px 10px rgba(0,0,0,0.4), 1px 1px 4px rgba(128,128,128,0.5)',
        }}>
        
            <div>{props.Name}</div>

        </div>
    )
}

export default Card_component2
