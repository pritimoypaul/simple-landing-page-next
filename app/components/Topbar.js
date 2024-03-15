import Image from "next/image";
import React from "react";
import logo from "../assets/icons/Logo.png";
import Button from "./Button";

const Topbar = () => {
  return (
    <div className="w-full h-[84px] pl-[106px] pr-[106px] flex justify-between items-center">
      <Image src={logo} width={105} height={84} />
      <div>
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="flex items-center">
        <span className="text-[#4CAF4F] p-4">Login</span>
        <Button name={"Sign up"} />
      </div>
    </div>
  );
};

export default Topbar;
