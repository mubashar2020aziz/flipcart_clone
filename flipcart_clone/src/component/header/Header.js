import React from 'react';
import Search from './Search';
import CustomButton from './CustomButton';
import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material';
const StyledHeader = styled(AppBar)`
  background: #2784f0;
  height: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled('img')({
  width: '10px',
  height: '10px',
  marginLeft: '4px',
});

const CustomButtonWrapper = styled(Box)`
  margin: 0 1% 0 auto;
`;
const Header = () => {
  const logoURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <>
      <StyledHeader>
        <Toolbar style={{ minHeight: '55px' }}>
          <Component>
            <img src={logoURL} alt={logoURL} style={{ width: '75px' }} />
            <Box style={{ display: 'flex' }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: '#ffe500' }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImage src={subURL} alt={subURL} />
            </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>
            <CustomButton />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </>
  );
};
export default Header;
