import React from "react";

const Header = () => {
  return (
    <div className="navbar  mb-2 mt-3 p-4 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">Piyush Suthar</span>
      </div>
      <div className="flex-none px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
          <a className="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
          <a className="btn btn-ghost btn-sm rounded-btn">About</a>
          <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
