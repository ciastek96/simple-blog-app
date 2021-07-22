import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ children, path }) => (
  <header className={styles.header}>
    {path ? (
      <Link to={path} className={styles.header__link}>
        <h1>{children}</h1>
      </Link>
    ) : (
      <h1>{children}</h1>
    )}
  </header>
);

export default Header;
