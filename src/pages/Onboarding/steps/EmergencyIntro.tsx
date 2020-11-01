import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Content from '../../../components/Content';
import { Routes } from '../../../components/Router/routes';
import BackLink from '../../../components/BackLink';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import { formatEuro, useStorage } from '../../../utils';
import { useHistory } from 'react-router-dom';
import Minus from '../../../assets/Minus.svg';
import Plus from '../../../assets/Plus.svg';

const useStyles = createUseStyles({
  content: {
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 388,
    height: 388,
  },
  p: {
    margin: 0,
    padding: 0,
    color: '#202020',
    fontSize: 18,
    lineHeight: '26px',
    fontWeight: 500,
  },
  skip: {
    color: '#1A5BEF',
    width: 150,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 600,
    cursor: 'pointer',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    paddingBottom: 22,
  },
  amount: {
    height: 72,
    background: 'rgba(26, 91, 239, 0.2)',
    color: 'rgb(26, 91, 239)',
    borderRadius: 36,
    margin: [50, 0],
    lineHeight: '72px',
    fontSize: 32,
    fontWeight: 700,
    position: 'relative',
  },
  minus: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: '100%',
    left: 18,
    top: 15,
    cursor: 'pointer',
    fontSize: 0,
  },
  plus: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: '100%',
    right: 18,
    top: 15,
    cursor: 'pointer',
    fontSize: 0,
  },
});

const EmergencyIntro = () => {
  const classes = useStyles();
  const history = useHistory();
  const [amount, setAmount] = useStorage('emergency', 400);
  const [, setUseOfEmergencyFund] = useStorage('use-emergency', false);

  return (
    <Content className={classes.content}>
      <BackLink to={Routes.Annual_Payments} />
      <div>
        <Title className={classes.title}>Emergency fund</Title>

        <p className={classes.p}>Car broke down? TV? Phone?</p>
        <p className={classes.p}>Emergency fund will help you cover unexpected expenses.</p>
        <div className={classes.amount}>
          <div className={classes.minus} onClick={() => setAmount(Math.max(0, amount - 50))}>
            <img src={Minus} alt={''} />
          </div>
          {formatEuro(amount)}
          <div className={classes.plus} onClick={() => setAmount(amount + 50)}>
            <img src={Plus} alt={''} />
          </div>
        </div>
        <div className={classes.buttons}>
          <div
            className={classes.skip}
            onClick={() => {
              setUseOfEmergencyFund(false);
              history.push(Routes.Summary);
            }}
          >
            Skip
          </div>
          <Button
            onClick={() => {
              setUseOfEmergencyFund(true);
              history.push(Routes.Summary);
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </Content>
  );
};

export default memo(EmergencyIntro);
