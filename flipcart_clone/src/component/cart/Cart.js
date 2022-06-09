import React from 'react';
// useselector use for take product value from redux
import { useSelector } from 'react-redux';
import { styled, Grid, Box, Typography, Button } from '@mui/material';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

const Container = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  [theme.breakpoints.down('md')]: {
    padding: '15px 0',
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fafafa;
  box-shadow: 0 -2px 10px 0 rgba(0 0 0 /10%);
`;
const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  /* background: #fafafa; */
  box-shadow: 0 -2px 10px 0 rgba(0 0 0 /10%);
  border-top: 1px solid #f0f0f0;
`;
const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb541b;
  color: #fff;
  font-weight: bold;
  width: 250px;
  height: 51px;
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: '15px',

  [theme.breakpoints.down('md')]: {
    marginBottom: '15px',
  },
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length ? (
        <Container container>
          {/* left side */}
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}

            <ButtonWrapper>
              <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          {/* right side */}
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
          {/* main grid */}
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
export default Cart;
