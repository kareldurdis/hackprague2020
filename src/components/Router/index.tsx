import React, { memo } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "./routes";
import Onboarding from "../../pages/Onboarding";
import Onboarding01 from "../../pages/Onboarding/steps/01";
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
        <Route path={Routes.Onboarding} exact>
          <Onboarding />
        </Route>
        <Route path={Routes.Onboarding_01}>
          <Onboarding01 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Router);
