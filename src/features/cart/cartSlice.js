import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product_id, quantity } = action.payload;
      const item_index = state.items.findIndex(
        (item) => item.product_id === product_id
      );
      // takes product id and qty
      if (item_index === -1) {
        console.log(item_index);
        const item = {
          id: nanoid(5),
          product_id,
          quantity,
        };
        // Push item to items
        state.items.push(item);
      } else {
        state.items.at(item_index).quantity += quantity;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateQty: (state, action) => {
      const { id, newQty } = action.payload;
      console.table("id, newQty");
      console.table({ id, newQty });
      state.items = state.items.map((item) => {
        if (item.id === id) {
          item.quantity = newQty;
        }
        return item;
      });
    },
  },
});

export const { addItem, removeItem, updateQty } = cartSlice.actions;
export default cartSlice.reducer;
