import React from 'react';
import { PickTransactions } from '../../../components/PickTransactions';

const MontlyPayments = () => {
  return (
    <PickTransactions
      title={'Monthly'}
      onPick={(transactions) => {
        console.log(transactions);
      }}
    />
  );
};

export default MontlyPayments;
