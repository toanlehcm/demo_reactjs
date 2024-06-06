import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleFilterChange = (newCategoryId) => {
    console.log('newCategoryId', newCategoryId);
    if (!onChange) return;

    const newFilters = {
      ...filters,
      'category.id': newCategoryId,
    };

    onChange(newFilters);
  };

  return (
    <div>
      <FilterByCategory onChange={handleFilterChange} />
      {/* <FilterByPrice onChange={handleFilterChange} /> */}
    </div>
  );
}

export default ProductFilters;
