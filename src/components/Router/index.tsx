import React, { memo } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Routes } from './routes';
import Onboarding from '../../pages/Onboarding';
import Onboarding01 from '../../pages/Onboarding/steps/01';
import MontlyPayments from '../../pages/Onboarding/steps/MontlyPayments';
import AnnualPayments from '../../pages/Onboarding/steps/AnnualPayments';
import Homepage from '../../pages/Homepage';
import NewDream from '../../pages/Dream/new';
import DreamDetail from '../../pages/Dream/detail';
import { DreamsContextProvider } from '../../context/dreams';
import EmergencyIntro from '../../pages/Onboarding/steps/EmergencyIntro';
import EmergencyAdd from '../../pages/Onboarding/steps/emergencyAdd';
import { EmergencyFundContextProvider } from '../../context/emergencyFund';
import Introduction from '../../pages/Onboarding/steps/Introduction';
import WeeklyReview from '../../pages/WeeklyReview';
import SummaryPage from '../../pages/Onboarding/steps/SummaryPage';
import DasboradPage from '../../pages/Dashboard/DashboardPage';
import MonthlyReview from '../../pages/MonthlyReview';

const Router = () => {
  return (
    <DreamsContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path={Routes.Homepage} exact>
            <Homepage />
          </Route>
          <Route path={Routes.Onboarding} exact>
            <Onboarding />
          </Route>
          <Route path={Routes.Onboarding_01}>
            <Onboarding01 />
          </Route>
          <Route path={Routes.Introduction}>
            <Introduction />
          </Route>
          <Route path={Routes.NewDream}>
            <NewDream />
          </Route>
          <Route path={Routes.DreamDetail}>
            <DreamsContextProvider>
              <DreamDetail />
            </DreamsContextProvider>
          </Route>
          <Route path={Routes.Montly_Payments}>
            <MontlyPayments />
          </Route>
          <Route path={Routes.Annual_Payments}>
            <AnnualPayments />
          </Route>
          <Route path={Routes.Emergency_intro} exact>
            <EmergencyIntro />
          </Route>
          <Route path={Routes.WeeklyReview}>
            <WeeklyReview />
          </Route>
          <Route path={Routes.Summary}>
            <SummaryPage />
          </Route>
          <Route path={Routes.Dashboard}>
            <DasboradPage />
          </Route>
          <Route path={Routes.Emergency_add}>
            <EmergencyFundContextProvider>
              <EmergencyAdd />
            </EmergencyFundContextProvider>
          </Route>
          <Route path={Routes.MonthlyReview}>
            <MonthlyReview />
          </Route>
        </Switch>
      </BrowserRouter>
    </DreamsContextProvider>
  );
};

export default memo(Router);
