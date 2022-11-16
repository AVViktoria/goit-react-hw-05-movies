import { Box } from '../Box';
// import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <div>Home</div>
      <div>Movies</div>

      {/* <Outlet /> */}
    </Box>
  );
};
