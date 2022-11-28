import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getActors } from 'services/Api/Api';
import noPoster from 'images/Posters/noPhoto.jpeg';
import { Container, Img, List, Title } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getActors(movieId)
      .then(setMovieCast)
      .catch(({ message }) => {
        console.log(message);
      });
  }, [movieId]);

  // if (!cast) {
  //   return alert('NO CAST');
  // }
  return (
    <Container>
      <List>
        {movieCast.map(({ id, profile_path, name }) => {
          return (
            <li key={id}>
              {profile_path ? (
                <Img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="170"
                  height="240"
                />
              ) : (
                <Img src={noPoster} alt={name} width="170" height="240" />
              )}
              <Title>{name}</Title>
            </li>
          );
        })}
      </List>
    </Container>
  );
};

List.propTypes = {
  movieCast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default Cast;
