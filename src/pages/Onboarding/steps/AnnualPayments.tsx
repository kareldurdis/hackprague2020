import React from 'react';
import { PickTransactions } from '../../../components/PickTransactions';
import { Routes } from '../../../components/Router/routes';
import { useHistory } from 'react-router-dom';

const AnnualPayments = () => {
  const history = useHistory();
  return (
    <PickTransactions
      title={'Annual'}
      onPick={(transactions) => {
        console.log(transactions);
        history.push(Routes.Emergency_intro);
      }}
    />
  );
};

export default AnnualPayments;
