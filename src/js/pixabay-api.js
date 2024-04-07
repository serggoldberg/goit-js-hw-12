import axios from 'axios';

export async function getapiImges(query, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: '43274302-b3b24986af50d43a0f99334ad',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };
  const url = `${BASE_URL}?${params}`;

  const res = await axios.get(url, { params });
  return res.data;
}