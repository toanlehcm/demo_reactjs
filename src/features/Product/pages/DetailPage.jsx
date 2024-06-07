import React from 'react';
import { Box, Container, Grid, LinearProgress, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import ProductThumbnail from '../components/ProductThumbnail';
import { useRouteMatch, Route, Switch } from 'react-router';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductReviews from '../components/ProductReviews';
import { addToCart } from 'features/Cart/cartSlice';
import { useDispatch } from 'react-redux';

function DetailPage(props) {
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        <LinearProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });
    dispatch(action);
  };

  return (
    <Box sx={{ paddingBottom: 3 }}>
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
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />

        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route path={`${url}/additional`} component={ProductAdditional} />
          <Route path={`${url}/reviews`} component={ProductReviews} />
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
