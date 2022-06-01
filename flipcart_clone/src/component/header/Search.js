import React from 'react';
import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 5px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  margin-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: black;
  padding: 5px;
  display: flex;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="search for product's brands and more... " />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};
export default Search;
