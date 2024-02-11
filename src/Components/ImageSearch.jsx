import React, { useEffect } from "react";
import { useApi } from "../context/ServerContext";
import ProductCard from "./ProductCard";

const ImageSearch = () => {
  const {
    ImageSearchAllProducts,
    Products,
    search,
    getProducts,
    ImageSearchResult,
    setImageSearchResult,
  } = useApi();
  useEffect(() => {
    getProducts();
    setImageSearchResult([]);
  }, []);

  return (
    <div className="py-5 md:py-10 w-full space-y-5 md:space-y-10 px-5 md:px-10">
      <div className="w-full">
        <img src="/img/cheapfinder.png" alt="logo" className="w-20 mx-auto" />
      </div>
      <div className="flex justify-center items-center w-full relative">
        <h2 className="text-4xl font-bold"> Image Search </h2>
        <button
          onClick={() => {
            setImageSearchResult([]);
            getProducts();
          }}
          className="absolute right-0 border px-4 py-2 bg-black text-white hover:bg-gray-700 transition-all duration-300 "
        >
          {" "}
          Reset Search{" "}
        </button>
      </div>
      {ImageSearchResult.length === 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {ImageSearchAllProducts.map((product, index) => {
            return (
              <form
                key={index}
                className="w-full p-4 border flex justify-center items-center rounded-xl"
                onSubmit={(e) => search(e, true)}
              >
                <input
                  type="text"
                  id="query"
                  name="query"
                  value={product.name}
                  hidden
                />
                <button type="submit">
                  <img
                    className="w-52 object-cover hover:scale-110 transition-all duration-300"
                    src={`https://cheapfinder-api.onrender.com/${product.image}`}
                    alt={product.name}
                  />
                </button>
              </form>
            );
          })}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ImageSearchResult.length > 0 &&
          ImageSearchResult.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageSearch;
