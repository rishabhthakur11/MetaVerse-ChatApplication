import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function Login() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0xeb003f,
          backgroundColor: 0x00000,
          maxDistance: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return (
    <div className="bg-black  h-full relative text-white">
      <div>{/* Going to put the logo of the Application */}</div>
      <div className="w-full h-screen">
        {/* Nice background */}
        {/* <Image
          src="http://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />  */}
        <main className=" min-h-screen " ref={vantaRef}></main>
      </div>
    </div>
  );
}

export default Login;
