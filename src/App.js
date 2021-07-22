import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getPosts, getUsers, setFavsPosts, setFavsComments } from "./actions";
import { routes } from "./routes";
import RootView from "./views/RootView.js";
import DetailsView from "./views/DetailsView.js";
import NotFoundView from "./views/NotFoundView.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
    dispatch(setFavsPosts());
    dispatch(setFavsComments());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home} component={RootView} />
        <Route exact path={routes.posts} component={DetailsView} />
        <Route exact path={routes.post} component={DetailsView} />
        <Route path="*" component={NotFoundView} />
      </Switch>
    </Router>
  );
};
export default App;
