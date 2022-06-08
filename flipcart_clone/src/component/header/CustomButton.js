import React, { useState, useContext } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 1% 0 auto',
  '& > *': {
    marginRight: '40px',
    fontSize: '16px',
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

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
