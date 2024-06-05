import React from 'react';
import PropTypes from 'prop-types';
import ListPage from './pages/ListPage';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      ProductFeature
      <Switch>
        <Route path={match.url} component={ListPage} exact />
      </Switch>
    </div>
  );
}

export default ProductFeature;
