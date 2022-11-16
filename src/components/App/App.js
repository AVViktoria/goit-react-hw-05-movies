//*        маршрутизация      //
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { Layouts } from '../Layouts/Layouts';
import { NotFound } from 'components/NotFound/NotFound';
import { Search } from '../Search/Search';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="home" element={<div>Home</div>}></Route>
          <Route path="movies" element={<Search />}>
            {/* <Route path="details" element={<Details />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
