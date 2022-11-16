//*       пример маршрутизации магазина      //
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { HomePage } from '../components/HomePage/HomePage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
};
