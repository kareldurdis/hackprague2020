import React, {
  createContext,
  memo,
  PropsWithChildren,
  useContext,
} from "react";

export interface Dream {
  id: string;
  name: string;
  cost: number;
  end?: Date;
}

export interface DreamsContextValue {
  dreams: Dream[];
}

const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
});

interface DreamsContextProviderProps {}
export const DreamsContextProvider = memo(
  ({ children }: PropsWithChildren<DreamsContextProviderProps>) => {
    return (
      <DreamsContext.Provider value={{ dreams: [] }}>
        {children}
      </DreamsContext.Provider>
    );
  }
);

export const useDreamsContext = () => useContext(DreamsContext);
