import React from 'react';
import { Box, styled } from '@mui/material';
import Slide from './Slide';

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)(({ theme }) => ({
  width: '83%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  background: '#fff',
  padding: '5px',
  marginTop: '10px',
  marginLeft: '10px',
  width: '17%',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <>
      <Component>
        {/* first slide left side */}
        <LeftComponent>
          <Slide products={products} title={title} timer={timer} />
        </LeftComponent>

        {/* right image slide bar */}
        <RightComponent>
          <img src={adURL} alt="add url" style={{ width: '217px' }} />
        </RightComponent>
      </Component>
    </>
  );
};
export default MidSlide;
