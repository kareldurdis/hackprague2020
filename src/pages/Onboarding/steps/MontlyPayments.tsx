import React from 'react';
import { useHistory } from 'react-router-dom';
import { PickTransactions } from '../../../components/PickTransactions';
import { Routes } from '../../../components/Router/routes';

const MontlyPayments = () => {
  const history = useHistory();
  return (
    <PickTransactions
      title={'Monthly'}
      onPick={(transactions) => {
        console.log(transactions);
        history.push(Routes.Annual_Payments);
      }}
    />
  );
};

export default MontlyPayments;
