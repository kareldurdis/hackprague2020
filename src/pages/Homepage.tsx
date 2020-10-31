import React, { memo } from "react";
import { Button } from "reakit";
import Content from "../components/Content";

const Homepage = () => {
  return (
    <Content>
      <h1>Dream Assistant</h1>

      {/* TODO: Existing dreams list */}
      <Button>Start dreaming</Button>
    </Content>
  );
};

export default memo(Homepage);
