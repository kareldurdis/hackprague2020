import { useCheckboxState } from 'reakit/Checkbox';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { formatEuro, getSpendings } from '../utils';
import { Transaction } from '../__mocks__/transactions';
import NextLink from './NextLink';
import Checkbox from './Checkbox';

const useStyles = createUseStyles({
  ul: {
    borderTop: '1px solid #1A5BEF',
    borderBottom: '1px solid #1A5BEF',
    margin: 0,
    padding: [0, 10],
    marginBottom: 32,
    overflow: 'auto',
    maxHeight: '30vh',
    '& li': {
      listStyle: 'none',
      '&:last-child label': {
        borderBottom: 'none',
      },
    },
  },
  h1: {
    fontSize: 46,
    lineHeight: '48px',
    color: '#1A5BEF',
    fontWeight: 700,
    marginBottom: 12,
  },
  h2: {
    fontSize: 18,
    color: '#1A5BEF',
    marginBottom: 12,
  },
  p: {
    fontSize: 18,
    fontWeight: 500,
    color: '#202020',
    marginTop: 10,
    marginBottom: 47,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 5,
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 14,
    fontWeight: 500,
    color: 'rgba(28, 28, 28, 0.5)',
  },
  description: {
    color: 'rgba(28, 28, 28, 1)',
    fontSize: 16,
    fontWeight: 900,
  },
  amount: {
    color: 'rgba(28, 28, 28, 0.55)',
    fontSize: 16,
    fontWeight: 600,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  left: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    padding: [10, 12],
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
});

interface Props {
  title?: string;
  onPick: (transactions: Transaction[]) => void;
  nextRoute: string;
  transactions: Transaction[];
}

export const PickTransactions = ({ onPick, nextRoute, transactions }: Props) => {
  const classes = useStyles();
  const checkbox = useCheckboxState({ state: [] });

  // Get only negative transactions
  const spendings = getSpendings(transactions);

  const picked = (checkbox.state as string[]).map(
    (id) => spendings.find((item) => item.id === id) as Transaction
  );

  const formatDate = (date: Date) => `${date.getMonth()}/${date.getDate()}`;

  return (
    <>
      <h2 className={classes.h2}>Choose transactions</h2>
      <ul className={classes.ul}>
        {spendings.map((transaction) => {
          return (
            <li key={transaction.id}>
              <label className={classes.label}>
                <Checkbox
                  checkbox={checkbox}
                  className={classes.checkbox}
                  value={transaction.id}
                  checked={(checkbox.state as string[]).includes(transaction.id)}
                />
                <div className={classes.labelContainer}>
                  <div className={classes.left}>
                    <div className={classes.date}>{formatDate(transaction.date)}</div>
                    <div className={classes.description}>{transaction.description}</div>
                  </div>
                  <div className={classes.amount}>{formatEuro(transaction.amount)}</div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
      <NextLink to={nextRoute} onClick={() => onPick(picked)} />
    </>
  );
};
