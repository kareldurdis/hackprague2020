import React, { memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Content from '../../components/Content';
import { Routes } from '../../components/Router/routes';
import Button from '../../components/Button';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrap: {
    padding: [0, 40, 40, 40],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Onboarding = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Content className={classes.wrap}>
      <div />
      <h1>Save to live your dreams.</h1>

      <Button onClick={() => history.push(Routes.DreamList)}>Start dreaming</Button>
    </Content>
  );
};

export default memo(Onboarding);
