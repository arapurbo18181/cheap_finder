import React, { useEffect, useState } from "react";

const ProductCard = ({ product, timestamp }) => {
  const [MinPrice, setMinPrice] = useState();

  useEffect(() => {
    // Calculate the minimum price when the component mounts or product changes
    if (product.store && product.store.length > 0) {
      const minPrice = Math.min(...product.store.map(store => store.price));
      setMinPrice(minPrice);
    }
  }, [product]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden drop-shadow-lg border mb-8 -z-50 h-fit">
      <div className="w-full flex justify-center items-center p-10">
        <img
          className="w-52 object-cover hover:scale-110 transition-all duration-300"
          src={`http://127.0.0.1:8000${product.image}`}
          alt={product.name}
        />
      </div>
      <div className="p-6">
        { timestamp && <h2 className="text-base mb-2"> Search date & time: {timestamp} </h2>}
        <h2 className="font-bold text-xl mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        { MinPrice && <h2 className="text-red-600 text-xl">Lowest Price: {MinPrice !== undefined ? `${MinPrice}TK` : 'N/A'} </h2>}

        <div className="grid grid-cols-2 gap-4">
          { product.store && product.store.map((store, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-semibold text-lg mb-2">
                {store.store_name}
              </h3>
              <p className="text-gray-700">Price: ${store.price}</p>
              <a
                href={store.store_location}
                className="text-blue-500 hover:underline"
              >
                Visit Store
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
