import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product, onClick }) => {
  const { name, price, image_urls } = product;

  return (
    <div className={styles.card} onClick={() => onClick(product.id)}>
      <img
        src={image_urls[0]}
        alt={`Image of ${name}`}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <h3 className={styles.productName}>{name.toUpperCase()}</h3>
        <p className={styles.productPrice}>{price} AUD</p>
      </div>
    </div>
  );
};

export default ProductCard;
