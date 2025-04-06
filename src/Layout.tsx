import { Outlet, Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Toaster } from "react-hot-toast";
import { useBlockchain } from "./context/BlockchainContext";
import toast from 'react-hot-toast';
import { useAuth } from "./context/useAuth";
function Layout() {
  const { role } = useAuth()
  const isAdmin = role === "admin";
  const UsernavOptions = [
    { name: 'Overview', icon: 'bi bi-pie-chart-fill', path: '/dashboard' },
    { name: 'Documents', icon: 'bi bi-grid-fill', path: '/dashboard/documents' },
    { name: 'Your Docs', icon: 'bi bi-app-indicator', path: '/dashboard/yourdocs' },
    { name: 'Settings', icon: 'bi bi-gear-fill', path: '/dashboard/settings' }
  ];

  const AdminNavOption=[
    { name: 'Overview', icon: 'bi bi-pie-chart-fill', path: '/dashboard' },
    { name: 'Documents', icon: 'bi bi-grid-fill', path: '/dashboard/documents' },
    { name: 'Settings', icon: 'bi bi-gear-fill', path: '/dashboard/settings' },
    { name: 'Custom Form', icon: 'bi bi-file-earmark-text-fill', path: '/dashboard/schema' }
  ]

  const { disconnectWallet } = useBlockchain();


  const handleDisconnect = () => {
    disconnectWallet();
    toast.success('Wallet disconnected successfully');
  };
  return (
    <div className="h-screen bg-bold-blue py-2 pr-2 flex">
      {/* ///////////////////////NAVBAR SECTION////////////////////// */}
      <div className="w-[300px] text-white">
        {/* Logo Section */}
        <div className="flex mt-5 justify-center gap-7 items-center">
          <img src={logo} alt="logo" />
          <h1 className="text-[30px] font-semibold">Delock</h1>
        </div>
        {/* Nav Section */}
        <div className="mt-10 px-3 flex flex-col">
          {isAdmin ? AdminNavOption.map((option, index) => (<SideBarButtton key={index} {...option} />)) : UsernavOptions.map((option, index) => (<SideBarButtton key={index} {...option} />))}
          {/* Logout */}
          <div onClick={handleDisconnect} className="h-14 flex items-center gap-5 rounded-lg mt-28 hover:bg-gray-200 cursor-pointer group">
            <i
              className={`text-[#B22626] bi bi-arrow-left-square-fill ml-4 text-[30px] group-hover:text-bold-blue transition-colors duration-300`}
            ></i>
            <h1 className="text-xl font-semibold group-hover:text-[#B22626] transition-colors duration-300">
              Logout
            </h1>
          </div>
        </div>
      </div>
      {/*///////////////////////////PAGE SECTION///////////////////////////  */}
      <div className="w-full bg-white rounded-lg">

        <Toaster />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

interface NavOption {
  name: string;
  icon: string;
  path: string;
}

const SideBarButtton = (option: NavOption, index: number) => {
  return(
    <Link
    to={option.path}
    key={index}
    className="h-14 w-full flex items-center gap-5 rounded-lg mb-10 hover:bg-gray-200 cursor-pointer group"
  >
    {/* Icon */}
    <i
      className={`${option.icon} ml-4 text-[30px] group-hover:text-bold-blue transition-colors duration-300`}
    ></i>
    {/* Text */}
    <h1 className="text-white text-xl font-semibold group-hover:text-bold-blue transition-colors duration-300">
      {option.name}
    </h1>
  </Link>
  )
}