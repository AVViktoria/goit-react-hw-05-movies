import axios from 'axios';

const API_KEY = 'api_key=31142dc0aeacf38ab901f6c28fe4e845';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovie = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/day?${API_KEY}`);
  return res.data;
  // console.log(res.data.results);
};

export const getDetailsMovie = async id => {
  const res = await axios.get(`${BASE_URL}/movie/${id}?${API_KEY}`);
  return res.data;
  // console.log(res.data.results);
};

export const getMoviesByQuery = async query => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return res.data.results;
};

export const getActors = async movieId => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?${API_KEY}&language=en-US`
  );
  // console.log(res.data.cast);
  return res.data.cast;
};

export const getReviews = async movieId => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?${API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
  // console.log(res.data.results);
};
