import React, { createContext, memo, PropsWithChildren, useContext, useState } from 'react';
import dreamsMock from '../__mocks__/dreams';
import { useStorage } from '../utils';

export interface Dream {
  id: string;
  name: string;
  cost: number;
  payment?: number;
  end?: Date;
  image?: string;
}

export enum PaymentType {
  monthly = 'monthly',
  annual = 'annual',
}

export interface Payment {
  id: string;
  name: string;
  type: PaymentType;
  cost: number;
}

export interface DreamsContextValue {
  dreams: Dream[];
  addNewDream: (dream: Dream) => void;
  setDreams: (dreams: Dream[]) => void;
  onboarded: boolean;
  setIsOnboarded: (onboarded: boolean) => void;
  payments: Payment[];
  addPayment: (payment: Payment) => void;
  setPayments: (payments: Payment[]) => void;
}

const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  addNewDream: () => {},
  onboarded: false,
  setIsOnboarded: () => {},
  setDreams: () => {},
  payments: [],
  addPayment: () => {},
  setPayments: () => {},
});

interface DreamsContextProviderProps {}

export const DreamsContextProvider = memo(
  ({ children }: PropsWithChildren<DreamsContextProviderProps>) => {
    const [dreams, setDreams] = useStorage('dreams', dreamsMock);
    const [payments, setPayments] = useStorage<Payment[]>('payments', []);
    const [onboarded, setIsOnboarded] = useStorage('onboarded', false);

    const addNewDream = (dream: Dream) => {
      return setDreams((state) => [...(state || []), dream]);
    };
    const addPayment = (payment: Payment) => {
      return setPayments((state) => [...(state || []), payment]);
    };

    return (
      <DreamsContext.Provider
        value={{
          dreams,
          addNewDream,
          onboarded,
          setIsOnboarded,
          setDreams,
          payments,
          addPayment,
          setPayments,
        }}
      >
        {children}
      </DreamsContext.Provider>
    );
  }
);

export const useDreamsContext = () => useContext(DreamsContext);
