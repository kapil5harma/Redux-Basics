import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  // One way to immutably remove an element from an array:
  // const id = 2;
  // const newArray = [...state.results];
  // newArray.splice(id, 1);

  // Another way (better way):
  const updatedArray = state.results.filter(
    result => result.id !== action.payload.resElID
  );
  // return {
  //   ...state,
  //   results: updatedArray
  // };

  // Making leaner reducers using utility function (updateObject).
  return updateObject(state, {
    results: updatedArray
  });
};

const storeResult = (state, action) => {
  // Push adds new item in original array.
  // Concat creates a copy of actual array, adds the item, and returns the new array.
  // return {
  //   ...state,
  //   results: state.results.concat({
  //     id: new Date(),
  //     value: action.payload.result
  //   })
  // };

  // Making leaner reducers using utility function (updateObject).
  return updateObject(state, {
    results: state.results.concat({
      id: new Date(),
      value: action.payload.result
    })
  });
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return storeResult(state, action);

    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);

    default:
      return state;
  }
};

export default resultReducer;
