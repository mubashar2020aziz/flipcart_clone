import React, { useState } from 'react';
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
const StyledHeader = styled(AppBar)`
  background: #2784f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
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

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
const MenuIcon = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const Header = () => {
  const logoURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box style={{ width: 200 }} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButton />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <StyledHeader>
        <Toolbar style={{ minHeight: '55px' }}>
          <MenuIcon color="inherit" onClick={handleOpen}>
            <Menu />
          </MenuIcon>
          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>
          <Component to="/">
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
