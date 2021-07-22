import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <p className={styles.notfound__description}>
        Strona o podanym adresie nie istnieje.
      </p>
    </div>
  );
};

export default NotFound;
