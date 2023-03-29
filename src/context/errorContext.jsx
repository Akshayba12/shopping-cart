import React, {
  createContext, useCallback, useContext, useMemo, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { errorReducer, initialerror } from '../Reducer/errorreducer';

export const errorContext = createContext();

export function Errorprovider({ children }) {
  const [error, errordispatch] = useReducer(errorReducer, initialerror);

  const removeError = useCallback(
    (payload) => {
      errordispatch(
        {
          type: 'REMOVE_ERROR',
          payload,
        },
      );
    },
    [],
  );

  const value = useMemo(() => ({
    error,
    errordispatch,
    removeError,
  }), [error]);

  return (
    <errorContext.Provider value={value}>
      {children}
    </errorContext.Provider>
  );
}

Errorprovider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useError = () => useContext(errorContext);
