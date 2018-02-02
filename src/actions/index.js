import axios from 'axios';
import getSearchTerm from '../Helpers/randomSearchTerm';

export const FETCH_IMAGES = 'FETCH_IMAGES';

export const fetchImages = (value) => {
  console.log("action fetching ", value);
  return {
    type: FETCH_IMAGES
  }
}
