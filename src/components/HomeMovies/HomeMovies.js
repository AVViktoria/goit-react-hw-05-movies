import { getTrendingMovie } from '../Api/Api';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const TrendingMoviesList = () => {
  // setIsLoading(true);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie()
      .then(res => {
        setTrendingMovies(res);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);
  if (!trendingMovies) {
    return <p>Sorry, not found</p>;
  }
  return (
    <div>
      <NavLink movies={trendingMovies}></NavLink>
    </div>
  );
};

// <MoviesList movies={trendingFilms} />
