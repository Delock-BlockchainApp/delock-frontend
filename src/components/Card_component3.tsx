interface Card_component3Props {
    Name: string;


}

const Card_component3 = (props: Card_component3Props) => {
    return (
        <div className="flex justify-center items-center rounded-full bg-white pt-0 w-[80px] h-[80px] mt-4  border font-poppins text-[13px] font-semibold shadow-md"
            style={{
                borderColor: '#004182',
                borderWidth: '1px',

            }}>
                  <span className="text-xs font-poppins mt-24 text-center">Kerala</span>
                  
        </div>
           



    
        
    )
}

export default Card_component3
