import React, {
  createContext,
  Dispatch,
  memo,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

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
  newDream?: Dream | null;
  setNewDream: Dispatch<SetStateAction<Dream | null>>;
}

const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  newDream: null,
  setNewDream: () => {},
});

interface DreamsContextProviderProps {}
export const DreamsContextProvider = memo(
  ({ children }: PropsWithChildren<DreamsContextProviderProps>) => {
    const [newDream, setNewDream] = useState<Dream | null>(null);

    return (
      <DreamsContext.Provider value={{ dreams: [], newDream, setNewDream }}>
        {children}
      </DreamsContext.Provider>
    );
  }
);

export const useDreamsContext = () => useContext(DreamsContext);
