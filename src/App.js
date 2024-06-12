import React from 'react';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import NotFound from './components/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';
import CounterFeature from './features/Counter';
import Header from 'components/Header';
import ProductFeature from 'features/Product';
import CartFeature from './features/Cart';
import ReferenceInJS from 'DemoJS/ReferenceInJS';
import StoredByValueAnhReference from 'DemoJS/StoredByValueAnhReference';

export default function App() {
  return (
    <div className='App'>
      <Header />

      <StoredByValueAnhReference />

      <Switch>
        <Redirect from="/home" to='/' exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} exact />
        <Route path='/albums' component={AlbumFeature} exact />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
