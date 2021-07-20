import React from "react";
import styles from "./IconButton.module.scss";
import HeartIcon from "../../assets/icons/Heart.svg";

const IconButton = ({ children }) => {
  return (
    // <button className={styles.iconButton}>
    //   <HeartIcon>{children}</HeartIcon>
    // </button>
    <HeartIcon styles={}>{children}</HeartIcon>
  );
};

export default IconButton;
