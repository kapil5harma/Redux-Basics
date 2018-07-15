const initialState = {
  counter: 0,
  results: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // Older way of immutably updating object (shallow copy an object and then add, update whatever you want to)
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case 'DECREMENT':
      // Easier way of immutably updating object (spread an object and then add, update whatever you want to)
      return {
        ...state,
        counter: state.counter - 1
      };

    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload.value
      };

    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.payload.value
      };

    case 'STORE_RESULT':
      // Push adds new item in original array.
      // Concat creates a copy of actual array, adds the item, and returns the new array.
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case 'DELETE_RESULT':
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

export default reducer;
