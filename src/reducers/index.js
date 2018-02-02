import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import imagesReducer from './reducer_images';


const rootReducer = combineReducers({
  form: formReducer,
  images: imagesReducer
})

export default rootReducer;
