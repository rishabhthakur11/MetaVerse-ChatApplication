import Image from "next/image";
import LOGO from "../assets/METAVERSE CHAT.png";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black  h-full relative">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center">
        {/*logo of the Application */}
        <Image src={LOGO} width={500} height={500} />
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse lg:w-80"
        >
          Join the Metaverse Community
        </button>
      </div>
      <div className="w-full h-screen">
        {/* background */}
        <Image
          src="http://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
