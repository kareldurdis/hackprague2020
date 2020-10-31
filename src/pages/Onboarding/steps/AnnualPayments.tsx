import React from 'react';
import { PickTransactions } from '../../../components/PickTransactions';
import { Routes } from '../../../components/Router/routes';
import { useHistory } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import { Transaction } from '../../../__mocks__/transactions';

const AnnualPayments = () => {
  const history = useHistory();
  const [, setExpenses] = useLocalStorage<Transaction[]>('annual-expenses');
  return (
    <PickTransactions
      title={'Annual'}
      onPick={(transactions) => {
        setExpenses(transactions);
        history.push(Routes.Emergency_intro);
      }}
    />
  );
};

export default AnnualPayments;
