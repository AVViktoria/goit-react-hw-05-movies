import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActors } from 'services/Api/Api';

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
        {movieCast.map(e => {
          return (
            <li key={e.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                alt={e.title}
                width="300"
                height="400"
              />
              <h1>{e.title}</h1>

              {/* {e.name} */}
            </li>
          );
        })}
      </ul>
    </>
  );
};
