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

export interface EmergencyFund {
  cost: number;
  payment?: number;
  end?: Date;
}

const defaultEmergencyFund: EmergencyFund = {
  cost: 400,
};

export interface DreamsContextValue {
  dreams: Dream[];
  addNewDream: (dream: Dream) => void;
  setDreams: (dreams: Dream[]) => void;
  onboarded: boolean;
  setIsOnboarded: (onboarded: boolean) => void;
  payments: Payment[];
  addPayment: (payment: Payment) => void;
  setPayments: (payments: Payment[], paymentType: PaymentType) => void;
  emergencyFund: EmergencyFund | null;
  setEmergencyFund: (emergencyFund: EmergencyFund | null) => void;
  useEmergencyFund: boolean;
  setUseEmergencyFund: (useEmergencyFund: boolean) => void;
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
  emergencyFund: defaultEmergencyFund,
  setEmergencyFund: () => {},
  useEmergencyFund: false,
  setUseEmergencyFund: () => {},
});

interface DreamsContextProviderProps {}

export const DreamsContextProvider = memo(
  ({ children }: PropsWithChildren<DreamsContextProviderProps>) => {
    const [dreams, setDreams] = useStorage('dreams', dreamsMock);
    const [payments, setPayments] = useStorage<Payment[]>('payments', []);
    const [onboarded, setIsOnboarded] = useStorage('onboarded', false);
    const [emergencyFund, setEmergencyFund] = useStorage<EmergencyFund | null>(
      'emergencyFund',
      defaultEmergencyFund
    );
    const [useEmergencyFund, setUseEmergencyFund] = useStorage('useEmergencyFund', false);

    const addNewDream = (dream: Dream) => {
      return setDreams([...dreams, dream]);
    };
    const addPayment = (payment: Payment) => {
      return setPayments([...payments, payment]);
    };

    const setPaymentsHandler = (newPayments: Payment[], paymentType: PaymentType) => {
      return setPayments([
        ...payments.filter((payment) => payment.type !== paymentType),
        ...newPayments,
      ]);
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
          setPayments: setPaymentsHandler,
          emergencyFund,
          setEmergencyFund,
          useEmergencyFund,
          setUseEmergencyFund,
        }}
      >
        {children}
      </DreamsContext.Provider>
    );
  }
);

export const useDreamsContext = () => useContext(DreamsContext);
