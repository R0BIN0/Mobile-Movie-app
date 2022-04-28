import { useState, createContext, FC } from "react";

type valueProps = {
  routeName: string;
  setRouteName: React.Dispatch<React.SetStateAction<string>>;
};

export const RouteContext = createContext<valueProps>({} as valueProps);

const RouteContextProvider: FC = ({ children }) => {
  const [routeName, setRouteName] = useState<string>("");
  //   console.log(routeName);

  return (
    <RouteContext.Provider value={{ routeName, setRouteName }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteContextProvider;
