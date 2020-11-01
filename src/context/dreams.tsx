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

export interface DreamsContextValue {
  dreams: Dream[];
  addNewDream: (dream: Dream) => void;
  setDreams: (dreams: Dream[]) => void;
  onboarded: boolean;
  setIsOnboarded: (onboarded: boolean) => void;
}

const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  addNewDream: () => {},
  onboarded: false,
  setIsOnboarded: () => {},
  setDreams: () => {},
});

interface DreamsContextProviderProps {}

export const DreamsContextProvider = memo(
  ({ children }: PropsWithChildren<DreamsContextProviderProps>) => {
    const [dreams, setDreams] = useStorage('dreams', dreamsMock);
    const [onboarded, setIsOnboarded] = useStorage('onboarded', false);

    const addNewDream = (dream: Dream) => {
      return setDreams((state) => [...(state || []), dream]);
    };

    return (
      <DreamsContext.Provider value={{ dreams, addNewDream, onboarded, setIsOnboarded, setDreams }}>
        {children}
      </DreamsContext.Provider>
    );
  }
);

export const useDreamsContext = () => useContext(DreamsContext);
