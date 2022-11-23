import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="home" component={NavLink} to="/" />
        <Tab label="movies" component={NavLink} to="/movies" />
      </Tabs>
    </Box>
  );
};

// import { Box } from '../Box';
// import styled from 'styled-components';
// import { BiHome } from 'react-icons/bi';
// import { BiCameraMovie } from 'react-icons/bi';
// import { NavLink } from 'react-router-dom';
// // import { Outlet } from 'react-router-dom';

// const navItems = [
//   { href: 'Home', text: 'Home', icon: BiHome },
//   { href: 'Movies', text: 'Movies', icon: BiCameraMovie },
// ];

// const NavItem = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   gap: ${p => p.theme.space[3]}px;
//   padding: ${p => p.theme.space[3]}px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: ${p => p.theme.colors.text};
//   &.active {
//     background-color: ${p => p.theme.colors.primary};
//     color: ${p => p.theme.colors.white};
//   }
//   :hover:not(.active),
//   :focus-visible:not(.active) {
//     color: ${p => p.theme.colors.primary};
//   }
//   :nth-of-type(1) {
//     margin-right: 20px;
//   }
// `;

// export const Navigation = () => {
//   return (
//     <Box as="header" p={4} borderBottom="1px solid black" marginBottom="20px">
//       <Box as="nav" display="flex" flexDirection="row">
//         {navItems.map(({ href, text, icon: Icon }) => (
//           <NavItem to={href} key={href}>
//             <Icon size="16" />
//             {text}
//           </NavItem>
//         ))}
//       </Box>

//       {/* <Outlet /> */}
//     </Box>
//   );
// };