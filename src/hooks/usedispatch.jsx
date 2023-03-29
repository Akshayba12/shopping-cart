import { useCallback } from 'react';
import { useError } from '../context/errorContext';
import { useload } from '../context/loadingContext';

const UseDispatch = (dispatch) => {
  const { loadingdispatch } = useload();
  const { errordispatch } = useError();

  const generatorType = useCallback(
    (type, loadingId, actionName) => {
      if (loadingId) {
        return `${type}_${loadingId}_${actionName}`;
      }
      return `${type}_${actionName}`;
    },
    [],
  );

  const loadDispatch = useCallback(({ type, payload, loadingId }) => {
    const actionName = 'REQUEST';
    console.log(loadingId);
    console.log(generatorType(type, loadingId, actionName));
    loadingdispatch({
      type: generatorType(type, loadingId, actionName),
      payload,
    });
    errordispatch({
      type: generatorType(type, loadingId, actionName),
    });
  }, [generatorType]);

  const successDispatch = useCallback(({ type, payload, loadingId }) => {
    const actionName = 'SUCCESS';
    dispatch({
      type: generatorType(type, undefined, actionName),
      payload,
    });
    loadingdispatch({
      type: generatorType(type, loadingId, actionName),
    });
  }, [generatorType]);

  const errDispatch = useCallback(({ type, payload, loadingId }) => {
    const actionName = 'FAIL';
    loadingdispatch({
      type: generatorType(type, loadingId, actionName),
    });
    errordispatch({
      type: generatorType(type, loadingId, actionName),
      payload,
    });
  }, [generatorType]);

  return {
    loadDispatch,
    successDispatch,
    errDispatch,
  };
};

export default UseDispatch;
