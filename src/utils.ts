import transactions from './__mocks__/transactions';

export const formatEuro = (amount: number) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR' }).format(amount);

export const getSpendings = () => transactions.filter((transaction) => transaction.amount < 0);
export const getIncomes = () => transactions.filter((transaction) => transaction.amount > 0);
export const sumIncomes = () =>
  getIncomes().reduce((sum, transaction) => sum + transaction.amount, 0);
