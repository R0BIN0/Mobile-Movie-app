import { useState, createContext, FC } from "react";

type valueProps = {
  routeName: string;
  setRouteName: React.Dispatch<React.SetStateAction<string>>;
  isBottomButton: boolean;
  setIsBottomButton: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RouteContext = createContext<valueProps>({} as valueProps);

const RouteContextProvider: FC = ({ children }) => {
  const [routeName, setRouteName] = useState<string>("");

  const [isBottomButton, setIsBottomButton] = useState<boolean>(false);

  return (
    <RouteContext.Provider
      value={{ routeName, setRouteName, isBottomButton, setIsBottomButton }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export default RouteContextProvider;
