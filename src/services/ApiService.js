import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const KEY = '5277758-f1ca1546d6b5e2ffe2eaf824e';

export async function getImages(query, page) {
  const BASE_SEARH_PARAMS = {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
    q: query,
  };

  const response = await axios.get(API_URL, {
    params: BASE_SEARH_PARAMS,
  });

  return response.data;
}
