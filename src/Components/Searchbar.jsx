import React from "react";
import { FiSearch } from "react-icons/fi";
import { useApi } from "../context/ServerContext";

const Searchbar = () => {
  const { search, getProducts } = useApi();

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-3 md:space-x-3 md:space-y-0">
      <form
        className="relative flex w-10/12 sm:w-8/12 md:w-1/2 xl:w-10/12 items-center justify-center rounded-xl drop-shadow-md"
        onSubmit={search}
      >
        <input
          type="text"
          className="w-full rounded-xl bg-gray-100 pl-3 pr-6 py-1 md:py-2 xl:py-2 text-sm sm:text-lg placeholder-gray-700 text-left outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 xl:w-full"
          placeholder="Search"
          name="query"
          id="query"
          autoComplete="off"
        />

        <button
          type="submit"
          className="absolute h-full right-2 xl:right-4 cursor-pointer"
        >
          <FiSearch className="text-sm sm:text-lg md:text-2xl text-red-500" />
        </button>
      </form>

      <button
        onClick={() => {
          getProducts();
        }}
        className="border px-4 py-1.5 bg-black text-white hover:bg-gray-700 transition-all duration-300 rounded-xl"
      >
        {" "}
        Reset Search{" "}
      </button>
    </div>
  );
};

export default Searchbar;
