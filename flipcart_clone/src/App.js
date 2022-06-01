import React from 'react';
import Header from './component/header/Header';
import Home from './component/home/Home';
import { Box } from '@mui/material';
const App = () => {
  return (
    <>
      <Header />
      <Box style={{ marginTop: '55px' }}>
        <Home />
      </Box>
    </>
  );
};
export default App;
