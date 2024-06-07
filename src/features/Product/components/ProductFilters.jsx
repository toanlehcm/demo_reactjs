import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      'category.id': newCategoryId,
    };

    onChange(newFilters);
  };

  const handleFiltersChange = (newValues) => {
    if (onChange) onChange(newValues);
  };

  return (
    <div>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleFiltersChange} />
      <FilterByService filters={filters} onChange={handleFiltersChange} />
    </div>
  );
}

export default ProductFilters;
