import React, {
  createContext,
  Dispatch,
  memo,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface EmergencyFund {
  cost: number;
  payment?: number;
  end?: Date;
}

export interface EmergencyFundContextValue {
  emergencyFund: EmergencyFund | null;
  setEmergencyFund: Dispatch<SetStateAction<EmergencyFund | null>>;
}

const EmergencyFundContext = createContext<EmergencyFundContextValue>({
  emergencyFund: null,
  setEmergencyFund: () => {},
});

interface EmergencyFundContextProviderProps {}
export const EmergencyFundContextProvider = memo(
  ({ children }: PropsWithChildren<EmergencyFundContextProviderProps>) => {
    const [emergencyFund, setEmergencyFund] = useState<EmergencyFund | null>(
      null
    );

    return (
      <EmergencyFundContext.Provider
        value={{ emergencyFund, setEmergencyFund }}
      >
        {children}
      </EmergencyFundContext.Provider>
    );
  }
);

export const useEmergencyFundContext = () => useContext(EmergencyFundContext);
