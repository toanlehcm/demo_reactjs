import React from 'react';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import NotFound from './components/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';
import CounterFeature from './features/Counter';
import Header from 'components/Header';

export default function App() {
  return (
    <div className='App'>
      <Header />


      <Switch>
        <Redirect from="/home" to='/' exact />
        <Route path="/" component={CounterFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path='/albums' component={AlbumFeature} />
        {/* <Route component={NotFound} /> */}
      </Switch>

      Footer
    </div>
  );
}
