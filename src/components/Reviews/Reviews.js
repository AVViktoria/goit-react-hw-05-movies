import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'services/Api/Api';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  // console.log(movieReviews);
  useEffect(() => {
    getReviews(movieId)
      .then(setMovieReviews)
      .catch(({ message }) => {
        console.log(message);
      });
  }, [movieId]);
  if (movieReviews.length === 0) {
    return <h3>No reviews...</h3>;
  }

  return (
    <>
      {movieReviews.map(e => {
        return (
          <li key={e.id}>
            <h3>{e.author} :</h3>
            <p>{e.content}</p>
          </li>
        );
      })}
    </>
  );
};
