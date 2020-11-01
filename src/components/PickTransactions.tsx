import { Checkbox, useCheckboxState } from 'reakit/Checkbox';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { formatEuro, getSpendings } from '../utils';
import { Transaction } from '../__mocks__/transactions';

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
  h2: {
    fontSize: 18,
    color: '#1A5BEF',
  },
  p: {
    fontSize: 18,
    fontWeight: 500,
    color: '#202020',
    marginTop: 10,
    marginBottom: 47,
  },
});

interface Props {
  title?: string;
  onPick: (transactions: Transaction[]) => void;
}

export const PickTransactions = ({ onPick }: Props) => {
  const classes = useStyles();
  const checkbox = useCheckboxState({ state: [] });

  // Get only negative transactions
  const spendings = getSpendings();

  const picked = (checkbox.state as string[]).map(
    (id) => spendings.find((item) => item.id === id) as Transaction
  );

  const formatLabel = ({ amount, payee, description }: Transaction) => {
    return `${formatEuro(amount)} ${payee}: ${description}`;
  };

  return (
    <>
      <h2>Choose transactions</h2>
      <ul className={classes.ul}>
        {spendings.map((transaction) => {
          return (
            <li key={transaction.id}>
              <label>
                <Checkbox {...checkbox} value={transaction.id} />
                {formatLabel(transaction)}
              </label>
            </li>
          );
        })}
      </ul>

      <button onClick={() => onPick(picked)}>Continue</button>
    </>
  );
};
