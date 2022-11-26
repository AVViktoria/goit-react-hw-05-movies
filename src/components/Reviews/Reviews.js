import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'services/Api/Api';
import { Cover, List } from './Reviews.styled';

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
    <Cover>
      {movieReviews.map(e => {
        return (
          <List key={e.id}>
            <h3>{e.author} :</h3>
            <p>{e.content}</p>
          </List>
        );
      })}
    </Cover>
  );
};
export default Reviews;
