import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Titile from "./Titile";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [BestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    console.log("Products:", products); // see what's inside
    const bestProducts = products.filter((product) => product.bestseller);
    console.log("Filtered Best Sellers:", bestProducts);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Titile text1="BEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      {/* rendering latest products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
        {BestSeller.map((product, index) => (
          <ProductItem
            key={index}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
