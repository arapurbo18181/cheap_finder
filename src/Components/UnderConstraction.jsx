import React from "react";

const UnderConstraction = ({ text }) => {
  return (
    <div className="py-5 md:py-10 w-full space-y-5 md:space-y-10 px-5 md:px-10 flex flex-col items-center justify-center ">
      <div className="w-full">
        <img src="/img/cheapfinder.png" alt="logo" className="w-20 mx-auto" />
      </div>
      <div>
        <h2 className="text-5xl"> {text} is Under Constraction </h2>
      </div>
    </div>
  );
};

export default UnderConstraction;
