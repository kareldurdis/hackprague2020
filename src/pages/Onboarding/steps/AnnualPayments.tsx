import React from 'react';
import { PickTransactions } from '../../../components/PickTransactions';
import { Routes } from '../../../components/Router/routes';
import { useHistory } from 'react-router-dom';
import { Transaction } from '../../../__mocks__/transactions';
import { useDreamsContext, PaymentType } from '../../../context/dreams';

const AnnualPayments = () => {
  const history = useHistory();
  const { setPayments } = useDreamsContext();
  return (
    <PickTransactions
      title={'Annual'}
      onPick={(transactions: Transaction[]) => {
        setPayments(
          transactions.map((transaction) => ({
            id: transaction.id,
            name: `${transaction.payee}: ${transaction.description}`,
            cost: transaction.amount,
            type: PaymentType.annual,
          }))
        );
        history.push(Routes.Emergency_intro);
      }}
    />
  );
};

export default AnnualPayments;
