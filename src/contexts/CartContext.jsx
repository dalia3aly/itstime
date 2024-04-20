import React, { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";

const CartContext = createContext();

const initialCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

// CartProvider to wrap the application or component tree
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState, init);

   function init(initialCartState) {
     const storedCart = sessionStorage.getItem("cart");
     return storedCart ? JSON.parse(storedCart) : initialCartState;
   }

   // store the cart state in sessionStorage whenever it changes
   useEffect(() => {
     sessionStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);


  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
