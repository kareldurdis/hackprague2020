import React from 'react';
import { useHistory } from 'react-router-dom';
import { PickTransactions } from '../../../components/PickTransactions';
import { Routes } from '../../../components/Router/routes';
import { useLocalStorage } from 'react-use';
import { Transaction } from '../../../__mocks__/transactions';

const MontlyPayments = () => {
  const history = useHistory();
  const [, setExpenses] = useLocalStorage<Transaction[]>('monthly-expenses');
  return (
    <PickTransactions
      title={'Monthly'}
      onPick={(transactions) => {
        setExpenses(transactions);
        history.push(Routes.Annual_Payments);
      }}
    />
  );
};

export default MontlyPayments;
