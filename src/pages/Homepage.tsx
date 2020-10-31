import React, { memo } from "react";
import { Redirect } from "react-router-dom";
import Content from "../components/Content";
import { Routes } from "../components/Router/routes";
import { useDreamsContext } from "../context/dreams";

const Homepage = () => {
  const { dreams } = useDreamsContext();

  if (!dreams.length) {
    return (
      <Redirect
        to={{
          pathname: Routes.Onboarding,
        }}
      />
    );
  }

  return (
    <Content>
      <h1>Dashboard</h1>
    </Content>
  );
};

export default memo(Homepage);
