interface YourDocsCard2Props {
    Name: string;
    Number:number;

}

const yourdocs_card2 = (props: YourDocsCard2Props) => {
    return (
        <div className=' flex  justify-center items-center rounded-xl bg-white pt-0 w-64 h-16 mt-5 ml-5  border font-poppins text-base font-semibold' style={{
            borderColor: '#004182',
            borderWidth: '1px',
            boxShadow: '8px 8px 0px  #004182',
        }}>

            <div>{props.Name}</div>
            <div className="relative top-[-14px] right-[-20px] w-5 h-5 rounded-full bg-white border-2 border-[#004182] flex items-center justify-center text-xs font-bold">
                {props.Number}
            </div>

        </div>
    )
}

export default yourdocs_card2
