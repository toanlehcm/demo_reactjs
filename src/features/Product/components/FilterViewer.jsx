import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip } from '@mui/material';

FilterViewer.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Giao hàng miễn phí',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Có khuyến mãi',
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte'),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_lte;
      delete newFilters.salePrice_gte;
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 4,
    getLabel: (filters) => `Danh mục: ${filters['category.id']}`,
    isActive: () => true,
    isVisible: (filters) => filters['category.id'],
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters['category.id'];
      return newFilters;
    },
    onToggle: (filters) => {},
  },
];

function FilterViewer({ filters = {}, onChange = null }) {
  return (
    <Box
      component='ul'
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        padding: 0,
        margin: '16px 0px',
        listStyleType: 'none',
        li: {
          margin: 0,
          padding: 1,
        },
      }}
    >
      {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={!x.isRemovable}
            size='small'
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          ></Chip>
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
