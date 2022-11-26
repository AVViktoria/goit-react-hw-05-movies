import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { getMoviesByQuery } from 'services/Api/Api';
import { TrendingMoviesList } from 'components/MoviesList/MoviesList';

// import { Box } from 'components/Box';
import { Form, Input, Button, Cover, TrendCover } from './Search.styled';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const onChangeInput = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ query });

    if (query.trim() === '') {
      alert('Please, enter some picture name!');

      // toast.error("Please, enter some picture's name!");
    }
  };
  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }
    getMoviesByQuery(searchQuery).then(setMoviesByQuery);
  }, [searchParams]);
  return (
    <Cover>
      <Form onSubmit={onSubmitForm}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Input movie name"
          value={query}
          onChange={onChangeInput}
        />
        <Button type="submit">Search</Button>
      </Form>
      <TrendCover>
        <TrendingMoviesList trendingMovies={moviesByQuery} />
      </TrendCover>
    </Cover>
  );
};
export default Search;
