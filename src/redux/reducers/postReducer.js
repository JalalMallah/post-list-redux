import { ADD_POST, FETCH_POSTS } from '../actions/types';

function postReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.payload];
    case ADD_POST:
      return [action.payload, ...state];
    default:
      return state;
  }
}

export default postReducer;
