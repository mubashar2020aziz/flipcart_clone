import React, { useEffect } from 'react';
import Bannars from './Bannars';
import Navbar from './Navbar';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import { Box, styled } from '@mui/system';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;
const Home = () => {
  //this state.getProducts take from devtool redux extention
  // for fetching data
  const { products } = useSelector((state) => state.getProducts);
  // //destructuring products
  // // const { products } = getProducts;
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    //   //this getProducts take from productReducter
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Component>
        <Bannars />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discount for You" timer={false} />
        <Slide products={products} title="Suggesting Item's" timer={false} />
        <Slide products={products} title="Top Selection's" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Seasons Top Picks" timer={false} />
      </Component>
    </>
  );
};
export default Home;
