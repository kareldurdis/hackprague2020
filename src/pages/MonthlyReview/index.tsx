import React, { memo } from 'react';
import PositiveMonthlyReview from './Positive';

const MonthlyReview = () => {
  // TODO: Load saved money
  const saved = 50;

  return <PositiveMonthlyReview saved={saved} />;
};

export default memo(MonthlyReview);
