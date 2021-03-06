import React from 'react';
import { createUseStyles } from 'react-jss';
import { PickTransactions } from '../../../components/PickTransactions';
import { Routes } from '../../../components/Router/routes';
import { monthlyTransactions, Transaction } from '../../../__mocks__/transactions';
import Content from '../../../components/Content';
import BackLink from '../../../components/BackLink';
import { PaymentType, useDreamsContext } from '../../../context/dreams';

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
    margin: [10, 0],
  },
});

const MonthlyPayments = () => {
  const classes = useStyles();
  const { setPayments } = useDreamsContext();

  return (
    <Content>
      <nav>
        <BackLink to={Routes.Introduction} />
      </nav>
      <h1 className={classes.h1}>Monthly payments</h1>

      <p className={classes.p}>
        First we need to know your mandatory expenses so we can keep an eye on your spendings
      </p>
      <PickTransactions
        onPick={(transactions: Transaction[]) => {
          setPayments(
            transactions.map((transaction) => ({
              id: transaction.id,
              name: `${transaction.payee}: ${transaction.description}`,
              cost: transaction.amount,
              type: PaymentType.monthly,
            })),
            PaymentType.monthly
          );
        }}
        nextRoute={Routes.Annual_Payments}
        transactions={monthlyTransactions}
      />
    </Content>
  );
};

export default MonthlyPayments;
