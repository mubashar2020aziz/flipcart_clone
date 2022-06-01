import React from 'react';
import Bannars from './Bannars';
import Navbar from './Navbar';
import { Box, styled } from '@mui/system';

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;
const Home = () => {
  return (
    <>
      <Navbar />
      <Component>
        <Bannars />
      </Component>
    </>
  );
};
export default Home;
