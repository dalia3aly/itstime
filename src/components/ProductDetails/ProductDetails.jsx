import React, { useState, useEffect } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { updateProductQuantity } from "../../services/cartServices/cartServices";
import styles from "./ProductDetails.module.scss";
import { useCart } from "../../contexts/CartContext";


const ProductDetails = ({ product, quantity, onQuantityChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [toast, setToast] = useState({ message: "", visible: false });
  const { cart, dispatch } = useCart();

  const toggleDescription = () => {
    setIsCollapsed(!isCollapsed);
  };

 const onAddToCart = async () => {
   try {
     if (!product.id) {
       console.error("Invalid product ID");
       setToast({ message: "Invalid product data.", visible: true });
       setTimeout(() => setToast({ message: "", visible: false }), 3000);
       return;
     }

     if (product.quantity >= quantity) {
       await updateProductQuantity(product.id, quantity);
       dispatch({
         type: "ADD_ITEM",
         payload: {
           id: product.id,
           name: product.name,
           price: product.price,
           quantity: quantity,
           image_urls: product.image_urls,
         },
       });
       setToast({ message: "Product added to cart!", visible: true });
     } else {
       setToast({ message: "Not enough items in stock!", visible: true });
     }
   } catch (error) {
     console.error("Error updating product quantity:", error);
     setToast({ message: "Failed to add product to cart.", visible: true });
   }
   setTimeout(() => setToast({ message: "", visible: false }), 3000);
 };

  return (
    <div className={styles.productDetails}>
      <h2>{product.name}</h2>

      <div className={styles.description}>
        <button className={styles.collapsible} onClick={toggleDescription}>
          {isCollapsed ? "▼" : "▲"} Description
        </button>
        <div
          className={`${styles.content} ${
            isCollapsed ? "collapsed" : "expanded"
          }`}
          style={{ maxHeight: isCollapsed ? "0" : "max-content" }}>
          {product.description}
        </div>
      </div>
      <p>
        <strong>Price:</strong> {product.price.toFixed(2)} AUD
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Available items:</strong> {product.quantity}
      </p>

      {product.variants.map((variant, index) => (
        <ul className={styles.variantList} key={index}>
          <li>
            <strong>Collection: </strong>
            <span>{variant.collection}</span>
          </li>
          <li>
            <strong>Color: </strong>
            <span>{variant.color}</span>
          </li>
          <li>
            <strong>Material: </strong>
            <span>{variant.material}</span>
          </li>
          <li>
            <strong>Water Resistance: </strong>
            <span>{variant.waterResistance}</span>
          </li>
          <li>
            <strong>Diameter: </strong>
            <span>{variant.diameter}</span>
          </li>
          <li>
            <strong>Warranty: </strong>
            <span>{variant.warranty}</span>
          </li>
          <li>
            <strong>Case Shape: </strong> <span>{variant.case_shape}</span>
          </li>
          <li>
            <strong>Size: </strong>
            <span>{variant.size}</span>
          </li>
        </ul>
      ))}

      <QuantitySelector
        quantity={quantity}
        onQuantityChange={onQuantityChange}
      />
      <button
        className={styles.cartButton}
        onClick={onAddToCart}
        disabled={product.quantity < 1}>
        {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

export default ProductDetails;
