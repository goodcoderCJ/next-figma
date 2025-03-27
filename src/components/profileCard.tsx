"use client";

import Image from "next/image";
import { FaHeart,FaRegHeart } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProfileCardProps {
    name: string;
    age: number;
    location: string;
    match: number;
    image: string;
    profile:string
    verified: boolean
  }
  
  const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, location, match, image, profile, verified}) => {
   
   const [active,setActive] = useState(false)
   const toggleHeart = ()=>{
    return setActive((prev)=> !prev)
   }

    const router = useRouter();
   
    return (
      <div className="rounded-lg  shadow-md grid grid-cols-[10%_25%_5%_20%_5%_12.5%_12.5%_10%] grid-rows-[24%_6%_4%_8%_8%_4%_20%_9%_12%_5%] pb-[1rem] mb-[1rem]">
        <Image src={image} alt={name} width={300} height={100} className=" object-cover rounded-t-md col-start-1 col-end-9 row-start-1 row-end-3" />
        
        {/* second-layer first division */}
          <div className="flex flex-col gap-1 col-start-2 col-end-3 row-start-5 row-end-6 justify-center ">
          <h2 className="text-gray-500 font-bold mt-2 text-[8px]">{name}, {age}</h2>
          <p className="text-gray-500 text-[8px] font-bold">{location}</p>
          </div>
        
        {/* profile image */}
        <Image src={profile} width={60} height={60} alt="profile image" className="rounded-full border border-white col-start-4 col-end-5 row-start-2 row-end-3"/>
        
        {/* second-layer second-division */}
        <div className="flex flex-col gap-1 col-start-6 col-end-8 row-start-5 row-end-6 justify-center ">
        <p className="text-gray-500 text-[8px] font-bold">{match}% Match</p>
        {verified && <p className="text-gray-500 text-[5px] font-bold">✔ Verified Address</p>}
        </div>
        
        {/* placeholder text */}
        <div className="para mt-[1rem] col-start-2 col-end-8 row-start-6 row-end-9 ">
          <p className="text-[0.6rem]">Lorem ipsum dolor illium  lorem more lorem more lorem lorem lorem lorem lorem lorem Assumenda sint omnis ad deleniti, obcaecati sapiente labore eum consectetur odio asperior</p>
        </div>


        
        
        <div className="col-start-2 col-end-8 row-start-9 row-end-11 flex justify-between items-center  py-[0.5rem]">
        {verified ? <button className="bg-green-700 text-white px-4 py-1 mt-2 rounded-[20px] cursor-pointer" onClick={()=>router.push("/profile")} >More Info</button> : <button className="bg-red-700 text-white px-4 py-1 mt-2 rounded-[20px] cursor-pointer" onClick={()=>router.push("/profile")}>More Info</button>}
        <button onClick={toggleHeart}>{active ? <FaHeart className="text-red-700"/> : <FaRegHeart className="text-gray-800"/> }</button>
        
        </div>
        
        
        
        
      </div>
    );
  };
  
  export default ProfileCard;