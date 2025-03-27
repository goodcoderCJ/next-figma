"use client"

import Link from "next/link";
import { useState } from "react";
import {FaCircleDot, FaUserGroup,FaRegHeart, FaGroupArrowsRotate, FaBook, FaRegFaceGrinHearts} from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { CiBadgeDollar } from "react-icons/ci";
import Image from "next/image";


const Sidebar = () => {
    
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", path: "/" ,icon: <FaCircleDot/>},
    { name: "My Profile", path: "/profile", icon: <FaUserGroup/> },
    { name: "Favorites", path: "/favorites", icon: <FaRegHeart/>},
    { name: "My Mutuals", path: "/mutuals" , icon: <FaGroupArrowsRotate/>},
    { name: "My Subscribed", path: "/subscribed", icon: <FaBook/>},
    { name: "Interested in me", path: "/interested",icon: <FaRegFaceGrinHearts/> },
    { name: "Settings", path: "/settings", icon: <CiBadgeDollar/> },
    { name: "Logout", path: "/logout" , icon: <AiOutlineLogout/>},
  ];

  return (
    <div className="w-[20%] fixed top-0 left-0 h-screen bg-white shadow-md p-4 flex flex-col z-[1000] transition-all duration-300">
      <div className="flex-1 overflow-y-clip min-h-screen ">
      <div className="sidebar-profile-pix flex items-center justify-center mt-[0.9rem]">
        <Image src="/travel-agent2.png" alt="profile-pix" width={60} height={60} className="rounded-full"/>
      </div>
      <h2 className="text-center font-bold text-[1.2rem] mt-2 mb-6">Temiloluwa</h2>

      {menuItems.map((item) => (
        <Link key={item.name} href={item.path}>
          <button
            onClick={() => setActive(item.name)}
            className={` flex gap-3 items-center py-2 px-4 rounded-md mb-2 ${
              active === item.name ? "bg-red-500 text-white" : "text-gray-700"
            }`}
          >
            <p className="0.7rem">{item.icon}</p>
            <p className="0.8rem">{item.name}</p>
          </button>
        </Link>
      ))}
      </div>
      
    </div>
  );
};

export default Sidebar;