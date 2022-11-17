import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieReviews } = useParams();
  console.log(movieReviews);
};
