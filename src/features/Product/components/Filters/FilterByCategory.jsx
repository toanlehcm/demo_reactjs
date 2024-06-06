import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from 'api/categoryApi';
import styles from './FilterByCategory.module.scss';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();

        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          })),
        );
      } catch (error) {
        console.log('Failed to fetch category list: ', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      console.log('category', category);
      onChange(category.id);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant='subtitle2'>DANH MỤC SẢN PHẨM</Typography>

      <ul>
        {categoryList.map((item, index) => (
          <li key={item.id} onClick={() => handleCategoryClick(item)}>
            <Typography variant='body2'>{item.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
