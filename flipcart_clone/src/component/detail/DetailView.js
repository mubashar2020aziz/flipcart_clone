import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
import ActionItem from './ActionItem';
import { Box, Grid, styled } from '@mui/material';
import ProductDetail from './ProductDetail';

const Component = styled(Box)`
  background: #f2f2f2;
`;
const Container = styled(Grid)(({ theme }) => ({
  background: '#fff',
  [theme.breakpoints.down('md')]: {
    margin: 0,
  },
}));
const RightContainer = styled(Grid)`
  margin-top: 55px;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  // this id take from app folder after product
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, loading, product]);
  console.log(product);
  return (
    <Component>
      {product && Object.keys(product).length && (
        // parant box start
        <Container container>
          {/* left box */}
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          {/* right box */}
          <RightContainer item lg={8} md={8} sm={4} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
          {/* parant box end */}
        </Container>
      )}
    </Component>
  );
};
export default DetailView;
