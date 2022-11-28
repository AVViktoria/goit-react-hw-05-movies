import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'services/Api/Api';
import { Cover, List } from './Reviews.styled';
import PropTypes from 'prop-types';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
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
      {movieReviews.map(({ id, author, content }) => {
        return (
          <List key={id}>
            <h3>{author} :</h3>
            <p>{content}</p>
          </List>
        );
      })}
    </Cover>
  );
};

Cover.propTypes = {
  movieReviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
export default Reviews;
