import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', bgcolor: '#00000042' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="home" component={NavLink} to="/" />
        <Tab label="movies" component={NavLink} to="/movies" />
      </Tabs>
    </Box>
  );
};
export default Navigation;
