import React, { useState, useContext } from 'react';
import { Box, Button, Typography, styled, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 3% 0 auto',
  '& > *': {
    marginRight: '40px ! important',
    fontSize: '16px',
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'none',
  color: 'inherit',
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

  const { cartItems } = useSelector((state) => state.cart);
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

      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: '10px' }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
export default CustomButton;
