import React, { useEffect } from "react";
import { useApi } from "../context/ServerContext";

const SearchHistory = () => {
  const { SearchHistory, history } = useApi();
  useEffect(() => {
    history();
  }, []);

  return (
 <div className="flex flex-col items-center justify-center py-5 md:py-10 space-y-5 md:space-y-10 px-5 md:px-10">
    <div className="w-full">
      <img src="/img/cheapfinder.png" alt="logo" className="w-20 mx-auto" />
    </div>
      <h2 className="text-5xl">Search History</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {SearchHistory.map((product, index) => (
          <div key={index} className="w-full border rounded-xl py-3 space-y-4">
            <div className="flex justify-center items-center py-2 md:py-5">
              <img
                className="w-20 sm:w-36 md:w-52 object-cover hover:scale-110 transition-all duration-300 cursor-pointer"
                src={`http://127.0.0.1:8000${product.product.image}`}
                alt={product.product.name}
              />
            </div>
            <div className="px-2 md:px-4">
              <h2 className="text-xs md:text-base mb-2">
                {" "}
                Search date & time: {product.timestamp}{" "}
              </h2>
              <h2 className="font-bold text-base sm:text-lg md:text-xl mb-2">
                {product.product.name}
              </h2>
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                {product.product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
