import { getDetailsMovie } from 'components/Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    getDetailsMovie()
      .then(res => {
        setMovieDetails(res);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);
  if (!movieDetails) {
    return <p>Sorry, doesn't have details</p>;
  }
  const {
    title,
    poster_path,
    vote_average,
    release_date,
    overview,
    id,
    genre_ids,
  } = movieDetails;
  return (
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
      <p>{id}</p>
    </div>
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
