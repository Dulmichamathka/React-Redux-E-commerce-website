import React from "react";
import { useSelector } from "react-redux";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //const { id, title } = products[0];
  return (
    <div className="w-full">
      <div className="flex flex-wrap w-full">
        <div className="w-full bg-white rounded shadow-md cursor-pointer hover:shadow-lg max-sm:w-64">
          <div className="bg-gray-200 h-80"></div>
          <div className="p-4">
            {/* <div className="text-lg font-semibold">{title}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
