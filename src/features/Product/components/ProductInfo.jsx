import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const theme = useTheme();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;

  return (
    <Box
      sx={{
        paddingBottom: 2,
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
      }}
    >
      <Typography component='h1' variant='h4'>
        {name}
      </Typography>

      <Typography
        variant='body2'
        sx={{
          margin: theme.spacing(2, 0),
        }}
      >
        {shortDescription}
      </Typography>

      <Box
        sx={{
          padding: theme.spacing(2),
          backgroundColor: theme.palette.grey[100],
        }}
      >
        <Box
          component='span'
          sx={{
            marginRight: 3,
            fontSize: theme.typography.h4.fontSize,
            fontWeight: 'bold',
          }}
        >
          {formatPrice(salePrice)}
        </Box>

        {promotionPercent > 0 && (
          <>
            <Box
              component='span'
              sx={{
                marginRight: theme.spacing(2),
                textDecoration: 'line-through',
              }}
            >
              {formatPrice(originalPrice)}
            </Box>

            <Box component='span'>{`-${promotionPercent}%`}</Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
