import transactions from './__mocks__/transactions';
import { useLocalStorage } from 'react-use';
import { Dispatch, SetStateAction } from 'react';

export const formatEuro = (amount: number) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR' }).format(amount);

export const getSpendings = () => transactions.filter((transaction) => transaction.amount < 0);
export const getIncomes = () => transactions.filter((transaction) => transaction.amount > 0);
export const sumIncomes = () =>
  getIncomes().reduce((sum, transaction) => sum + transaction.amount, 0);

export function useStorage<T>(key: string, initial: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useLocalStorage(key, initial);
  return [value || initial, setValue as any];
}
