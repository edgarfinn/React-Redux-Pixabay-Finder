import {FETCH_IMAGES} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {imagesState: "fetching images"}
      break;
    default:
      return state;

  }

}
