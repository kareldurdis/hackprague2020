import React from 'react';
import { createUseStyles } from 'react-jss';
import { PickTransactions } from '../../../components/PickTransactions';
import { Routes } from '../../../components/Router/routes';
import { annualTransactions, Transaction } from '../../../__mocks__/transactions';
import Content from '../../../components/Content';
import BackLink from '../../../components/BackLink';
import { useDreamsContext, PaymentType } from '../../../context/dreams';

const useStyles = createUseStyles({
  h1: {
    fontSize: 46,
    lineHeight: '48px',
    color: '#1A5BEF',
    fontWeight: 700,
    margin: [12, 0],
  },
  p: {
    fontSize: 18,
    fontWeight: 500,
    color: '#202020',
    marginTop: 10,
    margin: [10, 0],
  },
});

const AnnualPayments = () => {
  const classes = useStyles();
  const { setPayments } = useDreamsContext();
  return (
    <Content>
      <nav>
        <BackLink to={Routes.Montly_Payments} />
      </nav>
      <h1 className={classes.h1}>Annual payments</h1>

      <p className={classes.p}>
        Please add your annual payments that you're expecting, so we can save a little every month
        for them
      </p>
      <PickTransactions
        title={'Annual'}
        onPick={(transactions: Transaction[]) => {
          setPayments(
            transactions.map((transaction) => ({
              id: transaction.id,
              name: `${transaction.payee}: ${transaction.description}`,
              cost: transaction.amount,
              type: PaymentType.annual,
            })),
            PaymentType.annual
          );
        }}
        nextRoute={Routes.Emergency_intro}
        transactions={annualTransactions}
      />
    </Content>
  );
};

export default AnnualPayments;
