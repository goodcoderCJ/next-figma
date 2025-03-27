import { HiOutlinePhotograph } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { MdDirectionsBike } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";
import { GiAvoidance } from "react-icons/gi";
import { MdOutlineMuseum } from "react-icons/md";

const Profile = () => {
  return (
    <div className="mx-auto pl-24 pb-24 pr-24">
   <Link href="/">Back</Link>
      <div className="grid-container grid grid-cols-[10%_29%_35%_5%_10%_5%_5%_1%] grid-rows-[10%_30%_45%_10%_5%]">
        {/* Profile Header */}
        <div className="col-start-1 col-end-9 row-start-1 row-end-2 rounded-lg mt-4">
          <div className="flex relative">
            <Image
              src="/profile-backgd.png"
              width={500}
              height={20}
              alt="Cover"
              className="object-cover rounded-lg flex-1"
            />
          </div>
        </div>

        {/* Profile Picture and Info */}
        <div className="relative flex items-center gap-4 col-start-2 col-end-8 row-start-3 row-end-5">
          <div className="flex gap-3">
            <div className="relative ">
              <Image
                src="/travel-agent3.png"
                alt="Profile"
                width={100}
                height={80}
                className=""
              />
              <button className="absolute -bottom-2 -right-4 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                +
              </button>
            </div>
            <div className="mt-[2rem]">
              <h2 className="text-[0.7rem] font-bold">Temiloluwa, 27</h2>
              <p className="text-[0.6rem]">Lagos</p>
            </div>
          </div>

          {/*Buttons container*/}
          <div className="ml-auto mt-18 flex gap-2">
            <button className="bg-red-500 text-white text-[0.7rem] px-4 py-1 rounded-md h-10">
              Edit Profile
            </button>
            <button className="bg-red-500 text-[0.7rem] text-white px-4 py-1 rounded-md h-10">
              Edit Match Setup
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-8 bg-white shadow-md rounded-md">
        <textarea
          className="w-[60%] outline-none p-3"
          placeholder="A few words about myself"
        ></textarea>
      </div>

      {/* Photo Upload Section */}
      <div className="flex gap-4 mt-8 bg-white rounde-md shadow-md">
        <div className="w-20 h-20 border flex items-center justify-center">
          <Image
            src="/travel-agent3.png"
            width={40}
            height={40}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-20 h-20 flex items-center justify-center text-gray-400"
          >
            <div className="flex items-center flex-col gap-3 text-gray-800">
              Add Photo
              <HiOutlinePhotograph className="text-[2.5rem]" />
            </div>
          </div>
        ))}
      </div>

      {/* Hobbies & Interests Section */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 py-[2rem]">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="font-bold mb-2 text-[2rem]">My Hobbies</h3>
          <div className="flex flex-wrap gap-2">
            {[
              {
                name: "Laying on the Beach",
                icon: <FaUmbrellaBeach />,
                color: "green",
              },
              { name: "Biking", icon: <MdDirectionsBike />, color: "red" },
              { name: "Cooking", icon: <PiCookingPot />, color: "yellow" },
              { name: "Dancing", icon: <GiAvoidance />, color: "purple" },
              {
                name: "Museums & Arts",
                icon: <MdOutlineMuseum />,
                color: "blue",
              },
            ].map((hobby, i) => (
              <div
                key={i}
                className=" px-3 py-1 flex flex-col gap-2 items-center"
              >
                <div
                  className="h-14 w-14 rounded-full text-white flex items-center justify-center text-[2rem]"
                  style={{ backgroundColor: `${hobby.color}` }}
                >
                  {hobby.icon}
                </div>
                <p>{hobby.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-md px-4 rounded-lg mt-8 py-[2rem] ">
          <h3 className="font-bold mb-2 text-[2rem]">My Interests</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name:"Travel", icon:<MdOutlineMuseum />, color:"blue"},
              {name:"Drawing", icon:<GiAvoidance/>, color:"purple"},
              {name:"History", icon:<PiCookingPot/>, color:"red"},
              {name:"Woodworking", icon:<MdDirectionsBike/>, color:"green"},
              {name:"Photography", icon:<MdOutlineMuseum/>, color:"yellow"},
              {name:"Poetry", icon:<FaUmbrellaBeach />, color:"green"},
              {name:"Knitting", icon:<MdDirectionsBike/>, color:"blue"},
            ].map((interest, i) => (
              <div
              key={i}
              className=" px-3 py-1  flex flex-col gap-2 items-center"
            >
              <div
                className="h-14 w-14 rounded-full text-white flex items-center justify-center text-[2rem]"
                style={{ backgroundColor: `${interest.color}` }}
              >
                {interest.icon}
              </div>
              <p>{interest.name}</p>
            </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-md px-4 py-[2rem] mt-8 rounded-lg">
          <h3 className="font-bold mb-2 text-[2rem]">About Me</h3>
          <ul className="text-sm text-gray-600">
            <li>
              <GiAvoidance className="text-white text-[0.5rem] h-7 w-7 rounded-full bg-red-600"/><strong>Gender:</strong> Male
            </li>
            <li>
            <GiAvoidance className="text-white text-[0.5rem] h-7 w-7 rounded-full bg-green-400"/><strong>Age:</strong> 27
            </li>
            <li>
            <GiAvoidance className="text-white text-[0.5rem] h-7 w-7 rounded-full bg-amber-300"/> <strong>Occupation:</strong> Engineer
            </li>
            <li>
            <GiAvoidance className="text-white text-[0.5rem] h-7 w-7 rounded-full bg-purple-500"/> <strong>Relationship:</strong> Single
            </li>
            <li>
            <GiAvoidance className="text-white text-[0.5rem] h-7 w-7 rounded-full bg-green-500"/> <strong>Location:</strong> Lagos
            </li>
            <li>
              <strong>Height Range:</strong> 5’5 - 6’0
            </li>
            <li>
            <GiAvoidance className="text-white text-[0.5rem] h-7 w-7 rounded-full bg-red-600"/><strong>Weight Range:</strong> 60 - 70kg
            </li>
            <li>
            <GiAvoidance className="text-white text-[0.5rem] h-7 w-7 rounded-full bg-blue-950"/> <strong>Religion:</strong> Christianity
            </li>
            <li>
            <GiAvoidance className="text-white text-[0.5rem] h-7 w-7 rounded-full bg-amber-300"/><strong>Nationality:</strong> Nigerian
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
