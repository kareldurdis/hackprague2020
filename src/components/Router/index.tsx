import React, { memo } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "./routes";
import Onboarding from "../../pages/Onboarding";
import Homepage from "../../pages/Homepage";
import { DreamsContextProvider } from "../../context/dreams";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.Homepage} exact>
          <DreamsContextProvider>
            <Homepage />
          </DreamsContextProvider>
        </Route>
        <Route path={Routes.Onboarding}>
          <Onboarding />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Router);
