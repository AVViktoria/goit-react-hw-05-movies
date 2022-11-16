import { Box } from 'components/Box';
import { Input, Label, Form, Button } from './Search.styled';

// export default function Searchbar({ onSubmit }) {
//   const [query, setQuery] = useState('');

//   const onChangeInput = e => {
//     const { value } = e.currentTarget;
//     setQuery(value);
//   };

// const onSubmitForm = e => {
//   e.preventDefault();

//   onSubmit(query);
//   if (query.trim() === '') {
//     toast.error("Please, enter some picture's name!", {
//       position: 'top-right',
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: 'colored',
//     });
//     return;
//   }

//   onSubmit(query);
// };

export const Search = () => {
  return (
    <Box>
      <Form>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Input movie name"
          // value={query}
          // onChange={onChangeInput}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Box>
  );
};
