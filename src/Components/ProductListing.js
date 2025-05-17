import React, { useEffect } from "react";
import axios from "axios";

import { ProductComponent } from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/Actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);

  // Now that Redux state has updated, useSelector gets the new list of products from Redux.
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products:", products);

  return (
    <div className="grid grid-cols-1 gap-10 mx-auto mt-4 md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
