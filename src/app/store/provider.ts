import { createContext, useContext } from 'react';
import { IStore } from '.';

const StoreContext = createContext<null | IStore>(null);

export const useAppContext = () => {
  const context = useContext(StoreContext);
  return context;
};

export default StoreContext;
