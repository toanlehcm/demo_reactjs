import React from 'react';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <div className='App'>
      Header
      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path='/albums' element={<AlbumFeature />} />
      </Routes>
      Footer
    </div>
  );
}
