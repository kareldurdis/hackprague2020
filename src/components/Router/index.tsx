import React, { memo } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "./routes";
import Onboarding from "../../pages/Onboarding";
import Onboarding01 from "../../pages/Onboarding/steps/01";
import Homepage from "../../pages/Homepage";
import NewDream from "../../pages/Dream/new";
import { DreamsContextProvider } from "../../context/dreams";
import EmergencyIntro from "../../pages/Onboarding/steps/emergencyIntro";
import EmergencyAdd from "../../pages/Onboarding/steps/emergencyAdd";
import { EmergencyFundContextProvider } from "../../context/emergencyFund";

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
        <Route path={Routes.NewDream}>
          <DreamsContextProvider>
            <NewDream />
          </DreamsContextProvider>
        </Route>
        <Route path={Routes.Emergency_intro} exact>
          <EmergencyIntro />
        </Route>
        <Route path={Routes.Emergency_add}>
          <EmergencyFundContextProvider>
            <EmergencyAdd />
          </EmergencyFundContextProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Router);
