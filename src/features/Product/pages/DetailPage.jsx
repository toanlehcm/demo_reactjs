import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import ProductThumbnail from '../components/ProductThumbnail';
import { useRouteMatch } from 'react-router';
import useProductDetail from '../hooks/useProductDetail';

DetailPage.propTypes = {};

function DetailPage(props) {
  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return <Box>Loading</Box>;
  }

  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid
              item
              sx={{
                width: '400px',
                padding: '12px',
                borderRight: `1px solid ${grey[300]}`,
              }}
            >
              <ProductThumbnail product={product} />
            </Grid>

            <Grid
              item
              sx={{
                padding: '12px',
                flex: '1 1 0',
              }}
            >
              ProductInfo
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
