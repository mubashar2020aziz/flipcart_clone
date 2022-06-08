import React from 'react';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: ' 40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px',
  },
}));

const Image = styled('img')({
  background: 'white',
  width: '90%',
  padding: '15px',
});
const StyledButton = styled(Button)(({ theme }) => ({
  width: '48%',
  height: 45,
  [theme.breakpoints.down('lg')]: {
    width: '46%',
    fontSize: 12,
  },
  [theme.breakpoints.down('sm')]: {
    width: '48%',
  },
}));

const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
      <Box
        style={{
          padding: '15px 20px',
          border: '1px solid #f0f0f0',
        }}
      >
        <Image src={product.detailUrl} alt="actionlogo" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: '10px', background: '#ff9f00' }}
      >
        <Cart />
        ADD TO CART
      </StyledButton>
      <StyledButton variant="contained" style={{ background: '#fb541b' }}>
        <Flash /> BUY NOW
      </StyledButton>
    </LeftContainer>
  );
};
export default ActionItem;
