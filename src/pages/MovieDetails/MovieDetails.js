import { getDetailsMovie } from 'services/Api/Api';
import { useState, useEffect } from 'react';
import { Button } from 'pages/Search/Search.styled';
import {
  useNavigate,
  useParams,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';

export const MovieDetails = () => {
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
  const {
    title,
    poster_path,
    vote_average,
    release_date,
    overview,
    // id,
    genre_ids,
  } = movieDetails;
  return (
    <>
      <Button type="button" onClick={handleGoBack}>
        Go Back
      </Button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="300"
          height="400"
        />
        <h1>{title}</h1>
        <p>{overview}</p>
        <p>{release_date}</p>
        <p>{vote_average}</p>
        <p>{genre_ids}</p>
        {/* <p>{id}</p> */}
      </div>
      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};

/* MovieDetails{movieId} */

// const {
//       title,
//       poster_path,
//       vote_average,
//       release_date,
//       overview,
//       id,
//       genre_ids,
//     } = movie;
