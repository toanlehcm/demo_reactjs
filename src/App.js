import React from 'react';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import NotFound from './components/NotFound';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <div className='App'>
      Header

      <p><NavLink to='/todos' activeClassName="active-menu">Todo</NavLink></p>
      <p><NavLink to='/albums' activeClassName="active">Album</NavLink></p>

      <Switch>
        <Redirect from="/home" to='/' exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path='/albums' component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>

      Footer
    </div>
  );
}
