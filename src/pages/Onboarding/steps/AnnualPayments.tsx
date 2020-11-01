import React from 'react';
import { createUseStyles } from 'react-jss';
import { PickTransactions } from '../../../components/PickTransactions';
import { Routes } from '../../../components/Router/routes';
import { useLocalStorage } from 'react-use';
import { annualTransactions, Transaction } from '../../../__mocks__/transactions';
import Content from '../../../components/Content';
import BackLink from '../../../components/BackLink';

const useStyles = createUseStyles({
  ul: {
    '& li': {
      listStyle: 'none',
    },
  },
  popup: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'white',
  },
  h1: {
    fontSize: 46,
    lineHeight: '48px',
    color: '#1A5BEF',
    fontWeight: 700,
    marginBottom: 12,
  },
  p: {
    fontSize: 18,
    fontWeight: 500,
    color: '#202020',
    marginTop: 10,
    marginBottom: 47,
  },
});

const AnnualPayments = () => {
  const classes = useStyles();
  const [, setExpenses] = useLocalStorage<Transaction[]>('annual-expenses');
  return (
    <Content>
      <nav>
        <BackLink to={Routes.Introduction} />
      </nav>
      <h1 className={classes.h1}>Annual payments</h1>

      <p className={classes.p}>
        Please add your annual payments that you're expecting, so we can save a little every month
        for them
      </p>
      <PickTransactions
        title={'Annual'}
        onPick={(transactions) => {
          setExpenses(transactions);
        }}
        nextRoute={Routes.Emergency_intro}
        transactions={annualTransactions}
      />
    </Content>
  );
};

export default AnnualPayments;
