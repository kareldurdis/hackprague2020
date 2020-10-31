import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import { Routes } from '../components/Router/routes';
import { useDreamsContext } from '../context/dreams';

const Homepage = () => {
  const { onboarded } = useDreamsContext();

  if (!onboarded) {
    return (
      <Redirect
        to={{
          pathname: Routes.Onboarding,
        }}
      />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: Routes.Dashboard,
        }}
      />
    );
  }
};

export default memo(Homepage);
