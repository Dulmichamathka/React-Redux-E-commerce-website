import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../store/Actions/productActions";
import { FaCartArrowDown } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const [isHovered, setIsHovered] = useState(false);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { image, title, price, category, description } = product;

  console.log(productId);
  console.log(product);

  //axios call
  const fetchProductsDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedProduct(response.data));
  };

  //useeffect
  useEffect(() => {
    if (productId && productId !== "") fetchProductsDetails();
  }, [productId]);

  //return ui
  return (
    <div className="px-32 py-16 ">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="flex min-h-screen border rounded-md shadow-md">
          <div className="w-[50%]  object-contain p-20">
            <img src={image} alt="" />
          </div>
          <div className="w-[4px] max-h-full bg-gray-100 shadow-md relative">
            <div className="absolute top-[50%] right-[-15px] font-bold">
              AND
            </div>
          </div>
          <div className="w-[48%] flex flex-col gap-8 p-20 pr-5">
            <div className="text-3xl font-bold">{title}</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl text-green-700">
                <FaTag />
              </div>
              <div className="text-xl font-bold text-gray-800">$ {price}</div>
            </div>
            <div className="p-3 bg-yellow-500 border border-yellow-600 rounded-md bg-opacity-40 ">
              {category}
            </div>
            <div className="text-gray-600">{description}</div>
            <div
              className="relative rounded-md w-[30%] h-10 py-3 px-1 text-white bg-red-600  flex justify-center items-center gap-2 cursor-pointer transition-all duration-200 ease-out "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* ADD TO CART text */}
              <span
                className={`absolute transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                ADD TO CART
              </span>

              {/* Icon */}
              <FaCartArrowDown
                className={`absolute text-2xl transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
