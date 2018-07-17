import * as actionTypes from './actionTypes';

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: {
      result: res
    }
  };
};

export const storeResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log('[Actions -> result.js] \noldCounter: ', oldCounter);
      dispatch(saveResult(res));
    }, 3000);
  };
};

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: {
      resElID: id
    }
  };
};
