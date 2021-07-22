import React from "react";
import cx from "classnames";
import styles from "./HeartButton.module.css";
import HeartIcon from "../../assets/icons/Heart.svg";

const HeartButton = ({ onClickFn, isPressed }) => {
  return (
    <button onClick={onClickFn} className={styles.btn}>
      <HeartIcon
        className={cx(styles.btn__heart, {
          [styles.btn__heartActive]: isPressed,
        })}
      />
    </button>
  );
};

export default HeartButton;
