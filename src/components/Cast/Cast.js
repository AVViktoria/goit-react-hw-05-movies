import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieCast } = useParams();
  console.log(movieCast);
};
