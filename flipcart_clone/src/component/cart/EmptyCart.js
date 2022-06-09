import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const Component = styled(Box)(({ theme }) => ({
  height: '80vh',
  width: '80%',
  background: '#f5f5f5',
  margin: '85px 140px',
  borderRadius: '20px',
  [theme.breakpoints.down('md')]: {
    height: '60vh',
    width: '60%',
    marginLeft: '70px',
  },
}));
const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;
const EmptyCart = () => {
  const imgurl =
    'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    <Component>
      <Container>
        <img src={imgurl} alt="empty logo" style={{ width: '15%' }} />
        <Typography>Your cart is empty</Typography>
        <Typography>Add item to it now</Typography>
      </Container>
    </Component>
  );
};
export default EmptyCart;
