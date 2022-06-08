import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { Box, Typography, Button, Divider, styled } from '@mui/material';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #fff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;
const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px;
`;
const ViewButton = styled(Button)`
  margin-left: auto;
  background: #2874f0;
  font-size: 13px;
  font-weight: bold;
`;
const Image = styled('img')({
  width: 'auto',
  height: '150px',
});
const Text = styled(Typography)`
  font-size: '12px';
  margin-top: '5px';
`;

const Slide = ({ products, title, timer }) => {
  const timerURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left:
      </Box>
    );
  };
  return (
    <>
      <Component>
        <Deal>
          <DealText>{title}</DealText>
          {timer && (
            <Timer>
              <img src={timerURL} alt="timer logo" style={{ width: '14px' }} />
              <Countdown date={Date.now() + 50400000} renderer={renderer} />
            </Timer>
          )}

          <ViewButton variant="contained" color="primary">
            View All
          </ViewButton>
        </Deal>
        <Divider />
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={true}
          slidesToSlide={1}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product) => (
            <Link
              to={`product/${product.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Box style={{ textAlign: 'center', padding: '25px 15px' }}>
                <Image src={product.url} alt="product" />
                <Text style={{ fontWeight: '600', color: '#212121' }}>
                  {product.title.shortTitle}
                </Text>
                <Text style={{ color: 'green' }}>{product.discount}</Text>
                <Text style={{ color: '#7f7f7', opacity: '.6' }}>
                  {product.tagline}
                </Text>
              </Box>
            </Link>
          ))}
        </Carousel>
      </Component>
    </>
  );
};
export default Slide;
