import React, { useState, useEffect } from 'react';
import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
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
const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: black;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState('');

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="search for product's brands and more... "
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <Link
                to={`/product/${product.id}`}
                onClick={() => setText('')}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ListItem>{product.title.longTitle}</ListItem>
              </Link>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};
export default Search;
