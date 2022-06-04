import React, { useState } from 'react';
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
  margin-top: 5px;

  display: flex;
`;
const Logoutand = styled(Typography)`
  font-size: 14px;
  margin-left: 10px;
`;

const Profile = ({ Account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Logout = () => {
    setAccount('');
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 3, cursor: 'pointer' }}>
          {Account}
        </Typography>
      </Box>

      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            Logout();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontsize="small" />
          <Logoutand>Logout</Logoutand>
        </MenuItem>
      </Component>
    </>
  );
};
export default Profile;
