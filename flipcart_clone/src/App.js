import React from 'react';
import Header from './component/header/Header';
import Home from './component/home/Home';
import DetailView from './component/detail/DetailView';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Box style={{ marginTop: '55px' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
      </Router>
    </DataProvider>
  );
};
export default App;
