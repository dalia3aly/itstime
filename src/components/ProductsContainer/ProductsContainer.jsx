import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productsServices/productsServices";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsContainer.module.scss";

const ProductsContainer = ({ filter }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      let fetchedProducts = await getAllProducts();

      // conditionally apply filters in container components/pages
      if (filter) {
        fetchedProducts = fetchedProducts.filter((product) =>
          Object.entries(filter).every(([key, value]) => product[key] === value)
        );
      }
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [filter]);

  const handleProductClick = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => handleProductClick(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductsContainer;
