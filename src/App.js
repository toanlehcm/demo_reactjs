import React from 'react';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

export default function App() {

  return (
    <div className='App'>
      Header

      <p><NavLink to='/todos' activeClassName="active-menu">todo</NavLink></p>
      <p><NavLink to='/albums' activeClassName="active">Album</NavLink></p>

      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path='/albums' element={<AlbumFeature />} />
      </Routes>

      Footer
    </div>
  );
}
