import React from "react";
import Cart from "../../components/Cart/Cart";
import { useCart } from "../../contexts/CartContext";
import styles from "./CartPage.module.scss";

const CartPage = () => {
  const { cart } = useCart();

  const totalPrice = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

    const handleCheckout = () => {
     
      console.log("Checkout button clicked");
    };

    return (
      <div className={styles.cartPage}>
        <h1>Shopping Cart</h1>
        <div className={styles.cartContainer}>
          <Cart />
          <div className={styles.total}>
            Total Price: {totalPrice.toFixed(2)} AUD
          </div>
        </div>
        <button onClick={handleCheckout} className={styles.checkoutButton}>
          Proceed to Checkout
        </button>
      </div>
    );
};

export default CartPage;
