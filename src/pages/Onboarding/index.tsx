import React, { memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Content from '../../components/Content';
import { Routes } from '../../components/Router/routes';
import Button from '../../components/Button';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  h1: {
    fontSize: 56,
    fontWeight: 700,
    color: '#1A5BEF',
  },
  h2: {
    fontSize: 32,
  },
});

const Onboarding = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Content className={classes.wrap}>
      <div />
      <h1 className={classes.h1}>Dream assistant</h1>
      <h2 className={classes.h2}>Save to live your dreams.</h2>

      <Button onClick={() => history.push(Routes.DreamList)}>Start dreaming</Button>
    </Content>
  );
};

export default memo(Onboarding);
