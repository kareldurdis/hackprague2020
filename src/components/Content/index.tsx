import React, { memo, PropsWithChildren } from 'react';
import { createUseStyles } from 'react-jss';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

const useStyles = createUseStyles({
  content: {
    fontFamily: "'Quicksand', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    maxWidth: 390,
    padding: [30, 0],
    margin: '0 auto',
    boxSizing: 'border-box',
    minHeight: '100%',
  },
});

interface ContentProps {
  className?: string;
}

const Content = ({ children, className }: PropsWithChildren<ContentProps>) => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700"
          rel="stylesheet"
        />
      </Helmet>
      <main className={classNames(classes.content, className)}>{children}</main>
    </>
  );
};

export default memo(Content);
