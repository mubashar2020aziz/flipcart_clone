import React, { useState, useContext } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

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
const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const { Account, setAccount } = useContext(DataContext);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {Account ? (
        <Profile Account={Account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={openDialog}>
          LogIn
        </LoginButton>
      )}

      <Typography style={{ marginTop: '3px', width: '135px' }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: '3px' }}>More</Typography>

      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
export default CustomButton;
