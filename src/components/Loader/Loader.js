import React from "react";
import ReactDOM from "react-dom";
import styles from "./Loader.module.css";

const Loader = () =>
  ReactDOM.createPortal(
    <div className={styles.loader__wrapper}>
      <p className={styles.loader__title}>Ładowanie</p>
    </div>,
    document.getElementById("portal")
  );

export default Loader;
