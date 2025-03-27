import Image from "next/image";
import ProfileCard from "@/components/profileCard";

const profiles = [
  {
    name: "Davina",
    age: 23,
    location: "Abuja",
    match: 85,
    image: "/first-image.png",
    profile: "/avatar1.png",
    verified: false,
  },
  {
    name: "Emily",
    age: 31,
    location: "Lagos",
    match: 80,
    image: "/second-image.png",
    profile: "/second-profile.png",
    verified: false,
  },
  {
    name: "John",
    age: 28,
    location: "Delta",
    match: 72,
    image: "/eighth-image.png",
    profile: "/avatar6.png",
    verified: false,
  },
  {
    name: "Davina",
    age: 23,
    location: "Abuja",
    match: 85,
    image: "/fourth-image.png",
    profile: "/fourth-profile.png",
    verified: false,
  },
  {
    name: "Emily",
    age: 31,
    location: "Lagos",
    match: 80,
    image: "/fifth-image.png",
    profile: "/fifth-profile.png",
    verified: true,
  },
  {
    name: "John",
    age: 28,
    location: "Delta",
    match: 72,
    image: "/sixth-image.png",
    profile: "/sixth-profile.png",
    verified: true,
  },
  {
    name: "Mads",
    age: 26,
    location: "",
    match: 77,
    image: "/seventh-image.png",
    profile: "/seventh-profile.png",
    verified: false,
  },
  {
    name: "Love",
    age: 26,
    location: "Lagos",
    match: 80,
    image: "/eighth-image.png",
    profile: "/eighth-profile.png",
    verified: false,
  },
  {
    name: "Karen",
    age: 23,
    location: "Abuja",
    match: 85,
    image: "/ninth-image.png",
    profile: "/ninth-profile.png",
    verified: false,
  },
  {
    name: "Sharon",
    age: 24,
    location: "Lagos",
    match: 80,
    image: "/tenth-image.png",
    profile: "/tenth-profile.png",
    verified: false,
  },
  {
    name: "Kevin",
    age: 30,
    location: "PH",
    match: 70,
    image: "/eleventh-image.png",
    profile: "/eleventh-profile.png",
    verified: true,
  },
  {
    name: "Lily",
    age: 25,
    location: "Lagos",
    match: 89,
    image: "/twelvth-image.png",
    profile: "/twelvth-profile.png",
    verified: false,
  },
  {
    name: "Vivian",
    age: 27,
    location: "Edo",
    match: 71,
    image: "/thirteenth-image.png",
    profile: "/third-profile.png",
    verified: false,
  },
  {
    name: "Jack",
    age: 30,
    location: "Lagos",
    match: 87,
    image: "/fourth-image.png",
    profile: "/fourth-profile.png",
    verified: false,
  },
  {
    name: "Dave",
    age: 26,
    location: "Lagos",
    match: 80,
    image: "/eighth-image.png",
    profile: "/eighth-profile.png",
    verified: false,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto  pb-24 px-[1rem]">
      <div className="bg-white mt-[-25px] flex gap-16 items-center">
        <div className="image flex gap-4">
          <Image
            src="/travel-agent2.png"
            alt="hero-image"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div className="para-progress-bar">
            <p className="para font-bold text-gray-700">Welcome, Temiloluwa</p>
            <div className="progress-container text-gray-700">
              <p className="text-[0.6rem]">My Profile Completeness</p>
              <div className="progress flex gap-1">
                <input
                  type="range"
                  name=""
                  id=""
                  value={60}
                  min="0"
                  max="80"
                  className="accent-red-700 bg-transparent rounded-lg cursor-pointer"
                />
                <p className="text-[0.7rem]">60%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div>
            <label className="mr-2 font-bold text-[0.8rem] text-gray-700">
              Relationship Type:
            </label>
            <select className="p-1 border rounded text-[0.7rem] border-gray-700 text-gray-700">
              <option>Dating</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {profiles.map((profile, idx) => (
          <ProfileCard
            key={idx}
            name={profile.name}
            age={profile.age}
            location={profile.location}
            match={profile.match}
            image={profile.image}
            profile={profile.profile}
            verified={profile.verified}
          />
        ))}
      </div>
    </div>
  );
}