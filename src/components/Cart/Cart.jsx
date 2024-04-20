import React from "react";
import { useCart } from "../../contexts/CartContext";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cart, dispatch } = useCart();

  // handle removing item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  // quantity update
  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <div>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            <img src={item.image_urls[0]} alt={item.name} />
            <div className={styles.items}>
              {item.name} - ${item.price} (Quantity: {item.quantity})
              <div className={styles.Buttons}>
                <button
                  className={styles.quantityBtn}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <button
                  className={styles.quantityBtn}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
                <button
                  className={styles.quantityBtn}
                  onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
