import * as actionTypes from '../actions/actions';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // Older way of immutably updating object (shallow copy an object and then add, update whatever you want to)
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      // Easier way of immutably updating object (spread an object and then add, update whatever you want to)
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload.value
      };

    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.payload.value
      };
    default:
      return state;
  }
};

export default counterReducer;
