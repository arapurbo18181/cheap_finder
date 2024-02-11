import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useApi } from "../context/ServerContext";
import Avatar from "./Avatar";

const Header = () => {
  const { checkAuthentication, IsAuth } = useApi();
  const [IsToggle, setIsToggle] = useState(false);

  const toggle = () => {
    setIsToggle(!IsToggle);
  };

  const menu = [
    { name: "Home", link: "/home" },
    { name: "Login", link: "/" },
    { name: "Signup", link: "/signup" },
    { name: "About", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Profile", link: "/profile" },
  ];

  useEffect(() => {
    checkAuthentication();
  }, []);

  const renderMenuItems = () => {
    const isAvatarVisible = IsAuth; // Check if Avatar is visible

    return menu.map((item, index) => {
      const isVisible =
        (isAvatarVisible &&
          (["Contact Us", "About"].includes(item.name) ||
            (item.name === "Profile" && window.innerWidth < 768))) ||
        (!isAvatarVisible && item.name !== "Profile");

      return isVisible ? (
        <Link
          onClick={toggle}
          to={item.link}
          key={index}
          className="nav-link border-b md:border-none w-full md:w-fit"
        >
          {item.name}
        </Link>
      ) : null;
    });
  };
  const renderMenuItems2 = () => {
    const isAvatarVisible = IsAuth; // Check if Avatar is visible

    return menu.map((item, index) => {
      const isVisible =
        (isAvatarVisible &&
          (["Contact Us", "About"].includes(item.name) ||
            (item.name === "Profile" && window.innerWidth < 768))) ||
        (!isAvatarVisible && item.name !== "Profile");

      return isVisible ? (
        <Link
          to={item.link}
          key={index}
          className="nav-link border-b md:border-none w-full md:w-fit"
        >
          {item.name}
        </Link>
      ) : null;
    });
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 left-0 z-40">
      <div className="container mx-auto flex flex-wrap py-3 justify-between items-center">
        <Link to="/home" className="flex items-center text-gray-900">
          <span className="ml-3 text-xl font-medium">CheapFinder</span>
        </Link>
        <nav className="hidden md:flex md:space-x-4">{renderMenuItems2()}</nav>
        {IsAuth && <Avatar />}
        <div className="md:hidden">
          <FaBars onClick={toggle} className="cursor-pointer" />
        </div>
      </div>
      <div
        className={`absolute w-full h-screen bg-white top-0 left-0 right-0 bottom-0 z-50 transition-all duration-300 ${
          IsToggle ? "-translate-x-0" : "-translate-x-full"
        } flex flex-col justify-start items-start py-20 text-xl`}
      >
        {renderMenuItems()}
      </div>
    </header>
  );
};

export default Header;
