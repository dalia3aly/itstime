// ProductDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productsServices/productsServices";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Carousel from "../../components/Carousel/Carousel";
import { useCart } from "../../contexts/CartContext";
import { ColorRing } from "react-loader-spinner";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(id);
      if (fetchedProduct) {
        setProduct({ id, ...fetchedProduct });
      } else {
        console.error("Failed to fetch product");
      }
    };

    fetchProduct();
  }, [id]);

 const handleQuantityChange = (newQuantity) => {
   const parsedQuantity = parseInt(newQuantity);
   if (parsedQuantity >= 1) {
     setQuantity(parsedQuantity);
   }
 };

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      addItem({ ...product, quantity });
    }
    onAddToCart();
  };

  return (
    <div>
      {product ? (
        <>
          <Carousel
            images={product.image_urls}
            autoPlay={false}
            delay={3000}
            showControls={true}
          />
          <ProductDetails
            product={product}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onAddToCart={handleAddToCart}
          />
        </>
      ) : (
        <ColorRing
          visible={true}
          height="180"
          width="180"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
    </div>
  );
};

export default ProductDetailsPage;
