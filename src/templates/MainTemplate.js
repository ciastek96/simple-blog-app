import React from "react";
import styles from "./MainTemplate.module.css";
import Loading from "../providers/Loading";
import Loader from "../components/Loader/Loader";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Loading
        render={({ isLoading }) => (
          <>
            {isLoading && <Loader />}
            <div className={styles.wrapper}>{children}</div>
          </>
        )}
      />
    </>
  );
};

export default MainTemplate;
