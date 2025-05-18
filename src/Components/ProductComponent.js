import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, category, price } = product;
    return (
      <div className="w-full mt-10" key={id}>
        <Link to={`/product/${id}`}>
          <div className="flex flex-wrap w-full ">
            <div className="w-full bg-white rounded  shadow-lg cursor-pointer hover:shadow-xl max-sm:w-64 h-[485px] flex flex-col mb-10">
              <div className="p-2 h-80">
                <img
                  src={image}
                  alt={title}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-4">
                <div className="text-lg font-semibold">{title}</div>
                <div className="text-sm">$ {price}</div>
                <div className="">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};
