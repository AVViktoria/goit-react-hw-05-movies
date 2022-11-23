//*        маршрутизация      //
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';
import { Navigation } from 'components/Navigation/Navigation';
import { NotFound } from 'components/NotFound/NotFound';
import { Search } from 'pages/Search/Search';
import { TrendingMovies } from '../../pages/HomeMovies/HomeMovies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<TrendingMovies />} index></Route>
        <Route path="movies" element={<Search />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
