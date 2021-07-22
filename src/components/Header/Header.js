import React from "react";
import { useHistory, Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ children, path }) => {
  const { push } = useHistory();
  return (
    <header className={styles.header}>
      {path ? (
        <h1 onClick={() => push(path)} className={styles.header__link}>
          {children}
        </h1>
      ) : (
        <h1>{children}</h1>
      )}
    </header>
  );
};

export default Header;
