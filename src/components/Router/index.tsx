import React, { memo } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "./routes";
import Homepage from "../../pages/Homepage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.Homepage} exact>
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Router);
