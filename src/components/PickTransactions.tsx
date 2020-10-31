import { Checkbox, useCheckboxState } from 'reakit/Checkbox';
import React, { useEffect, useState } from 'react';
import Content from './Content';
import { Input } from 'reakit/Input';
import { createUseStyles } from 'react-jss';
import BackLink from './BackLink';
import { Routes } from './Router/routes';
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
});

interface Props {
  title: string;
  onPick: (transactions: Transaction[]) => void;
}

export const PickTransactions = ({ title, onPick }: Props) => {
  const classes = useStyles();
  const checkbox = useCheckboxState({ state: [] });
  const [showPopup, setPopupVisibility] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch('');
  }, [showPopup]);

  // Get only negative transactions
  const spendings = getSpendings();

  const picked = (checkbox.state as string[]).map(
    (id) => spendings.find((item) => item.id === id) as Transaction
  );

  const formatLabel = ({ amount, payee, description }: Transaction) => {
    return `${formatEuro(amount)} ${payee}: ${description}`;
  };

  return (
    <Content>
      <nav>
        <BackLink to={Routes.Introduction} />
      </nav>
      <h1>{title} payments</h1>

      <div>
        Choices:
        <ul>
          {picked.map((transaction) => {
            return (
              <li key={transaction.id}>
                {formatLabel(transaction)}
                <button
                  onClick={() => {
                    checkbox.setState((value) =>
                      (value as string[]).filter((item) => item !== transaction.id)
                    );
                  }}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <h2>Suggestions</h2>
      <ul className={classes.ul}>
        {spendings.slice(0, 5).map((transaction) => {
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
      <button onClick={() => setPopupVisibility(true)}>More</button>

      <button onClick={() => onPick(picked)}>Continue</button>

      {showPopup ? (
        <div className={classes.popup}>
          <Content>
            <Input
              placeholder="Hledat"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <ul className={classes.ul}>
              {(search
                ? spendings.filter((t) => t.payee.toLowerCase().includes(search.toLowerCase()))
                : spendings
              ).map((transaction) => {
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
            <button onClick={() => setPopupVisibility(false)}>Done</button>
          </Content>
        </div>
      ) : null}
    </Content>
  );
};
