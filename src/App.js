import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import RootView from "./views/RootView.js";
import DetailsView from "./views/DetailsView.js";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={routes.home} component={RootView} />
      <Route exact path={routes.posts} component={DetailsView} />
      <Route exact path={routes.post} component={DetailsView} />
      <Route path="*" component={RootView} />
    </Switch>
  </Router>
);

export default App;
