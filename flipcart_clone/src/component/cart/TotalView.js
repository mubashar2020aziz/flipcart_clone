import React, { useEffect, useState } from 'react';
import { Box, Typography, styled } from '@mui/material';

const Header = styled(Typography)`
  padding: 15px 24px;
  background: #fafafa;
  border-bottom: 1px solid #fff;
  box-shadow: 0 -2px 10px 0 rgba(0 0 0 /10%);
`;
const Heading = styled(Box)`
  color: #878787; ;
`;
const Container = styled(Box)`
  padding: 15px 24px;
  background: #fafafa;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;
const Price = styled(Box)`
  float: right;
`;

const Discount = styled(Typography)`
  color: green;
  font-weight: bold;
`;
function TotalView({ cartItems }) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;

    // eslint-disable-next-line array-callback-return
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };
  return (
    <Box>
      <Heading>
        <Header>Price Detail</Header>
      </Heading>
      {/* righttbox */}
      <Container>
        <Typography>
          Price ({cartItems?.length}item)
          <Price component="span"> ₹{price}</Price>
        </Typography>
        <Typography>
          Discount ({cartItems?.length}item)
          <Price component="span"> -₹{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges ({cartItems?.length}item)
          <Price component="span"> ₹40</Price>
        </Typography>
        <Typography variant="h6">
          Total Amount
          <Price component="span"> ₹{price - discount + 40}</Price>
        </Typography>
        <Discount>You will save ₹{discount - 40} at this Order</Discount>
      </Container>
      {/* mainBox */}
    </Box>
  );
}
export default TotalView;
