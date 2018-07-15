import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // Push adds new item in original array.
      // Concat creates a copy of actual array, adds the item, and returns the new array.
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.payload.result
        })
      };
    case actionTypes.DELETE_RESULT:
      // One way to immutably remove an element from an array:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      // Another way (better way):
      const updatedArray = state.results.filter(
        result => result.id !== action.payload.resElID
      );
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};

export default resultReducer;
