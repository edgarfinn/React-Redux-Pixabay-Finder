import {FETCH_IMAGES} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return action.payload
    default:
      return state;
  }
}
