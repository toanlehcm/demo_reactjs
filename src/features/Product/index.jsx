import React from 'react';
import ListPage from './pages/ListPage';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Box } from '@mui/material';
import DetailPage from './pages/DetailPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} component={ListPage} exact />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
