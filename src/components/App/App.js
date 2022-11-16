//*        маршрутизация      //
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { Layouts } from '../Layouts/Layouts';
import { NotFound } from 'components/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="home" element={<div>Home</div>}></Route>
          <Route path="movies" element={<div>Movies</div>}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
