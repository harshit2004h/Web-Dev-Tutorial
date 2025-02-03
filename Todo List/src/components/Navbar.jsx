import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-900 flex text-white gap-16 p-2">
        <div className="font-bold w-full text-center">
          <a className="text-lg cursor-pointer">iTask</a>
        </div>
        <div className="flex gap-16 w-full justify-center text-lg">
          <div className="cursor-pointer hover:font-bold">Home</div>
          <div className="cursor-pointer hover:font-bold">Tasks</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
