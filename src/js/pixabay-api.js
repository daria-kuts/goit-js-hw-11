import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52812196-5a943dca1ddd7edd2406579c3";



export function getImagesByQuery(query) {
    return axios
        .get(BASE_URL, {
        params: {
         key: API_KEY,
        q: query,
         image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
            }
        })
    .then(response => response.data);
}; 
