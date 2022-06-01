import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CustomButton = () => {
  const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button,
    & > p,
    & > div {
      margin-right: 40px;
      font-size: 16px;
      align-items: center;
    }
  `;
  const Container = styled(Box)`
    display: flex;
  `;
  const LoginButton = styled(Button)`
    background: #fff;
    color: #2874f0;
    padding: 5px 40px;
    text-transform: none;
    font-weight: bold;
    height: 32px;
  `;
  return (
    <Wrapper>
      <LoginButton variant="contained">LogIn</LoginButton>
      <Typography style={{ marginTop: '3px', width: '135px' }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: '3px' }}>More</Typography>

      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
};
export default CustomButton;
