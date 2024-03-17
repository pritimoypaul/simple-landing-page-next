import Image from "next/image";
import React from "react";
import Dummy1 from "../assets/images/dummy1.png";

const RevBox = () => {
  return (
    <div className="w-[256px] relative">
      <Image src={Dummy1} height={199} width={256} />
      <div className="w-[240px] text-center bg-white ml-auto mr-auto absolute bottom-[-50px] left-[8px] rounded-md p-4 shadow-md">
        <p>Creating Streamlined Safeguarding Processes with OneRen</p>
        <br />
        <span className="text-[#4CAF4F]">ReadMore</span>
      </div>
    </div>
  );
};

export default RevBox;
