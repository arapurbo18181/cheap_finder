import React from "react";
import { useApi } from "../context/ServerContext";

const UserDashboard = () => {
  const { UserEmail } = useApi();
  return (
    <div className="flex flex-col items-center justify-center py-5 md:py-10 space-y-5 md:space-y-10">
    <div className="w-full">
      <img src="/img/cheapfinder.png" alt="logo" className="w-20 mx-auto" />
    </div>
      <h2 className="text-5xl"> {UserEmail}, Welcome to Cheap Finder </h2>
    </div>
  );
};

export default UserDashboard;
