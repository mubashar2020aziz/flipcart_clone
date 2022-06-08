import React from 'react';
import {
  Typography,
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyledBadge = styled(Badge)`
  margin-right: 10px;
  margin-left: 10px;
  color: green;
  font-size: 15px;
`;
const Columntext = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;
const ProductDetail = ({ product }) => {
  const fassured =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const adURL =
    'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography style={{ marginLeft: '10px' }}>
        {product.title.longTitle}
      </Typography>
      <Typography
        style={{
          fontSize: '14px',
          color: '#878787',
          marginTop: '5px',
          marginLeft: '10px',
        }}
      >
        8 Rating & 1 Reviews
        <Box component="span">
          <img
            src={fassured}
            alt="rating logo"
            style={{ marginLeft: 20, width: 77 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28, marginLeft: '10px' }}>
          ₹ {product.price.cost}
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
          {product.price.mrp}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: '#388E3C', marginLeft: 3 }}>
          {product.price.discount}
        </Box>
        &nbsp;&nbsp;&nbsp;
      </Typography>
      <Typography style={{ marginLeft: 10 }}>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge /> Special PriceGet extra 6% off (price inclusive of
          discount)T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer10% off on UBL Bank Credit Cards, up to ₹300. On orders of
          ₹1750 and aboveT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
        </Typography>
        <Typography>
          <StyledBadge /> Bank OfferFlat ₹100 Off* On 1st Transaction through
          Flipkart Pay LaterT&C
        </Typography>
      </SmallText>

      <Table>
        <TableBody>
          <Columntext>
            <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: '600' }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </Columntext>
          <Columntext>
            <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </Columntext>
          <Columntext>
            <TableCell style={{ color: '#878787' }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: '#2874f0' }}>
                SuperComNet
              </Box>
              <Typography>GST Invoice Available</Typography>
              <Typography>
                View more seller from ₹{product.price.cost}
              </Typography>
            </TableCell>
          </Columntext>
          <Columntext>
            <TableCell colSpan={2}>
              <img src={adURL} alt="colspan logo" style={{ width: 290 }} />
            </TableCell>
          </Columntext>
          <Columntext>
            <TableCell style={{ color: '#878787' }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </Columntext>
        </TableBody>
      </Table>
    </>
  );
};
export default ProductDetail;
