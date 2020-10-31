import React, { memo } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "./routes";
import Intro from "../../pages/Intro";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", Routes.Intro]}>
          <Intro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Router);
