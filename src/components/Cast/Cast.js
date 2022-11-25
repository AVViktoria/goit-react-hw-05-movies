import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActors } from 'services/Api/Api';
import noPoster from 'images/Posters/noPhoto.jpeg';

export const Cast = () => {
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
    <>
      <ul>
        {movieCast.map(({ id, profile_path, name }) => {
          return (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="300"
                  height="400"
                />
              ) : (
                <img src={noPoster} alt={name} width="300" height="400" />
              )}
              <h2>{name}</h2>

              {/* {e.name} */}
            </li>
          );
        })}
      </ul>
    </>
  );
};
