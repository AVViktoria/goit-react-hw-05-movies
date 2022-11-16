import { Navigation } from '../Navigation/Navigation';
import { Box } from '../Box';
import { Outlet } from 'react-router-dom';

export const Layouts = () => {
  return (
    <Box display="grid" justifyContent="center">
      <Navigation />

      <Outlet />
    </Box>
  );
};
