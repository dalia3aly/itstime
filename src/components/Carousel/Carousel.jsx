import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.scss";

// a dynamic reusable carousel component to be used in several pages
const Carousel = ({
  images,
  autoPlay = true,
  delay = 4000,
  showControls = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      // console.log("Carousel images:", images);
    }, [images]);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, delay);
      return () => clearInterval(interval);
    }

  }, [images.length, autoPlay, delay]);

    if (images.length === 0) {
      return <div className={styles.carousel}>No images to display</div>;
    }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <img
        src={images[currentIndex]}
        alt="Product Image"
        className={styles.carouselImage}
      />
      {showControls && (
        <>
 <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.button}>
             &#8678;
           </button>
            <button onClick={handleNext} className={styles.button}>
            &#8680;
           </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;

