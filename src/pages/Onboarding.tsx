import React, { memo } from "react";
import { Button } from "reakit";
import Content from "../components/Content";

const Onboarding = () => {
  return (
    <Content>
      <h1>Dream Assistant</h1>

      <Button>Start dreaming</Button>
    </Content>
  );
};

export default memo(Onboarding);
