
/*  Reducer switch statement
 */
function Reducer(state, action) {
  switch(action.type) {
    case 'SELECT_ITEM':
      return {
        ...state,
        items: [...state.items, action.item]
      }
    default: return state;
  }
}

export default Reducer;