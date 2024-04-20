import React from "react";

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  return (
    <div>
      <button onClick={() => onQuantityChange(Math.max(1, quantity - 1))}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => onQuantityChange(quantity + 1)}>+</button>
    </div>
  );
};

export default QuantitySelector;
