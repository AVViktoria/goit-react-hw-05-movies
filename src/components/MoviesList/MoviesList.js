import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import noPoster from 'images/Posters/noPoster.jpeg';
import { Cover, List } from './MovieList.styled';

export const TrendingMoviesList = ({ trendingMovies }) => {
  // setIsLoading(true);
  const location = useLocation();

  return (
    <List>
      {trendingMovies.map(({ id, poster_path, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Cover>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width="300"
                  height="400"
                />
              ) : (
                <img src={noPoster} alt={title} width="300" height="400" />
              )}
              <h2>{title || name}</h2>
            </Cover>
          </Link>
        </li>
      ))}
    </List>
  );
};
