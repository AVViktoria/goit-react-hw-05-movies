

// //*       пример маршрутизации магазина      //
// import { Routes, Route } from "react-router-dom";
// import {HomePage} from '../HomePage';
// // import About from "path/to/pages/About";
// // import Products from "path/to/pages/Products";
// // import NotFound from "path/to/pages/NotFound";
// // import ProductDetails from "path/to/pages/ProductDetails";
// // import Mission from "path/to/components/Mission";
// // import Team from "path/to/components/Team";
// // import Reviews from "path/to/components/Reviews";


// //* .      Маршруты                 //
// // '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// // '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// // '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// // /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// // /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.




// export const App = () => {
//   return (
//     <div>
//       {/* <nav>
//         <Link to="/">Home</Link>
//         <Link to="/movies">Movies</Link>
//       </nav> */}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         {/* <Route path="/movies" element={<Movies />}>
//           <Route path="movieDetails" element={<MovieDetails />} />
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route> */}
//         {/* <Route path="/products" element={<Products />} />
//         <Route path="/products/:productId" element={<ProductDetails />} /> */}
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </div>
//   );
// };


// //*         useParams       //
// // import { useParams } from "react-router-dom";

// // const ProductDetails = () => {
// //   const { productId } = useParams();
// //   return <div>Now showing product with id - {productId}</div>;
// // };


// //* .      ТЗ                     //
// // '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// // '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// // '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// // /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// // /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.