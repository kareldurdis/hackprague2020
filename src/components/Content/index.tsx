import React, { memo, PropsWithChildren } from 'react';
import { createUseStyles } from 'react-jss';
import { Helmet } from 'react-helmet';

const useStyles = createUseStyles({
  content: {
    fontFamily: "'Quicksand', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: 480,
    padding: 20,
    margin: '0 auto',
  },
});

interface ContentProps {}

const Content = ({ children }: PropsWithChildren<ContentProps>) => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700"
          rel="stylesheet"
        />
      </Helmet>
      <main className={classes.content}>{children}</main>
    </>
  );
};

export default memo(Content);
