import { useMoralis } from "react-moralis";
import Image from "next/image";
import LOGO from "../assets/METAVERSE CHAT2.png";
import Avatar from "./Avatar";
import ChangeUser from "./ChangeUser";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0  z-50 bg-orange-400 shadow-xl">
      <div className=" p-3 grid grid-col-5 lg:grid-col-6 items-end lg:items-center">
        <div className="relative h-16 w-16 top-2 lg:mx-auto hidden lg:inline-grid">
          <Image src={LOGO} layout="fill" objectFit="cover" />
        </div>
        <div className=" relative  h-16 w-16  lg:mx-auto  lg:h-20 lg:w-20 mt-5 lg:left-48">
          <Avatar logoutOnPress />
        </div>
        <div className=" text-left lg:text-center col-span-4 flex flex-col">
          {/* avatar */}
          <h1 className="text-xl lg:text-2xl">
            Welcome to Metaverse Community{" "}
          </h1>
          <h2 className=" text-l lg:text-xl font-bold truncate">
            {user.getUsername()}
          </h2>
          <ChangeUser />
        </div>
      </div>
    </div>
  );
}

export default Header;
