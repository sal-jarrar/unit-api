import { useReducer, createContext } from 'react';
import unitReducer from './unitReducer';

import { getAllCustomers } from '../api';

const initialState = {};

export const UnitContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [unitState, dispatch] = useReducer(unitReducer, initialState);
  const getCustomers = async () => {
    try {
      const { data } = await getAllCustomers();

      dispatch({
        type: 'GET_CUSTOMERS',
        payload: data.data,
      });
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <UnitContext.Provider value={{ unitState, getCustomers }}>
      {children}
    </UnitContext.Provider>
  );
};
