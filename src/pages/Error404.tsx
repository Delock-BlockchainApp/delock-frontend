import error from '../assets/error404.svg';
function Error404() {
  return (
    <div className="h-screen">
        <div className='text-3xl font-semibold text-dark-blue p-3 pl-5'>Delock</div>
        <div className='flex pw-full h-[600px] '>
            <img className='-mt-16 z-0' src={error} alt="Error not found" />
            <h1 className='text-[400px] text-dark-blue font-extrabold -ml-80 -z-10'>404!</h1>
        </div>
        <div className='flex gap-1 -mt-16 justify-center'><p>Go back to the</p><h1 className='text-dark-blue font-semibold'><a href="/">home page</a></h1></div>
    

    </div>
  )
}

export default Error404
