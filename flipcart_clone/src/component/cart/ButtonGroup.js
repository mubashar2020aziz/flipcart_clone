import React from 'react';
import { Button, ButtonGroup, styled } from '@mui/material';

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;
const Styledbutton = styled(Button)`
  border-radius: 50px;
`;
const GroupedButton = () => {
  return (
    <Component>
      <Styledbutton>-</Styledbutton>
      <Styledbutton>1</Styledbutton>
      <Styledbutton>+</Styledbutton>
    </Component>
  );
};
export default GroupedButton;
