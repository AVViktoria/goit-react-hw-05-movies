import { getTrendingMovie } from '../../services/Api/Api';
import { useState, useEffect } from 'react';
import { TrendingMoviesList } from 'components/MoviesList/MoviesList';
import { Cover } from './HomeMovies.styled';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie()
      .then(res => {
        setTrendingMovies(res.results);
        console.log(res.results);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);
  if (!trendingMovies) {
    return <p>Sorry, not found</p>;
  }
  return (
    <>
      <Cover>
        <TrendingMoviesList trendingMovies={trendingMovies} />
      </Cover>
    </>
  );
};
export default TrendingMovies;
