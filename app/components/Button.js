import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-[#4CAF4F] px-6 py-2 rounded-md text-white h-[46px]">
      {name}
    </div>
  );
};

export default Button;
