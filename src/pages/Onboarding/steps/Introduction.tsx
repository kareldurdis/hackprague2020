import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Content from '../../../components/Content';
import { Routes } from '../../../components/Router/routes';
import BackLink from '../../../components/BackLink';
import NextLink from '../../../components/NextLink';

const useStyles = createUseStyles({
  wrap: {
    justifyContent: 'space-between',
  },
  p: {
    margin: [5, 0, 10, 0],
  },
});

const Introduction = () => {
  const classes = useStyles();

  return (
    <Content className={classes.wrap}>
      <nav>
        <BackLink to={Routes.DreamList} />
      </nav>
      <h1 className={classes.p}>
        In order to reach your goals, we need to get to know your finances a little better
      </h1>
      <nav>
        <NextLink to={Routes.Montly_Payments} />
      </nav>
    </Content>
  );
};

export default memo(Introduction);
