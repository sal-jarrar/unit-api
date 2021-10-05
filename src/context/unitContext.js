import { useReducer, createContext } from 'react';
import unitReducer from './unitReducer';

import {
  creatApplication,
  getAllAccounts,
  getAllApplications,
  getAllCustomers,
} from '../api';

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
  const getApplications = async () => {
    try {
      const { data } = await getAllApplications();

      dispatch({
        type: 'GET_APPLICATIONS',
        payload: data.data,
      });
    } catch (e) {
      console.log('ERROR', e);
    }
  };
  const getAccounts = async () => {
    try {
      const { data } = await getAllAccounts();

      dispatch({
        type: 'GET_ACCOUNTS',
        payload: data.data,
      });
    } catch (e) {
      console.log('ERROR', e);
    }
  };
  const createApplication = async (appData) => {
    try {
      const res = await creatApplication(appData);

      dispatch({
        type: 'CREATE_APPLICATION',
        payload: res,
      });
    } catch (e) {
      console.log('ERROR', e.response.data.errors[0]);
    }
  };

  return (
    <UnitContext.Provider
      value={{
        unitState,
        getCustomers,
        getApplications,
        createApplication,
        getAccounts,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
};
