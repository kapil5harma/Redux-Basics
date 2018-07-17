import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // Older way of immutably updating object (shallow copy an object and then add, update whatever you want to)
      // const newState = Object.assign({}, state);
      // newState.counter = state.counter + 1;
      // return newState;

      // Making leaner reducers using utility function (updateObject).
      return updateObject(state, {
        counter: state.counter + 1
      });

    case actionTypes.DECREMENT:
      // Easier way of immutably updating object (spread an object and then add, update whatever you want to)
      // return {
      //   ...state,
      //   counter: state.counter - 1
      // };

      // Making leaner reducers using utility function (updateObject).
      return updateObject(state, {
        counter: state.counter - 1
      });

    case actionTypes.ADD:
      return updateObject(state, {
        counter: state.counter + action.payload.value
      });
    // return {
    //   ...state,
    //   counter: state.counter + action.payload.value
    // };

    case actionTypes.SUBTRACT:
      return updateObject(state, {
        counter: state.counter - action.payload.value
      });
    // return {
    //   ...state,
    //   counter: state.counter - action.payload.value
    // };

    default:
      return state;
  }
};

export default counterReducer;
