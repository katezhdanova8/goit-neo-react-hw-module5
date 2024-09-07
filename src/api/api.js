import axios from "axios";

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTQ4YzZhZTk5NmJmYzI4ZDcwNDNhNTg1Mjc5YWQ3YiIsIm5iZiI6MTcyNTcxNjY0OC42MTMyODcsInN1YiI6IjY2ZGM1ODBmOTM5ZmRmNjRjMzk1YzhkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dB9vyoHjoDwaLuKrU17-PATP4mLEr7wCGhRulsc0Rec';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  params: {
    include_adult: false,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async ({ period = 'day' }) => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/${period}`,
    options
  );

  return response.data;
}

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}`,
    options
  );

  return response.data;
}

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    options
  );

  return response.data;
}

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    options
  );

  return response.data;
}

export const fetchMovieSearch = async ({ query }) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      ...options,
      params: {
        ...options.params,
        query,
      },
    }
  );

  return response.data;
}