import React from 'react';
import { Box, styled, Typography, Button } from '@mui/material';
import CommonUtls from '../../utls/CommonUtls';
import ButtonGroup from './ButtonGroup';
import { removeToCart } from '../../redux/actions/CartAction';
import { useDispatch } from 'react-redux';
const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fafafa;
`;
const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const SellerText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;
const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
`;
const CartItem = ({ item }) => {
  const fassured =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    // removeToCart take from redux cart action
    dispatch(removeToCart(id));
  };
  return (
    <Component>
      {/* left Box */}
      <LeftComponent>
        <img
          src={item.url}
          alt="product"
          style={{ height: '110px', width: '110px' }}
        />
        <ButtonGroup />
      </LeftComponent>
      {/* Right Box */}
      <Box style={{ margin: '20px' }}>
        <Typography>{CommonUtls(item.title.longTitle)}</Typography>
        <SellerText>
          Seller:RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="logo"
              style={{ width: '50px', marginLeft: '10px' }}
            />
          </Box>
        </SellerText>
        <Typography style={{ margin: '20px 0' }}>
          <Box
            component="span"
            style={{ fontWeight: 'bold', fontSize: '18px', marginLeft: '10px' }}
          >
            ₹ {item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box
            component="span"
            style={{
              color: '#878787',
              textDecoration: 'line-through',
              marginLeft: '10px',
            }}
          >
            {item.price.mrp}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: '#388E3C', marginLeft: 3 }}>
            {item.price.discount}
          </Box>
          &nbsp;&nbsp;&nbsp;
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>

      {/* main box end */}
    </Component>
  );
};
export default CartItem;
