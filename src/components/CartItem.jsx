import React from "react";
import products from "../data/products";
import { removeItem, updateQty } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { product_id, quantity } = item;
  const { id, title, img, price, discount, rating } = products.find(
    (item) => item.id === product_id
  );

  const handleUpdate = (id, newQty) => {
    console.log("Updating an item");
    if (newQty >= 1) {
      dispatch(updateQty({ id, newQty }));
    }
  };
  const handleRemove = (id) => {
    console.log("Removing an item");
    dispatch(removeItem({ id }));
  };
  // Calculate discounted price
  const discountedPrice = price - price * (discount / 100);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 mb-4 rounded-lg bg-gray-800 border border-gray-700 shadow-md">
      {/* Product Image and Details */}
      <div className="flex items-center w-full sm:w-auto">
        {/* Product Image */}
        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 mr-4 relative">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow">
          <h3 className="text-white font-medium truncate">{title}</h3>
          <div className="flex items-center mt-1">
            {/* Star Rating */}
            <div className="flex items-center mr-2">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm text-gray-400">{rating}</span>
            </div>

            {/* Price */}
            <div className="flex items-center">
              <span className="text-green-500 font-semibold">
                ₹{discountedPrice.toLocaleString()}
              </span>
              {discount > 0 && (
                <span className="ml-2 text-xs text-gray-500 line-through">
                  ₹{price.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quantity Controls and Delete Button */}
      <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
            onClick={() => handleUpdate(item.id, quantity - 1)}
            disabled={quantity <= 1}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </button>

          <span className="w-8 text-center text-white">{quantity}</span>

          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-500 text-white transition-colors"
            onClick={() => handleUpdate(item.id, quantity + 1)}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        {/* Delete Button */}
        <button
          className="ml-4 p-2 text-gray-400 hover:text-red-500 transition-colors"
          onClick={() => handleRemove(item.id)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
