import React, { useEffect, useState } from "react";
import styles from "./Toast.module.scss"; // Import the specific styles

const Toast = ({ message, type = "info", duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!message) return;

    setIsVisible(true); // Show toast when there is a message
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide toast after the duration
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [message, duration]);

  if (!isVisible) return null;

  return <div className={`${styles.toast} ${styles[type]}`}>{message}</div>;
};

export default Toast;
