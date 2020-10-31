import React, { memo } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Routes } from "./routes";

const Poster = () => {
  return (
    <Router>
      <Switch>
        <Route path={Routes.Homepage} exact>
          <div>Homepage</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default memo(Poster);
