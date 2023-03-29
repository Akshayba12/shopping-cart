import React, {
  createContext, useContext, useMemo, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { initialloading, loadingReducer } from '../Reducer/loadingreducer';

export const loadingContext = createContext();

export function Loadingprovider({ children }) {
  const [loading, loadingdispatch] = useReducer(loadingReducer, initialloading);
  const value = useMemo(() => ({
    loading,
    loadingdispatch,
  }), [loading]);

  return (
    <loadingContext.Provider value={value}>
      {children}
    </loadingContext.Provider>
  );
}

Loadingprovider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useload = () => useContext(loadingContext);
