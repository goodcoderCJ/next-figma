import Image from "next/image";
import { FaFilter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { HiMiniBellAlert } from "react-icons/hi2";


const Navbar = () => {
    return (
      <nav className="flex  items-center  shadow-md h-24">
        <div className="logo flex flex-col sm:flex-row md:flex-row items-center justify-around   shadow-md z-[999] h-24 px-2">
        <Image src="/3c-logo.png" width={40} height={20} alt="logo"/>
        <h1 className="text-xl font-bold">Chuly</h1>
        </div>
        
        <div className="flex gap-4 flex-1 justify-between px-[3rem]">
          <div className="second-col flex gap-2">
            <div className="search flex items-center border px-3 py-1 rounded-[20px] border-gray-600 gap-2 text-[0.9rem]">
              <CiSearch className="text-gray-800"/>
            <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-0 border-0"
          />
            </div>
            <div className="filter flex items-center border px-3 py-1 rounded-[20px] border-gray-600 gap-2 text-[0.6rem]">
              <FaFilter className="text-gray-800"/>
              <button className="flex-1">Filter</button>

            </div>
                    </div>
          <div className="third-col flex gap-2 items-center">
          <HiMiniBellAlert className=" text-red-700 text-[1.3rem] "/>
          <Image src="/travel-agent2.png" height={40} width={40} alt="header profile pix" className="rounded-full"/>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;