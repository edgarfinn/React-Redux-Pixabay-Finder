import axios from 'axios';
import getSearchTerm from '../Helpers/randomSearchTerm';

export const FETCH_IMAGES = 'FETCH_IMAGES';
const ROOT_URL = 'https://pixabay.com/api/',
API_KEY = process.env.REACT_APP_ACCESS_TOKEN;


export const fetchImages = (values) => {
  const TERM = getSearchTerm(),
  {color} = values,
  queryString=`${ROOT_URL}?key=${API_KEY}&q=${color}+${TERM}`,
  request = axios.get(queryString);

  return {
    type: FETCH_IMAGES,
    payload: request
  }
}
