import React from 'react';
import { useHistory } from 'react-router-dom';
import { PickTransactions } from '../../../components/PickTransactions';
import { Routes } from '../../../components/Router/routes';
import { useLocalStorage } from 'react-use';
import { Transaction } from '../../../__mocks__/transactions';
import { PaymentType, useDreamsContext } from '../../../context/dreams';

const MontlyPayments = () => {
  const history = useHistory();
  const { setPayments } = useDreamsContext();
  return (
    <PickTransactions
      title={'Monthly'}
      onPick={(transactions: Transaction[]) => {
        setPayments(
          transactions.map((transaction) => ({
            id: transaction.id,
            name: `${transaction.payee}: ${transaction.description}`,
            cost: transaction.amount,
            type: PaymentType.monthly,
          }))
        );
        history.push(Routes.Annual_Payments);
      }}
    />
  );
};

export default MontlyPayments;
