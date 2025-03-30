
import Landing from "./Landing";
import Resource from "./Resource";

function Home() {
 const options=["Features","Solutions","Developers","Resources"]
  return (
    <div className=" flex flex-col min-h-screen ">
      {/* Navbar */}
      <div className="flex w-full h-16 border-b-2 items-center justify-between top-0 sticky z-20 px-8 bg-white ">
        <div className="flex items-center"><div className="font-bold text-3xl text-dark-blue">DeLock</div>
        <div className=" ml-10 flex text-md font-light gap-5">
          {options.map((option, index) => (
            <p key={index} className="pointer cursor-pointer">{option}</p>
          ))}
        </div></div>
        <div className="flex gap-5">
          <a href="/signin"><div className="w-28 h-10 text-sm font-semibold flex items-center justify-center border-2 border-black rounded-xl cursor-pointer "> Sign In </div></a>
          <a href="/signup"><div className="w-40 h-10 text-sm font-semibold flex items-center justify-center border-2 border-[#87BCF4] rounded-xl bg-[#87BCF4] cursor-pointer peer-hover:bg-white ">Create an account</div></a>
        </div>
      </div>
    {/*Main section  */}
        <div className="w-full h-fit z-10 ">
        <Landing/>
        {/* <Features/> */}
        {/* <Resource/> */}
         
          
        </div>
    

    </div>
  );
}

export default Home;

