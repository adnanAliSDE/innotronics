import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product_id: product.id, quantity: 1 }));
  };

  return (
    <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={product.img}
        alt={product.title}
        width={300}
        className="w-full h-48 object-cover"
      />

      {/* Product Details */}
      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-lg font-semibold text-white mb-2">
          {product.title}
        </h2>

        {/* Price and Discount */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl font-bold text-white">₹{product.price}</span>
          <span className="text-sm text-green-300 bg-green-900 px-2 py-1 rounded-full">
            {product.discount}% off
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {/* Star Icons */}
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
            ))}
          </div>
          <span className="text-sm text-gray-400">({product.rating})</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={addToCart}
          className="w-full active:bg-white  active:text-green-600 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors duration-300 font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export { ProductCard };
