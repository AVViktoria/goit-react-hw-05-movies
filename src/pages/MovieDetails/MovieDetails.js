import { getDetailsMovie } from 'services/Api/Api';
import { useState, useEffect } from 'react';

import {
  CardCover,
  Cover,
  Button,
  Img,
  InfCover,
  Title,
  Item,
  ButCover,
  LinkCover,
  LinkName,
} from './MovieDetails.styled';
import {
  useNavigate,
  useParams,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  //  console.log(location);
  // console.log(movieId);

  const [movieDetails, setMovieDetails] = useState(null);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    getDetailsMovie(movieId)
      .then(setMovieDetails)
      .catch(({ message }) => {
        console.log(message);
      });
  }, [movieId]);
  if (!movieDetails) {
    return <p>Sorry, doesn't have details</p>;
  }
  const { title, poster_path, vote_average, release_date, overview, genres } =
    movieDetails;
  return (
    <Cover>
      <ButCover>
        <Button type="button" onClick={handleGoBack}>
          Go Back
        </Button>
      </ButCover>

      <CardCover>
        <Img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="300"
          height="400"
        />
        <InfCover>
          <Item>
            <Title>{title}</Title>
          </Item>

          <Item>
            <h3>About: </h3>
            <p>{overview}</p>
          </Item>

          <Item>
            <h3>Release Date: </h3>
            <p>{release_date}</p>
          </Item>

          <Item>
            <h3>Score: </h3>
            <p>{vote_average.toFixed(1)}</p>
          </Item>

          <Item>
            <h3>Genres</h3>
            <p>{genres ? genres.map(genre => genre.name).join(' ') : '-'}</p>
          </Item>
        </InfCover>
      </CardCover>
      <LinkCover>
        <Link to="cast" state={location.state}>
          <LinkName>Cast</LinkName>
        </Link>
        <Link to="reviews" state={location.state}>
          <LinkName>Reviews</LinkName>
        </Link>
      </LinkCover>

      <Outlet />
    </Cover>
  );
};
export default MovieDetails;
