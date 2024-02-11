import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../context/ServerContext";

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const { logout } = useApi();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        // Clicked outside the popover, close it
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-fit relative hidden md:block" ref={popoverRef}>
      <img
        src="/img/avatar.png"
        className="w-10 cursor-pointer"
        alt=""
        onClick={togglePopover}
      />
      <ul
        hidden={isOpen ? false : true}
        className={`absolute z-10 top-14 transition-all duration-300 -translate-x-5 border flex flex-col justify-center items-center bg-white py-2 px-4 rounded-2xl space-y-2 shadow-xl  `}
      >
        <Link to={"/profile"} onClick={togglePopover} className="">
          Profile
        </Link>
        <button
          type="submit"
          onClick={() => {
            logout();
            togglePopover();
          }}
        >
          LogOut
        </button>
      </ul>
    </div>
  );
}
