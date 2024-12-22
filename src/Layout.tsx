import { Outlet } from "react-router-dom";
import logo from "./assets/logo.svg";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Layout() {

    const navOptions = [
        { name: 'Overview', icon: 'bi bi-pie-chart-fill' },
        { name: 'Documents', icon: 'bi bi-grid-fill' },
        { name: 'Your Docs', icon: 'bi bi-app-indicator' },
        { name: 'Settings', icon: 'bi bi-gear-fill' }
      ];
  return (
    <div className="h-screen bg-bold-blue py-2 pr-2 flex">
        {/* ///////////////////////NAVBAR SECTION////////////////////// */}
            <div className="w-[250px] text-white ">
                {/* logo section */}
                <div className="flex mt-5 justify-center gap-7 items-center"><img src={logo} alt="logo" /><h1 className="text-[30px] font-semibold">Delock</h1></div>
                {/* nav section */}
                <div className="mt-10 px-3 flex flex-col ">
                    {navOptions.map((option, index) => (
                    <div
                    key={index}
                    className="h-14 w-full flex items-center gap-5 rounded-lg mb-10 hover:bg-gray-200 cursor-pointer group">
                    {/* Icon */}
                    <i className={`${option.icon} ml-4 text-[30px] group-hover:text-bold-blue transition-colors duration-300 `}></i>
                    {/* Text */}
                    <h1 className="text-white text-xl font-semibold group-hover:text-bold-blue transition-colors duration-300 ">{option.name}</h1>
                    </div>))}
                    {/* Logout */}
                    <div className="h-14 flex items-center gap-5 rounded-lg mt-28 hover:bg-gray-200 cursor-pointer group">
                    <i className={` text-[#B22626] bi bi-arrow-left-square-fill ml-4 text-[30px] group-hover:text-bold-blue transition-colors duration-300 `}></i>
                    <h1 className="text-xl font-semibold group-hover:text-[#B22626] transition-colors duration-300 ">Logout</h1>
                    </div> 
                </div>

            </div>
            {/*///////////////////////////PAGE SECTION///////////////////////////  */}
            <div className="w-full bg-gray-100 rounded-lg">
                <Outlet />
            </div>
      
    </div>
  )
}

export default Layout
