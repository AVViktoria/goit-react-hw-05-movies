//*        маршрутизация      //
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import ScrollToTop from 'react-scroll-to-top';
// import { TfiAngleDoubleUp } from 'react-icons/tfi';

// import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';
// import { Navigation } from 'components/Navigation/Navigation';
// import { NotFound } from 'components/NotFound/NotFound';
// import { Search } from 'pages/Search/Search';
// import { TrendingMovies } from '../../pages/HomeMovies/HomeMovies';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';
// import { ScrollToTop } from 'components/ScrollToTop';
// import { ScrollToTop } from '../ScrollToTop';
const ScrollToTopButton = lazy(() =>
  import('components/ScrollToTop/ScrollToTop')
);
const GlobalStyle = lazy(() => import('components/GlobalStyle/GlobalStyle'));
const Navigation = lazy(() => import('components/Navigation/Navigation'));
const TrendingMovies = lazy(() => import('pages/HomeMovies/HomeMovies'));
const Search = lazy(() => import('pages/Search/Search'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(() => import('components/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<TrendingMovies />} index></Route>
          <Route path="/movies" element={<Search />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
        <ScrollToTopButton />
      </Suspense>
    </>
  );
};
