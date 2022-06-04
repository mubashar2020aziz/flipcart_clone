import React from 'react';
import Header from './component/header/Header';
import Home from './component/home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
const App = () => {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: '55px' }}>
        <Home />
      </Box>
    </DataProvider>
  );
};
export default App;
