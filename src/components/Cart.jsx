import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
  const items = useSelector((state) => state.items);
  return (
    <div className="p-4">
      {items.length === 0 ? (
        <p className="text-center p-4">Please Add some items in your cart</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-3">Cart</h1>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Cart;
