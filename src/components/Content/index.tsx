import React, { memo, PropsWithChildren } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: 1440,
    padding: 20,
  },
});

interface ContentProps {}

const Content = ({ children }: PropsWithChildren<ContentProps>) => {
  const classes = useStyles();
  return <main className={classes.content}>{children}</main>;
};

export default memo(Content);