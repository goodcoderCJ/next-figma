import { HiOutlinePhotograph } from "react-icons/hi";
import Image from "next/image";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { MdDirectionsBike } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";
import { GiAvoidance } from "react-icons/gi";
import { MdOutlineMuseum } from "react-icons/md";

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Profile Header */}
      <div className="relative bg-gray-200 h-40 w-full rounded-lg mt-4 flex items-center justify-center">
        <img
          src="/images/cover.jpg"
          alt="Cover"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        />
        <button className="absolute top-2 right-2 bg-black text-white px-3 py-1 text-sm rounded">
          Update Cover
        </button>
      </div>

      {/* Profile Picture and Info */}
      <div className="relative flex items-center gap-4 p-4">
        <div className="relative">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            +
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold">Temiloluwa, 27</h2>
          <p className="text-gray-500">Lagos</p>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="bg-red-500 text-white px-4 py-1 rounded-md">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-1 rounded-md">
            Edit Match Setup
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-4 bg-white shadow-md rounded-md">
        <textarea
          className="w-[60%] border p-1"
          placeholder="A few words about myself"
        ></textarea>
      </div>

      {/* Photo Upload Section */}
      <div className="flex gap-4 mt-4 bg-white rounde-md shadow-md">
        <div className="w-20 h-20 border flex items-center justify-center">
          <Image
            src="/public/travel-agent3.png"
            width={40}
            height={40}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-20 h-20 border flex items-center justify-center text-gray-400"
          >
            <div className="flex flex-col gap-3 text-gray-800">
              Add Photo
              <HiOutlinePhotograph className="text-[1.5rem]" />
            </div>
          </div>
        ))}
      </div>

      {/* Hobbies & Interests Section */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="font-bold mb-2">My Hobbies</h3>
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
              <span
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
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="font-bold mb-2">My Interests</h3>
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
              <span
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
            </span>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="font-bold mb-2">About Me</h3>
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
