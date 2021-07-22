import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./MainTemplate.module.css";
import { setFavsPosts, setFavsComments } from "../actions";
import Loading from "../providers/Loading";
import Loader from "../components/Loader/Loader";
import ErrorHandler from "../providers/ErrorHandler";
import Error from "../components/Error/Error";
import Header from "../components/Header/Header";
import { routes } from "../routes";

const MainTemplate = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFavsPosts());
    dispatch(setFavsComments());
  }, [dispatch]);
  return (
    <>
      <Header path={routes.home}>simple blog.</Header>
      <Loading
        render={({ isLoading }) => (
          <>
            {isLoading && <Loader />}
            <ErrorHandler
              render={({ isError }) => (
                <section className={styles.section}>
                  {isError ? <Error /> : <> {children} </>}
                </section>
              )}
            />
          </>
        )}
      />
    </>
  );
};

export default MainTemplate;
