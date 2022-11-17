//*        маршрутизация      //
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';
import { Layouts } from 'components/Layouts/Layouts';
import { NotFound } from 'components/NotFound/NotFound';
import { Search } from 'components/Search/Search';
import { TrendingMoviesList } from '../HomeMovies/HomeMovies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
// import { NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <>
      {/* <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav> */}
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="home" element={<TrendingMoviesList />}></Route>
          <Route path="movies" element={<Search />}>
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
