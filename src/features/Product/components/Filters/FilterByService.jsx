import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  const handleChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;

    onChange({ [name]: checked });
  };

  return (
    <Box
      sx={{
        padding: '16px',
        borderTop: `1px solid ${grey[300]}`,
        ul: {
          padding: 0,
          margin: 0,
          listStyleType: 'none',
          li: {
            margin: 0,
            marginTop: '4px',
            '&:hover': {
              color: 'blue',
              cursor: 'pointer',
            },
            label: {
              width: '100%',
              ml: 0,
            },
          },
        },
      }}
    >
      <Typography>DỊCH VỤ</Typography>

      <ul>
        {[
          { value: 'isPromotion', label: 'Có khuyến mãi' },
          { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color='primary'
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
