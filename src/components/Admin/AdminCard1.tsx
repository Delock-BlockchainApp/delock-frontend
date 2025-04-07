interface Card_component3Props {
    Name: string;
    Number: number;
}

const AdminCard1 = (props: Card_component3Props) => {
   
    return (
        <div className='flex flex-col justify-center items-center rounded-xl bg-white p-2 w-64 h-16 ml-2 mb-4 ' style={{
            borderColor: '#004182',
            borderWidth: '1px',
            boxShadow: '6px 6px 0px  #004182',
        }}>
        <div className="text-3xl font-semibold">{props.Number}</div>
         <div className="text-sm font-semibold -mt-2">{props.Name}</div>
           
        </div>

    )
}

export default AdminCard1
