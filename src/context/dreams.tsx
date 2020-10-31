import React, {
  createContext,
  Dispatch,
  memo,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import {useDreams} from "../utils";

export interface Dream {
  id: string;
  name: string;
  cost: number;
  payment?: number;
  end?: Date;
}

export interface DreamsContextValue {
  dreams: Dream[];
  newDream?: Dream | null;
    addNewDream: (dream: Dream) => void;
}

const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  newDream: null,
    addNewDream: () => {},
});

interface DreamsContextProviderProps {}
export const DreamsContextProvider = memo(
  ({ children }: PropsWithChildren<DreamsContextProviderProps>) => {
    const [newDream] = useState<Dream | null>(null);
    const [ dreams, setDreams ] = useDreams();

    const addNewDream = (dream: Dream) => {
        return setDreams((state) => [...(state || []), dream]);
    }

    return (
      <DreamsContext.Provider value={{ dreams, newDream, addNewDream }}>
        {children}
      </DreamsContext.Provider>
    );
  }
);

export const useDreamsContext = () => useContext(DreamsContext);
