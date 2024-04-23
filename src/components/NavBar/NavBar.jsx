import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { useCart } from "../../contexts/CartContext";

const NavBar = () => {
const { cart } = useCart();
const totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/itstime.png" alt="Logo" />
      </div>
      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }>
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }>
          Cart <span className={styles.cartCount}>{totalItems}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
