import React, { useEffect, useState } from "react";
import { getCollectionImages } from "../../services/collectionsServices/collectionServices";
import Carousel from "../../components/Carousel/Carousel";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import styles from "./LandingPage.module.scss";
import { ColorRing } from "react-loader-spinner";

const LandingPage = () => {
  const [collectionImages, setCollectionImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Unisex");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = await getCollectionImages();
      setCollectionImages(imageUrls);
      setIsLoading(false);
    };

    fetchImages();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.landingPageContainer}>
      {isLoading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      ) : (
        <Carousel images={collectionImages} />
      )}
      <div className={styles.categoryFilters}>
        <h2>Filter by Category</h2>
        <button
          className={styles.categoryButtons}
          onClick={() => handleCategoryChange("Men")}>
          Men
        </button>
        <button
          className={styles.categoryButtons}
          onClick={() => handleCategoryChange("Women")}>
          Women
        </button>
        <button
          className={styles.categoryButtons}
          onClick={() => handleCategoryChange("Unisex")}>
          Unisex
        </button>
      </div>
      <ProductsContainer filter={{ category: selectedCategory }} />
    </div>
  );
};

export default LandingPage;
