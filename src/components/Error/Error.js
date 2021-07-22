import React from "react";
import styles from "./Error.module.css";
import Button from "../Button/Button";

const Error = () => {
  return (
    <div className={styles.error}>
      <p className={styles.error__description}>
        Coś poszło nie tak! Spróbuj ponownie!
      </p>
      <Button onClick={() => window.location.reload()}>Odśwież</Button>
    </div>
  );
};

export default Error;
