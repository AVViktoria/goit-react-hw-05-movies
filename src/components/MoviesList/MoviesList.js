// import { getTrendingMovie } from '../../services/Api/Api';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const TrendingMoviesList = ({ trendingMovies }) => {
  // setIsLoading(true);
  const location = useLocation();

  return (
    <ul>
      {trendingMovies.map(e => (
        <li key={e.id}>
          <Link to={`/movies/${e.id}`} state={{ from: location }}>
            {e.title || e.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
